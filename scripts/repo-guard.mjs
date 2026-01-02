import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

function fail(msg) {
  console.error("\n[REPO-GUARD] ❌ " + msg + "\n");
  process.exit(1);
}

function exists(p) {
  return fs.existsSync(path.join(root, p));
}

function read(p) {
  return fs.readFileSync(path.join(root, p), "utf8");
}

// 1) 루트에 README.md 외 md 파일 금지
const rootFiles = fs.readdirSync(root);
const rootMd = rootFiles.filter(f => f.toLowerCase().endsWith(".md"));
const allowed = new Set(["README.md", "CLAUDE.md"]);
for (const f of rootMd) {
  if (!allowed.has(f)) fail(`Root .md 금지 위반: ${f} (README.md만 허용)`);
}

// 2) PWA 패키지 금지 (vite-plugin-pwa / workbox 계열)
if (exists("package.json")) {
  const pkg = JSON.parse(read("package.json"));
  const deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
  const banned = Object.keys(deps).filter(
    k => k === "vite-plugin-pwa" || k.startsWith("@vite-pwa/") || k.startsWith("workbox-")
  );
  if (banned.length) fail(`PWA 의존성 금지 위반: ${banned.join(", ")}`);
}

// 3) manifest / sw 파일 금지
const bannedPaths = [
  "public/manifest.webmanifest",
  "public/manifest.json",
  "public/sw.js",
  "src/sw.js",
  "src/sw.ts",
  "src/service-worker.js",
  "src/service-worker.ts",
  "sw.js",
];
for (const p of bannedPaths) {
  if (exists(p)) fail(`PWA 파일 금지 위반: ${p}`);
}

// 4) index.html 에 manifest 링크 금지
if (exists("index.html")) {
  const html = read("index.html");
  if (html.includes('rel="manifest"')) fail(`index.html에 manifest link 금지 위반`);
}

// 5) SW 등록 코드 패턴 금지(간단 탐지)
const scanTargets = ["src/main.jsx", "src/main.tsx", "src/main.js", "src/main.ts"];
for (const p of scanTargets) {
  if (!exists(p)) continue;
  const s = read(p);
  if (s.includes("serviceWorker") || s.includes("navigator.serviceWorker")) {
    fail(`${p}에 Service Worker 등록 코드 의심 패턴 발견`);
  }
}

// 6) 콘텐츠 폴더 존재 확인
if (!exists("src/content")) fail("src/content 폴더 없음 (콘텐츠 작업 폴더는 필수)");

// 7) MDX frontmatter youtube 필드 검증 - 채널 URL 금지, 비디오 URL만 허용
function validateYouTubeUrls() {
  const contentDir = path.join(root, "src/content");
  const categories = fs.readdirSync(contentDir).filter(f =>
    fs.statSync(path.join(contentDir, f)).isDirectory()
  );

  // YouTube 비디오 URL 패턴 (watch?v=, youtu.be/, embed/)
  const validVideoPattern = /^https?:\/\/(www\.)?(youtube\.com\/(watch\?v=|embed\/)|youtu\.be\/)[a-zA-Z0-9_-]+/;
  // 채널 URL 패턴 (금지)
  const channelPattern = /youtube\.com\/@|youtube\.com\/channel\//;

  for (const cat of categories) {
    const catDir = path.join(contentDir, cat);
    const files = fs.readdirSync(catDir).filter(f => f.endsWith(".mdx"));

    for (const file of files) {
      const filePath = path.join(catDir, file);
      const content = fs.readFileSync(filePath, "utf8");

      // frontmatter 추출 (--- 사이)
      const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!fmMatch) continue;

      const frontmatter = fmMatch[1];

      // Case 1: 직접 문자열 값 (youtube: "URL" 또는 youtube: URL)
      const directMatch = frontmatter.match(/^youtube:\s*["']?(https?:\/\/[^"'\n]+)["']?\s*$/m);

      // Case 2: 중첩 객체 (youtube:\n  url: "URL")
      const nestedMatch = frontmatter.match(/^youtube:\s*\n\s+url:\s*["']?(https?:\/\/[^"'\n]+)["']?/m);

      const url = directMatch?.[1]?.trim() || nestedMatch?.[1]?.trim();

      // URL이 없거나 http로 시작하지 않으면 스킵 (빈 값이거나 객체만 있는 경우)
      if (!url) continue;

      // 채널 URL 체크
      if (channelPattern.test(url)) {
        fail(`${cat}/${file}: youtube 필드에 채널 URL 금지. 비디오 URL만 허용\n  현재값: ${url}\n  올바른 예: https://youtu.be/VIDEO_ID 또는 https://youtube.com/watch?v=VIDEO_ID`);
      }

      // 유효한 비디오 URL 체크
      if (!validVideoPattern.test(url)) {
        fail(`${cat}/${file}: youtube 필드가 유효한 비디오 URL이 아님\n  현재값: ${url}\n  올바른 예: https://youtu.be/VIDEO_ID 또는 https://youtube.com/watch?v=VIDEO_ID`);
      }
    }
  }
}
validateYouTubeUrls();

