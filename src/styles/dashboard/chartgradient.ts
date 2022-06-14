import styled from "styled-components";

export const Container = styled.section`
    background-color: ${({theme})=>theme.pallete.background.paper};
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    padding: 20px 8px;
   

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

export const GroupTitleAndInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    // MD
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
        flex-direction: row;
        justify-content: space-between;
    }
`

export const SelectDate = styled.div`
    position: relative;
    background-color:  ${({theme})=>theme.pallete.background.default};
    width: 100%;
    max-width: 220px;
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