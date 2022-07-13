import { darken, rgba, shade } from "polished";
import styled from "styled-components";

// CONTENT
export const Content = styled.div` 
    background: url('/img/background-login.jpg') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: auto;
    
    &::before{
        overflow-y: auto;
        z-index: 1;
        content: '';
        position: fixed;
        background-color: ${rgba('#31006F', 0.45)};
        height: 100%;
        width: 100%;
        pointer-events: none;
    }

    & > footer{
        position: relative;
        z-index: 1;
        text-align: center;
        margin: 20px;
        margin-top: 60px;
    }
 
`

// CONTAINER
export const Container = styled.div`
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
    padding-top: 5vh;
 
    & > span{
        text-align: center;
        display: block;
        padding-top: 10px;
        font-size: 0.75em;
        line-height: 20px;
    }
    
    & > form{
        div{
            position: relative;
            
            select{
                height: 44px;
                width: 300px;
                cursor: pointer;
                background-color: ${({theme})=>theme.pallete.common.white};
                margin-top: 6px;
                border-radius: ${({theme})=>theme.shape.borderRadiusPrimary};
                padding: 11px 13px;
                color: ${({theme})=>theme.pallete.common.black};
                font-weight: ${({theme})=>theme.typography.fontWeightRegular};
                font-size: 0.875em;
                -webkit-appearance: none;
                
            }
            svg{
                pointer-events: none;
                position: absolute;
                top: 16px;
                right: 10px;
            }
        }
        input{
            background-color: ${({theme})=>theme.pallete.common.white};
            height: 44px;
            width: 300px;
            margin-top: 6px;
            border-radius: ${({theme})=>theme.shape.borderRadiusPrimary};
            padding: 11px 13px;
            font-size: 0.875em;
            font-weight: ${({theme})=>theme.typography.fontWeightRegular};
            color: ${({theme})=>theme.pallete.common.black};
            
            &::placeholder{
                color: ${({theme})=>theme.pallete.grey.A200};
                font-weight: ${({theme})=>theme.typography.fontWeightRegular};
                font-size: 0.875em;
            }
        }
    }
    
    & > button{
        margin-top: 16px;
        height: 44px;
        width: 300px;
    }
    
    & > p{
        text-align: center;
        margin-top: 12px;
        font-size: 1rem;
    }
    
    // MD
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) { 
        padding-top: 10vh;
    }
    `

// LOGO
export const Logo = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    gap: 12px;
    cursor: pointer;

   
    & > svg path {
        fill: ${({theme})=>theme.pallete.common.white};
    }
    
    & > h1{
        font-family: 'Prosto One', cursive;
    }
   


`

// DIVIDER
export const Divider = styled.div`
    width: 100%;
    margin-top: 10px;
    position: relative;
    display: flex;
    align-items:center;
    gap: 10px;
    
    & > hr{
        background-color: ${({theme})=>theme.pallete.common.white};
        height: 1px;
        width: 100%;
    }
    `

// BUTTON GOOGLE
export const ButtonGoogle = styled.button`
    background-color: ${({theme})=>theme.pallete.common.white};
    border-radius: ${({theme})=>theme.shape.borderRadiusPrimary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    gap: 5px;
    cursor: pointer;
`

// INPUT ERROR
export const InputError = styled.span`
    color: ${({theme})=>theme.pallete.error.main};
    font-size: 0.875rem;
    font-weight: ${({theme})=>theme.typography.fontWeightMedium};
`
