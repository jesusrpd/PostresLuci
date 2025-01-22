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
        "hero-main": "url('/img/donas.jpg')",
        "card-ice" : "url('/img/helado.jpg')", 
        "card-nuts": "url('/img/nuts.jpg')",
      }
    },
  },
  plugins: [],
};
