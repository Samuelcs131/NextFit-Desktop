import styled from "styled-components"

export const ContainerMain = styled.div`
    
    & > div{
        margin: 0 auto;
        padding: 0 10px;
        width: 100%;

        // SM
        @media screen and (min-width: ${({theme})=>theme.breakpoints.value.sm}) {
            max-width: ${({theme})=>theme.screen.maxWidth.sm};
        }

        // MD
        @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
            max-width: ${({theme})=>theme.screen.maxWidth.md};
        }
        
        // LG
        @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
            max-width: ${({theme})=>theme.screen.maxWidth.lg};
        }
        
        // XL
        @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xl}) {
            max-width: ${({theme})=>theme.screen.maxWidth.xl};
        }
        
        // XXL
        @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xxl}) {
            max-width: ${({theme})=>theme.screen.maxWidth.xxl};
        }
    }
`