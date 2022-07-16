import { DefaultTheme } from "styled-components";
import styled from "styled-components"

export const ActivityForm = styled.form`
    display: grid;
    gap: 16px;
    width: 100%;

    & > {
        div{
            display: grid;
            gap: 16px; 
        }
        
        span{
            display: block;
        }
        
        button{
            margin-top: 20px;
            // width: 150px;
        }
    }

    label{
       font-size: 0.875rem;
       color: ${({theme})=>theme.pallete.grey.A100}; 
       font-weight: ${({theme})=>theme.typography.fontWeightRegular};
    }
    
    input {
        color: ${({theme})=>theme.pallete.text.primary};
        font-size: 1rem;
        font-weight: ${({theme})=>theme.typography.fontWeightRegular};
        display: block;
        width: 100%;
        height: 44px;
        background-color: ${({theme})=>theme.pallete.grey.A300};
        border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
        padding: 11px 13px;
    }
`

export const GroupButtons = styled.div`
    display: grid;
    gap: 16px;
`

// SELECT DATE
export const SelectDate = styled.span`
    & > div{
        input {
            border-radius: initial;
            padding: initial;
            height: initial;
        }
        color: ${({theme})=>theme.pallete.text.primary};
        font-size: 1rem;
        font-weight: ${({theme})=>theme.typography.fontWeightRegular};
        display: block;
        width: 100%;
        height: 44px;
        background-color: ${({theme})=>theme.pallete.grey.A300};
        border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
        padding: 11px 13px;

        // DATA PICKER
        .rdtPicker {
            background: ${({theme})=>theme.pallete.primary.main};
            box-shadow: 0 1px 3px rgba(0,0,0,.1);
            border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
            border: none;
            margin: auto;
            left: calc(50% - 130px);
            top: 52px;
        }
        .rdtPicker td.rdtActive,
        .rdtPicker td.rdtActive:hover {
            background-color: ${({theme})=>theme.pallete.common.white};
            color: ${({theme})=>theme.pallete.primary.main};
            text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
            border-radius: ${({theme})=>theme.shape.borderRadiusSecundary}; 
        }
        .rdtPicker td.rdtActive.rdtToday:before {
            border-bottom-color: ${({theme})=>theme.pallete.primary.main};
        } 
        td.rdtMonth:hover,
        td.rdtYear:hover {
            background: ${({theme})=>theme.pallete.primary.light};
            border-radius: ${({theme})=>theme.shape.borderRadiusPrimary};
        }
        .rdtPicker thead tr:first-of-type th:hover {
            background: none;
        }
        .rdtPicker td.rdtToday:before {
            border-bottom: 7px solid ${({theme})=>theme.pallete.primary.light};
        }
        .rdtPicker td.rdtDay:hover, .rdtPicker td.rdtHour:hover, .rdtPicker td.rdtMinute:hover, .rdtPicker td.rdtSecond:hover, .rdtPicker .rdtTimeToggle:hover {
            border-radius: ${({theme})=>theme.shape.borderRadiusPrimary};
            background: ${({theme})=>theme.pallete.primary.light};
            cursor: pointer;
        }

    }
`

// SELECT ACTIVITY
export const SelectActivity = styled.span`
    input {
        border-radius: initial;
        padding: initial;
        height: initial;
    }
`

export function styledSelect(themeContext: DefaultTheme) {
    return({
        menuPortal: (styles: any, state: any) => ({
            ...styles, 
        }), 
        menuList: (styles: any, state: any) => ({
            ...styles,
            color:  themeContext.pallete.text.primary,
            backgroundColor: themeContext.pallete.primary.main,
            borderRadius: themeContext.shape.borderRadiusPrimary,
            margin: '0px',
            padding: '0px', 
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
            minHeight: 40,
            height: 40,
            border: 'none',
            borderRadius: themeContext.shape.borderRadiusSecundary,
            background: themeContext.pallete.background.paper,
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
            height: 40
        }),
        singleValue: (styles: any) => ({
            ...styles,
            fontSize: '0.875rem',
            color: themeContext.pallete.text.primary,
        }),
        valueContainer: (styles: any) => ({
            ...styles,
            paddingLeft: '13px',
            color: themeContext.pallete.text.primary, 
        })
    })
}