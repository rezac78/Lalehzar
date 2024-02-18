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
        backgroundColor: "#F5F5DC",
        textColor: "#6F4E37",
        linkColor: "#D4AF37",
        titleColor: "#3B2F2F",
        navbarFooterColor: "#483C32",
        cardBackgroundColor: "#D3D3D3",
        buttonColor: "#800020",
        buttonHoverColor: "#D4AF37",
        ButtonHover: "#E0AC69",
      },
    },
  },
  plugins: [],
};
export default config;
