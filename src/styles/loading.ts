import { rgba } from "polished"
import styled from "styled-components"

export const ContainerLoading = styled.div`
    z-index: 9999;
    position: fixed;
    height: 100vh;
    width: 100%;
    background-color: ${({theme})=>rgba(theme.pallete.common.black, 0.5)};
    display: grid;
    place-items: center;
    user-select: none;

    & > div{
        display: grid;
        place-items: center;

        span {
            position: absolute;
            width: 150px;
            height: 150px;
            border-radius: 50%;
            animation: ring 2s linear infinite;

            &::before{
                position: absolute;
                content: '';
                left: 0;
                top: 0;
                height: 100%;
                width: 100%;
                border-radius: 50%;
                box-shadow: 0 0 5px rgba(255,255,255,.3);
            }
        } 
        svg{  
            path{
                fill:  ${({theme})=>theme.pallete.common.white};
                animation: fadeImage 3s ease-in-out infinite;
            }
        }
    }

    

   

    @keyframes fadeImage {
        50%{
            fill: ${({theme})=>rgba(theme.pallete.common.white, 0.3)};
        }
    }

    @keyframes ring {
        0%{
            transform: rotate(0deg);
            box-shadow: 1px 5px 2px ${({theme})=>theme.pallete.primary.main};
        }
        50%{
            transform: rotate(180deg);
            box-shadow: 1px 5px 2px ${({theme})=>theme.pallete.secondary.main};
        }
        100%{
            transform: rotate(360deg);
            box-shadow: 1px 5px 2px ${({theme})=>theme.pallete.tertiary.main};
        }
    }
`