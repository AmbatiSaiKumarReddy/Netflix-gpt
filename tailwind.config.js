/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'netflix-background':"url(https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/242447b0-bdfd-4235-8288-58d84366f0dc/US-en-20240827-TRIFECTA-perspective_WEB_d7dc1add-9eaf-4d94-88f4-2e2cf381a362_large.jpg)"
      }
    },
  },
  plugins: [],
}