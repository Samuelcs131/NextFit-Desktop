import { DefaultTheme } from "styled-components"

export const themeDark: DefaultTheme = {
    // PALLETE
    pallete: {
        common: {
            black: '#000', white: '#ffffff'
        },
        primary: {
            main: '#545FFF', light: '#918dff', dark: '#0035cb', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        secondary: {
            main: '#ce93d8', light: '#f3e5f5', dark: '#ab47bc', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        error: {
            main: '#f44336', light: '#e57373', dark: '#d32f2f', 
            constrastText: '#fff'
        },
        warning: {
            main: '#ffa726', light: '#ffb74d', dark: '#f57c00', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        info: {
            main: '#29b6f6', light: '#4fc3f7', dark: '#0288d1', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        success: {
            main: '#66bb6a', light: '#81c784', dark: '#388e3c', constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        grey: {
            g50: '#fafafa', g100: '#f5f5f5', g200: '#eeeeee', g300: '#e0e0e0', g400: '#bdbdbd', g500: '#9e9e9e', g600: '#757575', g700: '#616161', g800: '#616161',
            g900: '#212121', A100: '#f5f5f5', A200: '#eeeeee', A400: '#bdbdbd', A700: '#616161'
        },
        text: {
            primary: '#fff', secondary: 'rgba(255, 255, 255, 0.7)', disabled: 'rgba(255, 255, 255, 0.5)', icon: 'rgba(255, 255, 255, 0.5)'
        }, 
        divider: 'rgba(255, 255, 255, 0.12)',
        background: {
            paper: '#121212', default: '#121212'
        },
        action: {
            active: '#fff', 
            hover: 'rgba(255, 255, 255, 0.08)', 
            hoverOpacity: '0.4', 
            selected: 'rgba(255, 255, 255, 0.16)',
            selectedOpacity:' 0.16', 
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabledOpacity: '0.38',
            focus: 'rgba(255, 255, 255, 0.12)',
            focusOpacity: '0.12',
            activatedOpacity: '0.24'
        }
    },
    // SHAPE
    shape: {
        borderRadius: '4px'
    },
    // TYPOGRAPHY
    typography: {
        htmlFontSize: '16px',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '14px',
        fontWeightLight: '300',
        fontWeightRegular: '400',
        fontWeightMedium: '500',
        fontWeightBold: '700',
        h1: { 
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '300',
            fontSize: "2.5rem",
            lineHeight: '1.167',
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '300',
            fontSize: "2rem",
            lineHeight: '1.2',
            letterSpacing: "-0.00833em"
        },
        h3: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1.75rem",
            lineHeight: '1.167',
            letterSpacing: "0em"
        },
        h4: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1.5rem",
            lineHeight: '1.235',
            letterSpacing: "0.00735em"
        },
        h5: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1.25rem",
            lineHeight: '1.334',
            letterSpacing: "0em"
        },
        h6: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '500',
            fontSize: "1rem",
            lineHeight: '1.6',
            letterSpacing: "0.0075em"
        },
        subtitle1: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1rem",
            lineHeight: '1.75',
            letterSpacing: "0.00938em"
        },
        subtitle2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "0.875rem",
            lineHeight: '1.57',
            letterSpacing: "0.00714em"
        },
        body1: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1rem",
            lineHeight: '1.50',
            letterSpacing: "0.00938em"
        },
        body2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "0.875rem",
            lineHeight: '1.43',
            letterSpacing: "0.01071em"
        }
    },
    // BREAKPOINTS
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        value: {
            xs: '0px', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1400px'
        }
        
    },
    // SCREEN
    screen: {
        maxWidth: {
            xs: '100%', sm: '540px', md: '720px', lg: '960px', xl: '1140px', xxl: '1320px'
        }
    }
}

