/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: 'var(--brand-ink)',
          night: 'var(--brand-night)',
          neon: 'var(--brand-neon)',
          'neon-hover': 'var(--brand-neon-hover)',
          'neon-glow': 'var(--brand-neon-glow)',
          muted: 'var(--brand-muted)',
          card: 'var(--brand-card)',
          border: 'var(--brand-border)',
        },
        destructive: 'var(--color-destructive)',
        success: 'var(--color-success)',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 26px 80px rgba(15, 23, 42, 0.28)',
        card: '0 14px 45px rgba(15, 23, 42, 0.16)',
        neon: '0 0 18px rgba(0, 240, 104, 0.6)',
      },
      borderRadius: {
        fluid: '36px',
        card: '28px',
        pill: '24px',
        panel: '40px',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 45%), radial-gradient(circle at 80% 0%, rgba(52, 198, 186, 0.25) 0%, rgba(255, 255, 255, 0) 40%), radial-gradient(circle at 50% 80%, rgba(255, 107, 74, 0.25) 0%, rgba(255, 255, 255, 0) 35%)',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        float: 'float 12s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

