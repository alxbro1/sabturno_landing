/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#0b1c34',
          night: '#111f3c',
          coral: '#ff6b4a',
          teal: '#34c6ba',
          sand: '#fef9f4',
          cloud: '#f4f2fc',
        },
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 20px 70px rgba(13, 27, 52, 0.18)',
        card: '0 12px 40px rgba(15, 23, 42, 0.12)',
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

