import styled from "styled-components"

export const Content = styled.main`
    position: relative;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    height: 100vh;
    display: flex;

    & > div {
        overflow-y: auto; 
        width: 100%;
        height: 100vh;

        & > div {
            display: grid;
            gap: 30px;
            padding-bottom: 50px;
            
            & > header {
                margin-top: 15px;
                display: flex;
                justify-content: space-between;
            }
        }
    }

`

export const TitleAndMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    & > span {
        display: flex;
        align-items: center;
        cursor: pointer;
    }

    // LG
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        span{
            display: none;
        }
    }
`