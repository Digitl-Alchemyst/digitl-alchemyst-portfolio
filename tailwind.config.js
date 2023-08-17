/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    textFillColor: (theme) => theme('borderColor'),
    textStrokeColor: (theme) => theme('borderColor'),
    textStrokeWidth: (theme) => theme('borderWidth'),
    screens: {
      xs: '355px',
      sm: '638px',
      md: '768px',
      lg: '960px',
      xl: '1300px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: '#393A47',
        pagebg: '#020321',
        accent: '#1c92ff',
        accent2: '#4CAF50',
        dark: '#1b1b1b',
        light: '#f5f5f5',
        // primary: '#B63E96', // 240,86,199
        // primaryDark: '#58E6D9', // 80,230,217
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
        30: '7.5rem',
        34: '8.5rem',
        38: '9.5rem',
        42: '10.5rem',
        46: '11.5rem',
        50: '12.5rem',
        54: '13.5rem',
        58: '14.5rem',
        62: '15.5rem',
        66: '16.5rem',
        70: '17.5rem',
        74: '18.5rem',
        78: '19.5rem',
        82: '20.5rem',
        86: '21.5rem',
        88: '22rem',
        90: '22.5rem',
        92: '23rem',
        94: '23.5rem',
        98: '24.5rem',
        100: '25rem',
        102: '25.5rem',
        104: '26rem',
        106: '26.5rem',
        108: '27rem',
        110: '27.5rem',
        112: '28rem',
        114: '28.5rem',
        116: '29rem',
        118: '29.5rem',
        120: '30rem',
        122: '30.5rem',
        124: '31rem',
        126: '31.5rem',
        128: '32rem',
        132: '33rem',
        136: '34rem',
        140: '35rem',
        144: '36rem',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        alchemy: 'url("/bg-alchemy.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/sgvs/hs.svg")',
      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
        mont: [`var(--font-mont)`, ...fontFamily.sans],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('tailwindcss-text-fill-stroke'), // no options to configure
    require('tailwind-scrollbar'),
    plugin(({ theme, addUtilities }) => {
      const neonUtilities = {};
      const colors = theme('colors');
      for (const color in colors) {
        if (typeof colors[color] === 'object') {
          const color1 = colors[color][300];
          const color2 = colors[color][600];
          neonUtilities[`.neon-${color}`] = {
            boxShadow: `0 0 5px ${color1}, 0 0 20px ${color2}`,
          };
        }
      }
      addUtilities(neonUtilities);
    }),
  ],
};
