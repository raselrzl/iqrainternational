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
    },
  },
  plugins: [],
  safelist: [
    'bg-clip-text', // Safelist bg-clip-text class to avoid purging
    'text-transparent', // Safelist text-transparent class to avoid purging
    'bg-gradient-to-r', // Safelist gradient utility to avoid purging
    'from-blue-400', // Safelist specific gradient color classes
    'via-purple-500',
    'to-pink-500',
  ],
};
