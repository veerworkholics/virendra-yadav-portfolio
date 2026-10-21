module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#07081c',
        surface: '#0f172a',
        panel: '#111827',
        accent: '#7c3aed',
        accent2: '#22d3ee',
        muted: '#94a3b8',
      },
      boxShadow: {
        glow: '0 20px 80px rgba(124, 58, 237, 0.18)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top, rgba(124, 58, 237, 0.12), transparent 24%), radial-gradient(circle at 20% 80%, rgba(34, 211, 238, 0.1), transparent 18%), linear-gradient(180deg, rgba(15, 23, 42, 0.85), rgba(7, 8, 28, 0.95))',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
