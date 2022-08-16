import styled from "styled-components"

export const Container = styled.div`
    margin-top: 40px;
    height: 710px;
    color: red;
`

export const PaginationTable = styled.div`
    width: 100%;
    display: flex;
    padding: 5px 0;
    align-items: center;
    justify-content: flex-end; 
`

export const ModalExclude = styled.div`
    height: 300px;
    background-color: ${({theme})=>theme.pallete.background.default};
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    padding: 20px;
    gap: 20px;
    text-align: center;

    & > span {
        display: grid;
        gap: 10px;
        width: 100%;
        margin: 0 auto;
    }
`