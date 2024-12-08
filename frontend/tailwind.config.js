/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          soft: "#6A5ACD", // More elegant primary color
          accent: "#4169E1", // Refined accent color
          background: "#F8F9FA", // Subtle background tone
        },
        neutral: {
          darkest: "#1F2937", // Enhanced text color
          dark: "#4B5563", // Secondary text
          light: "#F3F4F6", // Light backgrounds
          white: "#FFFFFF",
        },
        accent: {
          warm: "#FFA500", // Warm accent for highlights
          cool: "#00CED1", // Cool accent for contrasts
        },
      },
      boxShadow: {
        elegant:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        hover:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        xl: "0.75rem", // Larger, more modern border radius
        "2xl": "1rem",
      },
      transitionProperty: {
        subtle: "all 250ms ease-in-out",
      },
    },
  },
  plugins: [],
};
