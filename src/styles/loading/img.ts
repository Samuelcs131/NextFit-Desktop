import { rgba } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
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
                fill:  ${({theme})=>theme.pallete.background.default};
                animation: fadeImage 3s ease-in-out infinite;
            }
        }
    }

    @keyframes fadeImage {
    50%{
        fill: ${({theme})=>rgba(theme.pallete.common.white, 0.8)};
    }
    }
    @keyframes ring {
        0%{
            transform: rotate(0deg);
            box-shadow: 1px 1px 0px ${({theme})=>theme.pallete.primary.main};
        }
        50%{
            transform: rotate(180deg);
            box-shadow: 1px 1px 0px ${({theme})=>theme.pallete.secondary.main};
        }
        100%{
            transform: rotate(360deg);
            box-shadow: 1px 1px 0px ${({theme})=>theme.pallete.tertiary.main};
        }
    }
`