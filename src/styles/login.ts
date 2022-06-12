import { darken, rgba, shade } from "polished";
import styled from "styled-components";

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
        background-color: ${rgba('#31006F', 0.2)};
        height: 100%;
        width: 100%;
        pointer-events: none;
    }

    footer{
        position: relative;
        z-index: 1;
        text-align: center;
        margin: 20px;
        margin-top: 60px;
    }
 
`

export const ContainerLogin = styled.div`
    position: relative;
    z-index: 1;
    max-width: 300px;
    margin: 0 auto;
    padding-top: 15vh;
    text-align: center;

    span{
        display: block;
        padding-top: 10px;
        font-size: 0.7em;
        line-height: 20px;
    }

    input{
        background-color: ${({theme})=>theme.pallete.common.white};
        height: 44px;
        width: 300px;
        margin-bottom: 6px;
        border-radius: ${({theme})=>theme.shape.borderRadiusPrimary};
        padding: 11px 13px;
        
        &::placeholder{
            color: ${({theme})=>theme.pallete.grey.g600};
            font-weight: ${({theme})=>theme.typography.fontWeightRegular};
            font-size: 1em;
        }
    }

    button{
        margin-top: 16px;
        height: 44px;
        width: 300px;
    }
     
    p{
        margin-top: 12px;
        font-size: 1rem;
    }

    // MD
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) { 
        padding-top: 20vh;
    }
`

export const Logo = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    gap: 12px;
    cursor: pointer;

    svg path {
        fill: ${({theme})=>theme.pallete.common.white};
    }

    h1{
        font-family: 'Prosto One', cursive;
    }
`

export const Divider = styled.div`
    width: 100%;
    margin-top: 10px;
    position: relative;
    display: flex;
    align-items:center;
    gap: 10px;
    
    & hr{
        background-color: ${({theme})=>theme.pallete.common.white};
        height: 1px;
        width: 100%;
    }
    `

export const ButtonGoogle = styled.button`
    background-color: ${({theme})=>theme.pallete.common.white};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    gap: 5px;
`
