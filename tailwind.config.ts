import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  fontFamily: {
    sans: ['var(--font-noto-sans-jp)'],
  },
  plugins: [],
}
export default config
