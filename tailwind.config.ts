import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'black': '#222222',
        'body': '#222222B3',
        'primary': '#4DA1FF',
        'brand': '#04DFD0',
        'success': '#30C431',
        'error': '#EF3737'

      },
      backgroundColor: {
        'primary': '#4DA1FF',
        'brand': '#04DFD0',
        'yellow': '#EBDB82',
        'blue': '#82CFEB',
        'purple': '#B282EB',
        'red': '#EB82A6'
      },
      borderColor: {
        'success': '#30C431',
        'error': '#EF3737'
      }

    },
  },
  plugins: [],
}
export default config
