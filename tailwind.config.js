/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fluent: {
          navy: '#0F172A',
          dark: '#0A0F1D',
          surface: '#1E293B',
          warmWhite: '#F8FAFC',
          cardLight: '#FFFFFF',
          royalBlue: '#2563EB',
          emerald: '#10B981',
          slate: '#64748B',
          amber: '#F59E0B',
          rose: '#F43F5E',
          border: '#E2E8F0',
          borderDark: '#334155',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        display: ['"Segoe UI"', 'Inter', 'sans-serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
        mono: ['"Consolas"', '"Courier New"', 'monospace'],
      },
      boxShadow: {
        'fluent-subtle': '0 2px 4px rgba(0, 0, 0, 0.04), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'fluent-card': '0 4px 12px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.08)',
        'fluent-flyout': '0 12px 32px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08)',
        'fluent-glow': '0 0 24px rgba(37, 99, 235, 0.25)',
      },
      borderRadius: {
        'fluent-sm': '4px',
        'fluent-md': '8px',
        'fluent-lg': '12px',
        'fluent-xl': '16px',
        'fluent-2xl': '24px',
      },
    },
  },
  plugins: [],
};
