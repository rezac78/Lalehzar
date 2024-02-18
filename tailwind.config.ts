import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#FFF8E1",
        Navbar: "#6F4E37",
        Buttons: "#C68E17",
        ButtonHover: "#E0AC69",
        Text: "#4B2E2E",
        Highlights: "#D3B88C",
      },
    },
  },
  plugins: [],
};
export default config;
