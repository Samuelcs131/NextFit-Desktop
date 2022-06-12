import styled from "styled-components"

export const Container = styled.section`
    background-color: ${({theme})=>theme.pallete.background.paper};
    border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
    padding: 20px 8px;
    text-align: center;

    h5 {
        margin-bottom: 15px;
    }
`