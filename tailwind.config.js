/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eae: {
          primary: '#4F46E5',     // Indigo - Main brand color
          secondary: '#7C3AED',   // Purple - Accent color
          accent: '#F59E0B',      // Amber - Highlight color
          grandpa: '#F59E0B',     // Amber - Part1 theme
          architect: '#3B82F6',   // Blue - Part2 theme
          theory: '#9333EA',      // Purple - Part3 theme
          sketch: '#6B7280',      // Gray - Sketch theme
          music: '#10B981',       // Green - Spotify theme
        },
        fg: {
          DEFAULT: "rgba(255,255,255,0.95)",     // main headings stay strong
          soft: "rgba(255,255,255,0.25)",        // body = new target (25%)
          softer: "rgba(255,255,255,0.18)",      // tertiary
        },
        muted: "rgba(255,255,255,0.25)",          // unify with soft
      },
      fontFamily: {
        sans: ['Inter', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
        display: ['Inter', 'Pretendard', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1F2937',
            p: {
              marginTop: '1.25em',
              marginBottom: '1.25em',
            },
            'h1, h2, h3, h4': {
              fontWeight: '700',
            },
            code: {
              backgroundColor: '#F3F4F6',
              padding: '0.2em 0.4em',
              borderRadius: '0.25rem',
              fontWeight: '500',
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
