import type { Config } from "tailwindcss"
import daisyui from "daisyui"

export default {
  content: ["node_modules/daisyui/dist/**/*.js", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
} satisfies Config
