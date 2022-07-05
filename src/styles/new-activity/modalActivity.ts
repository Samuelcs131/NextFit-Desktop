import { rgba } from "polished"
import styled from "styled-components"

export const Container = styled.div`
    position: absolute;
    z-index: 99999;
    width: 100%;
    height: 100vh;
    background-color: ${({theme})=>rgba(theme.pallete.background.paper, 0.8)};
    display: grid;
    place-items: center;
    & > div{
        
    }
`