/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom:
          "rgba(0, 0, 0, 0.1) 0px 10px 50px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
      },
    },
    animation: {
      "text-slide-3":
        "text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
    },
    keyframes: {
      "text-slide-3": {
        "0%, 26.66%": {
          transform: "translateY(0%)",
        },
        "33.33%, 60%": {
          transform: "translateY(-25%)",
        },
        "66.66%, 93.33%": {
          transform: "translateY(-50%)",
        },
        "100%": {
          transform: "translateY(-75%)",
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
