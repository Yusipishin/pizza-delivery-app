import type {Config} from 'tailwindcss'
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        lsr: '15px',
        sr: '16px',
      },
      colors: {
        yel: '#F7D22D',
        wh: '#E3ECF5',
        red: '#FF2E65',
        bl: '#231F20',
        gr: '#828792',
        whBtn: '#F3F3F7',
        pink: '#ff2e65',
      },
      boxShadow: {
        shad: '0px 4px 24px 0px rgba(0,0,0,0.06)',
      }
    }
  },
  plugins: [],
} satisfies Config

