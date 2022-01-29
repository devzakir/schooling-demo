module.exports = {
  mode: 'jit',
  purge: {  
    enabled: true,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    // colors: {
    //   'blue': '#2465e2'
    // },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
