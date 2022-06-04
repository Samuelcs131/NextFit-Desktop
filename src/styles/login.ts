import { darken, rgba, shade } from "polished";
import styled from "styled-components";

export const Content = styled.div` 
    background: url('/img/background-login.jpg') no-repeat center;
    background-size: cover;
    width: 100%;
    height:  100vh;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &::before{
        z-index: 1;
        content: '';
        position: absolute;
        background-color: ${rgba('#31006F', 0.2)};
        height: 100vh;
        width: 100%;
    }

    footer{
        position: relative;
        z-index: 1;
        text-align: center;
        margin: 20px;
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
        border-radius: ${({theme})=>theme.shape.borderRadius};
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
        user-select: none;
        border-radius: ${({theme})=>theme.shape.borderRadius};
        cursor: pointer;
        font-weight: ${({theme})=>theme.typography.fontWeightMedium};
    }
    
    & button:nth-child(5){
        font-size: 1em;
        background-color: ${({theme})=>theme.pallete.primary.main};
        transition: .3s background-color;
        color: ${({theme})=>shade( 0.7, theme.pallete.primary.main)};
        
        &:hover{
            background-color: ${({theme})=>shade( 0.1, theme.pallete.primary.main)};
            transition: .3s background-color;
        }
        
        &:active{
            background-color: ${({theme})=>shade( 0.3, theme.pallete.primary.main)};
            transition: .3s background-color;
        }
    }

    p{
        margin-top: 12px;
        font-size: 1em;
    }

    // MD
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
        padding-top: 20vh;
    }
`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    gap: 12px;

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
