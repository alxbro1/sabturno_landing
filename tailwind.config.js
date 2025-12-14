/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Paleta oscura con verde neón
          ink: '#ffffff', // texto principal sobre fondos oscuros
          night: '#0a0a0a', // fondo principal oscuro
          neon: '#00f068', // verde neón para CTAs y acentos - rgb(0, 240, 104)
          muted: '#1a1a1a', // fondo secundario oscuro
          card: '#141414', // tarjetas y paneles oscuros
          border: '#2a2a2a', // bordes sutiles
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 26px 80px rgba(15, 23, 42, 0.28)',
        card: '0 14px 45px rgba(15, 23, 42, 0.16)',
      },
      borderRadius: {
        fluid: '36px',
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

