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
        }
    }

    header {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
    }
`

export const TitleAndMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    span {
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

export const Profile = styled.div`
    display: flex;

    & > span {
        display: none;
    }

    & > p {
        display: none;
        font-size: 0.625rem;
    }
`

export const Avatar = styled.div`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;

    span {
        width: 100%;
        height: 100%;
        z-index: -1;
    }
`

export const ContainerInfoUser = styled.div` 
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 10px;
    position: relative;
    z-index: -1;

    & > div::before {
        content: '';
        position: absolute;
        width: 80px;
        height: 80px;
        right: -10px;
        top: 0;
    }
    & > div:nth-child(1)::before {
        background: url('/img/abstract-orange.svg') no-repeat;
    }
    & > div:nth-child(2)::before {
        background: url('/img/abstract-blue.svg') no-repeat;
    }
    & > div:nth-child(3)::before {
        background: url('/img/abstract-red.svg') no-repeat;
    }
`

export const Info = styled.div`

    position: relative;
    overflow: hidden;
    height: 60px;
    width: 100%;
    background-color: ${({theme})=>theme.pallete.background.paper};
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    user-select: none;

    & > span{
        font-size: 0.875rem;
        font-weight: ${({theme})=>theme.typography.fontWeightMedium};
        padding-top: 8px;
        padding-left: 10px;
        display: block;
    }
    & > p{
        display: block;
        padding-bottom: 8px;
        padding-left: 10px;
        font-size: 1rem;
        font-weight: ${({theme})=>theme.typography.fontWeightMedium};
    }
`