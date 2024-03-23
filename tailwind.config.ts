import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'primary-1': 'hsl(205, 86%, 17%)',
        'primary-2': 'hsl(205, 77%, 27%)',
        'primary-3': 'hsl(205, 72%, 37%)',
        'primary-4': 'hsl(205, 63%, 48%)',
        'primary-5': 'hsl(205, 78%, 60%)',
        'primary-6': 'hsl(205, 89%, 70%)',
        'primary-7': 'hsl(205, 90%, 76%)',
        'primary-8': 'hsl(205, 86%, 81%)',
        'primary-9': 'hsl(205, 90%, 88%)',
        'primary-10': 'hsl(205, 100%, 96%)',
        'grey-1': 'hsl(209, 61%, 16%)',
        'grey-2': 'hsl(211, 39%, 23%)',
        'grey-3': 'hsl(209, 34%, 30%)',
        'grey-4': 'hsl(209, 28%, 39%)',
        'grey-5': 'hsl(210, 22%, 49%)',
        'grey-6': 'hsl(209, 23%, 60%)',
        'grey-7': 'hsl(211, 27%, 70%)',
        'grey-8': 'hsl(210, 31%, 80%)',
        'grey-9': 'hsl(212, 33%, 89%)',
        'grey-10': 'hsl(210, 36%, 96%)',
      },
    },
  },
  plugins: [],
};
export default config;
