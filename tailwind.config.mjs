/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-main-mobile": "url('/img/hero-main-mobile.png')",
        "hero-main-desktop":"url('/img/hero-main-desktop.png')",
        "footer": "url('/img/macarrones.jpg')",
        "card-postre": "url('/services/postres.jpg')",
        "card-comida":"url('/services/comida.jpg')",
        "card-manualidad": "url('/services/manualidad.jpg')"
      }
    },
  },
  plugins: [],
};
