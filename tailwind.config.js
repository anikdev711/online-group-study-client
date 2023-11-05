/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans'],
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#1DC295",

          "secondary": "#fdc800",

          "accent": "#5444a5",

          "neutral": "#2b3440",

          "base-100": "#ffffff",

          "info": "#0072f5",

          "success": "#21ca51",

          "warning": "#F68C20",

          "error": "#e65750",
        },
      },
    ],
  },
}

