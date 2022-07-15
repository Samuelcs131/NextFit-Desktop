import { rgba } from "polished"
import styled, { css } from "styled-components"

export const Container = styled.div`
    position: absolute;
    z-index: 99999;
    width: 100%;
    height: 100vh;
    background-color: ${({theme})=>rgba(theme.pallete.background.paper, 0.8)};

    & > div{
        position: relative;
        margin: 0 auto;
        margin-top: 180px;
        padding-top: 105px;
        width: 100%;
        max-width: 440px;
        height: 480px;
        background-color: ${({theme})=>theme.pallete.background.default};
        display: flex;
        flex-direction: column;
        
        span{
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            
            & > div {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 10px;
            }
        }
    }
    
// MD - 768px
@media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
    & > div{
        max-width: 440px;
        border-radius: 90px;
    }
}
`

export const GroupButtons = styled.div`
    margin: 80px auto;
    display: flex;
    flex-direction: column;
    gap: 40px;

    button{
        width: 250px;
    }
`

interface iCircleTime {
    size: string 
    color: string
}

export const CircleTime = styled.div<iCircleTime>`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${({size})=>size};
    height: ${({size})=>size};

    ${({color, theme})=>{
        // CHANGE PALLETE
        function selectColor() {
            switch(color){
                case 'secondary': 
                return theme.pallete.secondary.main
                
                case 'tertiary': 
                return theme.pallete.tertiary.main
                
                case 'quaternary': 
                return theme.pallete.quaternary.main

                default:
                return theme.pallete.secondary.main
            }
        }

    return css`
        svg{
            position: absolute;
            left: 0;
            right: 0;
            margin-left: auto;
            margin-right: auto;

            path:nth-child(1){
                stroke: ${rgba(selectColor(),0.2)};
            }
            path:nth-child(2){
                stroke: ${selectColor()};
            }
        }
    `}}
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