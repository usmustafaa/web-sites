/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./content/**/*.{html,js}"],
  theme: {
  
    fontFamily: {
      'sans': "Plus Jakarta Sans"
      
    },
    container: {
      center: true,
      sm: '1140px',
      lg: '1140px',
      xl: '1140px',
      '2xl': '1140px',
    },
    extend: {
      spacing: {
        '82': '325px',
        '128': '32rem',
        '105': '500px',
        '135': '605px',
        '140': '635px',
        '170': '715px',
        '175': '750px',
        '185': '850px',
        '200': '1000px',
        '250': '1500px',
        '200-': '-1000px',

      },
      colors: {
        'custom':'rgb(50, 51, 52)',
        'custom2':'rgb(234, 233, 231)',
        'custom3':'rgb(235, 234, 232)',
        'custom4':'rgb(236, 235, 233)',
        'opacityColor':' rgba(0, 0, 0, 0.456)',
        'custom4':' rgba(189, 189, 183, 0.5)',

      },
    },
  },
  plugins: [],
}

