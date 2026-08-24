import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f7f8f8',
          100: '#eef1f1',
          200: '#d8dede',
          300: '#b6c0c0',
          400: '#8e9d9d',
          500: '#6f8080',
          600: '#596666',
          700: '#485252',
          800: '#3d4444',
          900: '#353a3a'
        }
      }
    },
  },
  plugins: [],
};

export default config;
