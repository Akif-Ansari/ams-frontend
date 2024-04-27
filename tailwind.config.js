module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
   
    },
    colors:{
      primary:'#00c9bd',
      secondary:'#e49129',
    },
    textColor:{
      primary:'#fff',
      secondary:'#828282',
      textPr:'#00c9bd',
      textSc:'#E49129',
    },
    borderColor:{
      primary:'#ccc',
      secondary:'#00c9bd',

    }
  },
  plugins: [
    require('tailwind-scrollbar')({ preferredStrategy: 'pseudoelements' }), 
  ],
}