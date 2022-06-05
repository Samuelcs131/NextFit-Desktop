import styled from "styled-components";
import { iPallete } from "../@types/styles";

export const Container = styled.section`
    grid-area: colors;
    padding: 30px;
    position: relative;
    border: 1px solid ${({theme})=>theme.pallete.primary.main};
    & > h6{
        position: absolute;
        top: -15px;
        left: 20px;
        padding: 0 10px;
        font-size: ${({theme})=>theme.typography.body1.fontSize};
        color: ${({theme})=>theme.pallete.primary.main};
        background-color: ${({theme})=>theme.pallete.background.default};
    }
`

export const Pallete = styled.div<iPallete>`
    display: grid;
    grid: 70px 45px min-content/repeat(4, minmax(50px, 1fr));
    
    span{
        margin-top: 0.2em;
        margin-bottom: 1em;
    }
    div{
        padding: 5px;
        grid-column: span 2;
        color: ${({pallete})=> pallete.constrastText}; 
        
        &:nth-child(1){
            grid-column: span 4;
            background-color: ${({pallete})=>pallete.main};
        }
        &:nth-child(2){
            background-color: ${({pallete})=>pallete.dark};
        }
        &:nth-child(3){
            background-color: ${({pallete})=>pallete.light};
        }
    }
`