// 8) Part 컴포넌트 디자인 잠금 - 색상 하드코딩 금지
// 핵심: Part1/2/3만 엄격 체크 (다른 컴포넌트는 디자인 시스템의 일부로 허용)
function validatePartComponents() {
  const partFiles = [
    "src/components/mdx/Part1.jsx",
    "src/components/mdx/Part2.jsx",
    "src/components/mdx/Part3.jsx",
  ];

  // Tailwind 색상 클래스 패턴 (Part에서 금지) - 색상은 CSS 토큰으로만!
  const colorClassPattern = /\b(text|bg|border|from|to|via)-(amber|blue|purple|pink|orange|indigo|gray|slate|white|black|red|green|yellow|cyan|rose|emerald|violet|fuchsia|lime|sky|teal)-\d+/;

  for (const p of partFiles) {
    if (!exists(p)) continue;
    const content = read(p);
    const filename = path.basename(p);

    // 색상 하드코딩 체크
    if (colorClassPattern.test(content)) {
      const match = content.match(colorClassPattern);
      fail(`${filename}: 색상 하드코딩 금지!\n  발견: ${match[0]}\n  Part 컴포넌트는 클래스명(part1-grandpa-mode 등)만 사용\n  색상은 index.css 토큰에서 관리`);
    }

    // prose-invert 필수 체크
    if (!content.includes("prose-invert")) {
      fail(`${filename}: prose-invert 클래스 필수!\n  다크 테마 텍스트 가시성 보장을 위해 필수`);
    }
  }
}
validatePartComponents();

// 9) index.css 디자인 토큰 무결성 검증 - 필수 토큰 존재 확인
function validateDesignTokens() {
  const cssPath = "src/index.css";
  if (!exists(cssPath)) {
    fail("src/index.css 없음 - 디자인 토큰 파일 필수");
  }

  const css = read(cssPath);

  // 필수 Part 토큰 확인
  const requiredTokens = [
    "--part1-bg-from",
    "--part1-border",
    "--part1-title",
    "--part2-bg-from",
    "--part2-border",
    "--part2-title",
    "--part3-bg-from",
    "--part3-border",
    "--part3-title",
  ];

  for (const token of requiredTokens) {
    if (!css.includes(token)) {
      fail(`index.css: 필수 디자인 토큰 누락 - ${token}\n  디자인 토큰은 삭제/수정 금지`);
    }
  }

  // 필수 Part 클래스 확인
  const requiredClasses = [
    ".part1-grandpa-mode",
    ".part2-system-architect",
    ".part3-theory-map",
  ];

  for (const cls of requiredClasses) {
    if (!css.includes(cls)) {
      fail(`index.css: 필수 Part 클래스 누락 - ${cls}\n  Part 스타일 클래스는 삭제 금지`);
    }
  }

  // 다크 테마 검증 - 밝은 배경색 토큰 사용 금지
  const lightBgPattern = /--part\d-bg-from:\s*rgba?\([^)]*(?:255|250|245|240|235|230|225|220)/;
  if (lightBgPattern.test(css)) {
    fail(`index.css: Part 배경에 밝은 색상 금지\n  다크 테마 유지 필수 (amber-950, blue-950, purple-950 계열)`);
  }
}
validateDesignTokens();

// 10) MDX 콘텐츠 영문 전용 - 한글 감지 시 빌드 실패
function validateEnglishOnly() {
  const contentDir = path.join(root, "src/content");
  const categories = fs.readdirSync(contentDir).filter(f =>
    fs.statSync(path.join(contentDir, f)).isDirectory()
  );

  // 한글 패턴 (가-힣)
  const koreanPattern = /[\uAC00-\uD7AF]/;

  for (const cat of categories) {
    const catDir = path.join(contentDir, cat);
    const files = fs.readdirSync(catDir).filter(f => f.endsWith(".mdx"));

    for (const file of files) {
      const filePath = path.join(catDir, file);
      const content = fs.readFileSync(filePath, "utf8");

      // frontmatter 추출
      const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
      if (!fmMatch) continue;

      // published: true인 파일만 체크
      if (!fmMatch[1].includes("published: true")) continue;

      // frontmatter 제외하고 본문만 추출
      const bodyMatch = content.match(/^---[\s\S]*?---\n([\s\S]*)$/);
      if (!bodyMatch) continue;

      const body = bodyMatch[1];

      // 한글 감지
      if (koreanPattern.test(body)) {
        const match = body.match(koreanPattern);
        const lineNum = body.substring(0, body.indexOf(match[0])).split('\n').length;
        fail(`${cat}/${file}: Korean detected (line ~${lineNum})\n  Content must be English only\n  한글 금지 - 영문만 허용`);
      }
    }
  }
}
validateEnglishOnly();

console.log("\n[REPO-GUARD] ✅ OK (rules satisfied)\n");