export const themeLight: DefaultTheme = {
    // PALLETE
    pallete: {
        common: {
            black: '#000', white: '#fff'
        },
        primary: {
            main: '#90caf9', light: '#e3f2fd', dark: '#42a5f5', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        secondary: {
            main: '#ce93d8', light: '#f3e5f5', dark: '#ab47bc', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        error: {
            main: '#f44336', light: '#e57373', dark: '#d32f2f', 
            constrastText: '#fff'
        },
        warning: {
            main: '#ffa726', light: '#ffb74d', dark: '#f57c00', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        info: {
            main: '#29b6f6', light: '#4fc3f7', dark: '#0288d1', 
            constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        success: {
            main: '#66bb6a', light: '#81c784', dark: '#388e3c', constrastText: 'rgba(0, 0, 0, 0.87)'
        },
        grey: {
            g50: '#fafafa', g100: '#f5f5f5', g200: '#eeeeee', g300: '#e0e0e0', g400: '#bdbdbd', g500: '#9e9e9e', g600: '#757575', g700: '#616161', g800: '#616161',
            g900: '#212121', A100: '#f5f5f5', A200: '#eeeeee', A400: '#bdbdbd', A700: '#616161'
        },
        text: {
            primary: 'rgba(0, 0, 0, 0.87)', secondary: 'rgba(0, 0, 0, 0.6)', disabled: 'rgba(0, 0, 0, 0.38)', icon: 'rgba(255, 255, 255, 0.5)'
        }, 
        divider: 'rgba(0, 0, 0, 0.12)',
        background: {
            paper: '#121212', default: '#fff'
        },
        action: {
            active: '#fff', 
            hover: 'rgba(255, 255, 255, 0.08)', 
            hoverOpacity: '0.4', 
            selected: 'rgba(255, 255, 255, 0.16)',
            selectedOpacity:' 0.16', 
            disabled: 'rgba(255, 255, 255, 0.3)',
            disabledBackground: 'rgba(255, 255, 255, 0.12)',
            disabledOpacity: '0.38',
            focus: 'rgba(255, 255, 255, 0.12)',
            focusOpacity: '0.12',
            activatedOpacity: '0.24'
        }
    },
    // SHAPE
    shape: {
        borderRadius: '4px'
    },
    // TYPOGRAPHY
    typography: {
        htmlFontSize: '16px',
        fontFamily: "'Poppins', sans-serif",
        fontSize: '14px',
        fontWeightLight: '300',
        fontWeightRegular: '400',
        fontWeightMedium: '500',
        fontWeightBold: '700',
        h1: { 
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '300',
            fontSize: "2.5rem",
            lineHeight: '1.167',
            letterSpacing: "-0.01562em"
        },
        h2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '300',
            fontSize: "2rem",
            lineHeight: '1.2',
            letterSpacing: "-0.00833em"
        },
        h3: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1.75rem",
            lineHeight: '1.167',
            letterSpacing: "0em"
        },
        h4: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1.5rem",
            lineHeight: '1.235',
            letterSpacing: "0.00735em"
        },
        h5: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1.25rem",
            lineHeight: '1.334',
            letterSpacing: "0em"
        },
        h6: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '500',
            fontSize: "1rem",
            lineHeight: '1.6',
            letterSpacing: "0.0075em"
        },
        subtitle1: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1rem",
            lineHeight: '1.75',
            letterSpacing: "0.00938em"
        },
        subtitle2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "0.875rem",
            lineHeight: '1.57',
            letterSpacing: "0.00714em"
        },
        body1: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "1rem",
            lineHeight: '1.50',
            letterSpacing: "0.00938em"
        },
        body2: {
            fontFamily: "'Poppins', sans-serif",
            fontWeight: '400',
            fontSize: "0.875rem",
            lineHeight: '1.43',
            letterSpacing: "0.01071em"
        }
    },
    // BREAKPOINTS
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
        value: {
            xs: '0px', sm: '576px', md: '768px', lg: '992px', xl: '1200px', xxl: '1400px'
        }
        
    },
    // SCREEN
    screen: {
        maxWidth: {
            xs: '100%', sm: '540px', md: '720px', lg: '960px', xl: '1140px', xxl: '1320px'
        }
    }
}