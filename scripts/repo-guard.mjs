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

console.log("\n[REPO-GUARD] ✅ OK (rules satisfied)\n");
