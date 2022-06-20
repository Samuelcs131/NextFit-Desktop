import { DefaultTheme } from "styled-components";

export function themeSelect(themeContext: DefaultTheme) {
    return({
        menuPortal: (styles: any, state: any) => ({
            ...styles,
            zIndex: 9999,
        }), 
        menuList: (styles: any, state: any) => ({
            ...styles,
            color:  themeContext.pallete.text.primary,
            backgroundColor: themeContext.pallete.primary.main,
            borderRadius: themeContext.shape.borderRadiusPrimary,
            margin: '0px',
            padding: '0px',
            overflow: 'hidden', 
        }), 
        option: (styles: any, state: any) => ({
            ...styles,
            cursor: 'pointer',
            color: state.isSelected ? themeContext.pallete.primary.main : themeContext.pallete.common.white, 
            backgroundColor: state.isSelected && themeContext.pallete.common.white, 
            '&:active': {
                background: themeContext.pallete.primary.light
            },
            '&:hover': {
                background: themeContext.pallete.primary.light,
            },
        }),
        control: (styles: any) => ({
            ...styles,
            minHeight: 30,
            height: 30,
            border: 'none',
            borderRadius: themeContext.shape.borderRadiusSecundary,
            background: themeContext.pallete.background.default,
            borderColor: 'none',
            boxShadow: 'none', 
        }),
        input: (styles: any) => ({
            ...styles, 
        color: themeContext.pallete.text.primary, 
        fontSize: '0.875rem',
        padding: 0
        }),
        container: (styles: any) => ({
            ...styles,
            width: '100%'
        }),
        placeholder: (styles: any) => ({
            ...styles, 
            fontSize: '0.875rem',
            color: themeContext.pallete.text.primary,
        }),
        indicatorsContainer: (styles: any) => ({
            ...styles,
            height: 30
        }),
        singleValue: (styles: any) => ({
            ...styles,
            fontSize: '0.875rem',
            color: themeContext.pallete.text.primary,
        }),
        valueContainer: (styles: any) => ({
            ...styles,
            paddingLeft: '30px',
            color: themeContext.pallete.text.primary, 
        })
    })
}