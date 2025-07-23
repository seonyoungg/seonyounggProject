// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // App Router 기준
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // ✅ 이게 꼭 있어야 함
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
