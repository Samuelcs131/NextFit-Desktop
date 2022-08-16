import { createTheme } from '@material-ui/core/styles' 

export const theme = createTheme({
  palette: {
      primary: { 
              main: '#545FFF',
              light: '#0035cb',
              dark: '#918dff'
          },
      text: {
        primary: '#fff',
        secondary: '#fff'
      },
      background: {
        paper: '#3E3A66',
        default: '#2F2B54'
      },
      action: {
        active: '#fff'
      }
    },
     
})