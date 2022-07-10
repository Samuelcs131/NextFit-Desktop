import styled, { css } from "styled-components";
import { darken, rgba, shade } from 'polished'
import { iButton } from "../@types/styles";

export const Container = styled.section`
    grid-area: buttons; 
    position: relative;
    border: 1px solid ${({theme})=>theme.pallete.primary.main};
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    gap: 20px;
   
    flex-wrap: wrap;

    & > h6{
        position: absolute;
        top: -15px;
        left: 20px;
        padding: 0 10px;
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        color: ${({theme})=>theme.pallete.primary.main};
        background-color: ${({theme})=>theme.pallete.background.default};
    }

    & > div{
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`

export const Button = styled.button<iButton>`
    padding: 8px 22px;
    border-radius: ${({theme})=>theme.shape.borderRadiusPrimary};
    display: inline-block;
    transition: background-color .3s;
    cursor: pointer;
    place-items: center;
    user-select: none;
    font-size: 0.9375rem;
    min-width: 64px;
    font-weight: ${({theme})=>theme.typography.fontWeightMedium};
    font-family: ${({theme})=>theme.typography.body1.fontFamily};


    // SIZE
    ${({ size })=>{
        // SIZE
        if(size === 'medium'){
            return( css` 
                padding: 5px 15px;
                font-size: 0.875rem;
            `)
        }
        if (size === 'small'){
            return( css` 
                padding: 3px 9px; 
                font-size: 0.8125rem;
            `)
        }
    }}
    
    // VARIANT & COLOR
    ${({variant,color,theme})=>{

    // CHANGE PALLETE
    function selectColor() {
        switch(color){
            case 'secondary': 
            return theme.pallete.secondary.main
            
            case 'tertiary': 
            return theme.pallete.tertiary.main
            
            case 'quaternary': 
            return theme.pallete.quaternary.main
            
            case 'success': 
            return theme.pallete.success.main
            
            case 'error': 
            return theme.pallete.error.main
            
            case 'info': 
            return theme.pallete.info.main

            default: 
            return theme.pallete.primary.main
        }
    }

    // VARIANT
    if(variant === 'outlined'){
        return( css`
            border: 1px solid ${selectColor};
            color: ${selectColor};

            &:hover{
                background-color: ${rgba(selectColor(), 0.08)};
            }
            
            &:active{
                background-color: ${rgba(selectColor(), 0.18)};
            }
            
        `)
    }
    
    else if (variant === 'contained'){
        return( css`
            background-color: ${selectColor};
            color: ${darken(0.4, selectColor())};
            
            &:hover{
                background-color: ${shade(0.1, selectColor())};
            }
            
            &:active{
                background-color: ${shade(0.3, selectColor())};
            }
        `)
    }

    else {
        return( css`
            color: ${selectColor};

            &:hover{
                background-color: ${rgba(selectColor(),0.08)};
            }
            
            &:active{
                background-color: ${rgba(selectColor(),0.18)};
            }
        `)
    }

    }}
`