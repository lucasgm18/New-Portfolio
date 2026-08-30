/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          DEFAULT: 'var(--bg-canvas)',
          subtle: 'var(--bg-canvas-subtle)',
          card: 'var(--bg-canvas-card)',
          dark: 'var(--bg-canvas-dark-block)',
          darkCard: 'var(--bg-canvas-dark-card)',
        },
        accent: {
          DEFAULT: 'var(--accent-color)',
          hover: 'var(--accent-hover)',
          light: 'var(--accent-light)',
          subtle: 'rgba(99, 68, 212, 0.1)',
        },
        border: {
          light: 'var(--border-color)',
          dark: '#27272a',
          hover: 'var(--border-hover)',
        },
        primary: {
          DEFAULT: 'var(--text-primary)',
          muted: 'var(--text-muted)',
          subtle: 'var(--text-subtle)',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.02)',
        'card': '0 4px 20px -2px rgba(0,0,0,0.04), 0 2px 6px -1px rgba(0,0,0,0.02)',
        'modal': '0 20px 40px -15px rgba(0,0,0,0.25)',
      }
    },
  },
  plugins: [],
}
