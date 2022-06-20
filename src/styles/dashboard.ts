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

    // MENU DOWNLOAD DASHBOARD 
    .apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg, .apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg, .apexcharts-theme-light .apexcharts-zoomin-icon:hover svg, .apexcharts-theme-light .apexcharts-zoomout-icon:hover svg, .apexcharts-theme-light .apexcharts-reset-icon:hover svg, .apexcharts-theme-light .apexcharts-menu-icon:hover svg {
    path{
        fill: none;
        stroke: ${({theme})=>theme.pallete.primary.main};
    }
    }
    .apexcharts-menu-icon {
        width: 36px;
        height: 36px;
        
        svg {
            width: 36px;
            height: 36px;
            fill: none;
        }
    }
    .apexcharts-menu.apexcharts-menu-open{
        background-color: ${({theme})=>theme.pallete.primary.main};
        padding: 0;
        overflow: hidden;
        border: none;
        
        .apexcharts-menu-item:hover{
            background-color: ${({theme})=>theme.pallete.primary.light};
        }
    }

    // DATA PICKER 
    .rdtPicker {
        background: ${({theme})=>theme.pallete.primary.main};
        box-shadow: 0 1px 3px rgba(0,0,0,.1);
        border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
        border: none;
        margin: auto;
        left: calc(50% - 130px);
        top: 40px; 
    }
    .rdtPicker td.rdtActive,
    .rdtPicker td.rdtActive:hover {
        background-color: ${({theme})=>theme.pallete.common.white};
        color: ${({theme})=>theme.pallete.primary.main};
        text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
        border-radius: ${({theme})=>theme.shape.borderRadiusSecundary}; 
    }
    .rdtPicker td.rdtActive.rdtToday:before {
        border-bottom-color: ${({theme})=>theme.pallete.primary.main};
    } 
    td.rdtMonth:hover,
    td.rdtYear:hover {
        background: ${({theme})=>theme.pallete.primary.light};
        border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    }
    .rdtPicker thead tr:first-of-type th:hover {
        background: none;
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
`

export const NameAndEmail = styled.div`
    
    & > span {
        display: none;
    }

    & > p {
        display: none;
        font-size: 0.625rem;
    }
    // LG
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        margin: auto 10px;

         & > span {
            display: block;
            font-size: 0.875rem;
            line-height: 15px;
        }
        & > p {
            display: block;
            font-size: 0.625rem;
        }
    }
`

export const Avatar = styled.div`
    height: 45px;
    width: 45px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    background-color: ${({theme})=>theme.pallete.background.paper};

    span {
        img { user-select: none; }
        width: 100%;
        height: 100%;
        z-index: 1;
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