import styled from "styled-components"

/* CONTAINER */
export const Container = styled.section`
    background-color: ${({theme})=>theme.pallete.background.paper};
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    padding: 20px 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    width: 100%;

    h5 {
        text-align: center;
        margin-bottom: 15px;
    }
 
    // MD
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
        padding: 20px 30px;
        
        h5 {
            margin-bottom: 0px;
        }
    } 
`

/* GROUP TITLE AND INPUT */
export const GroupTitleAndInput = styled.div`

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        max-width: 500px;
        gap: 20px;
        margin: 0 auto;
        flex-wrap: wrap;
        margin-bottom: 16px;
    }

    // MD
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        
        & > div {
            flex-wrap: nowrap;
            margin-bottom: 0px;
            margin: 0px;
        }
    }
`

/* SELECT ACTIVITY */
export const SelectActivity = styled.div`
    width: 100%;
    max-width: 220px;
    position: relative;
    background: ${({theme})=>theme.pallete.background.default};
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};

    & > svg{
        position: absolute;
        left: 8px;
        top: 6px;
        z-index: 1;
        pointer-events: none;
    }

    // MD
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
        width: 220px
    }
`

/* SELECT DATE */
export const SelectDate = styled.div`
    position: relative;
    background-color:  ${({theme})=>theme.pallete.background.default};
    width: 100px;
    height: 30px;
    color: ${({theme})=>theme.pallete.text.primary};
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    
    svg{
        position: absolute;
        left: 8px;
        top: 7px;
        pointer-events: none;
    }
    
    // FORM DATA PICKER
    .form-control{
        padding: 5px;
        padding-left: 28px;
        font-size: 0.875rem;
        width: 100%;
        height: 100%;
        color: ${({theme})=>theme.pallete.text.primary};
    } 
`

export const LegendChart = styled.span`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    margin: 0 auto;
    gap: 10px;

    p {
        display: block;
        position: relative;
        font-size: 12px;
        display: flex;
        gap: 3px;
        align-items: center;
        user-select: none;
    
        span {
            display: block;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            background-color: white;
        }

        &:nth-child(1) span {
            background-color: ${({theme})=>theme.pallete.quaternary.main};
        }
        &:nth-child(2) span {
            background-color: ${({theme})=>theme.pallete.primary.main};
        }
        &:nth-child(3) span {
            background-color: ${({theme})=>theme.pallete.secondary.main};
        }
    }
`