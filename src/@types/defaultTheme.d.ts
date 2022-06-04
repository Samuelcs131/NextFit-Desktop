import "styled-components"

declare module 'styled-components' {
    export interface DefaultTheme{
        pallete: iPallete,
        shape: iShape,
        typography: iTypography,
        breakpoints: iBreakpoints,
        screen: iScreen
    }
}
 
// BREAKPOINTS
export interface iBreakpoints {
    keys: Array<string>,
    value: iValueBreakpoints
}

export interface iValueBreakpoints {
    xs: string, sm: string, md: string, lg: string, xl:string, xxl: string
}

// SCREEN
export interface iScreen {
    maxWidth: iValueBreakpoints
}

// PALLETE
export interface iPallete {
    common: iCommon,
    primary: iColors,
    secondary: iColors,
    error: iColors,
    warning: iColors,
    info: iColors,
    success: iColors,
    grey: iGrey,
    text: iText,
    divider: string,
    background: iBackground,
    action: iAction
}

export interface iCommon {
    white: string,
    black: string
}

export interface iGrey {
    g50: string, g100: string,
    g200: string, g300: string,
    g400: string, g500: string,
    g600: string, g700: string,
    g800: string, g900: string,
    A100: string, A200: string,
    A400: string, A700: string
}

export interface iText {
    primary: string,
    secondary: string,
    disabled: string,
    icon: string
}

export interface iColors {
    main: string, 
    light: string, 
    dark: string, 
    constrastText: string
}

export interface iAction {
    active: string,
    hover: string,
    hoverOpacity: string,
    selected: string,
    selectedOpacity: string,
    disabled: string,
    disabledBackground: string,
    disabledOpacity: string,
    focus: string,
    focusOpacity: string,
    activatedOpacity: string
}

export interface iBackground {
    default: string, paper: string
}

// SHAPE
export interface iShape {
    borderRadius: string
}

// TYPOGRAPHY
export interface iTypography {
    htmlFontSize: string,
    fontFamily: string,
    fontSize: string
    fontWeightLight: string,
    fontWeightRegular: string,
    fontWeightMedium: string,
    fontWeightBold: string,
    h1: iFontSettings,
    h2: iFontSettings,
    h3: iFontSettings,
    h4: iFontSettings,
    h5: iFontSettings,
    h6: iFontSettings,
    subtitle1: iFontSettings,
    subtitle2: iFontSettings,
    body1: iFontSettings,
    body2: iFontSettings,
}

export interface iFontSettings {
    fontFamily:  string,
    fontWeight: string,
    fontSize: string,
    lineHeight: string,
    letterSpacing: string
}