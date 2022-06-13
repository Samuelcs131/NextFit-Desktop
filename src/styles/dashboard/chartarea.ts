import styled from "styled-components"
 
export const Container = styled.section`
    background-color: ${({theme})=>theme.pallete.background.paper};
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    padding: 20px 8px;
   

    h5 {
        text-align: center;
        margin-bottom: 15px;
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

export const GroupInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 500px;
    gap: 20px;
    margin: 0 auto;
    flex-wrap: wrap;
`

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