import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        raleway: ['var(--font-raleway)', 'sans-serif']
      }
    },
  },
  plugins: [
    function({addBase, theme}: { addBase: (styles: Record<string, any>) => void, theme: (path: string) => any }) {
      addBase({
        'h1, h2, h3, h4, h5': {
          fontFamily: theme('fontFamily.raleway'),
          fontWeight: '800'
        }
      })
    }
  ],
};
export default config;
