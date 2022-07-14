import { rgba } from "polished"
import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    z-index: 99999;
    width: 100%;
    height: 100vh;
    background-color: ${({theme})=>rgba(theme.pallete.background.paper, 0.8)};

    & > div{
        position: relative;
        margin-top: 180px;
        padding-top: 105px;
        width: 100%;
        height: 480px;
        background-color: ${({theme})=>theme.pallete.background.default};

        span{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
        }
    }
`

export const CircleTime = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    
    svg{
        position: absolute;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        fill: transparent;
        stroke: black;
        transform: rotate(270deg);
        stroke-width: 4px;

        circle:nth-child(2){
            stroke: green;
            stroke-dasharray: 210;
        }
    }
    
    p{
        position: relative;
    }
`

// IMAGE CONTAINER
export const  ImageContainer = styled.div`
    position: absolute;
    top: -150px;
    left: 0px;
    right: 0px;
    margin-left: auto;
    margin-right: auto;
    width: 295px;
    height: 235px;
    border-radius: 90px;
    background-color: ${({theme})=>theme.pallete.common.white};
    overflow: hidden; 
    display: grid;
    place-items: center;

    img { 
        user-select: none;
        -webkit-user-drag: none;
    }
`