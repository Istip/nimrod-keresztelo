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
        front: "url('/front.png')",
        back: "url('/back.png')",
      },
      fontFamily: {
        default: ["var(--font-sacramento)"],
        title: ["var(--font-leckerli)"],
      },
      colors: {
        gold: "#FFB300",
      },
    },
  },
  plugins: [],
};
export default config;
