/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        joincolor:'#00000099',
        signincolor:'#0e52cf',
        signinhover:'#70B5F94C',
        lightblue:'#2977c9',
        gsignin:'#cfcfcf40',
        searchbarcolor:'#eef3f8'
      },
      width:
      {
        gsignwidth:'450px',
      },
      screens:{
        phone : {'max': '1023px'},
        small: {'max' : '786px'},
        head : {'max' : '986px'}
      },
      maxWidth:{
        mw:'408px',
      }
    },
  },
  plugins: [],
}