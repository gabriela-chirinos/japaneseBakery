// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ai:              '#1B2444',
        'ai-light':      '#2A3558',
        kinu:            '#F4F0E8',
        akagane:         '#C4703F',
        'akagane-light': '#D4885A',
        sumi:            '#1A1714',
        shio:            '#FFFFFF',
        kinari:          '#E8E0D0',
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        kanji:   ['"Noto Serif JP"', 'serif'],
      },
      letterSpacing: {
        label:       '0.3em',
        'wide-label': '0.5em',
      },
    },
  },
  plugins: [],
}
