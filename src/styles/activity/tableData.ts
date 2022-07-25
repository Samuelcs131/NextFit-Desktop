import { makeStyles } from "@mui/material/styles";
import styled from "styled-components"

export const Container = styled.div`
    margin-top: 40px;
    height: 655px;
    color: red;

    .MuiDataGrid-columnHeaders.css-f3jnds-MuiDataGrid-columnHeaders{
        background-color: ${({theme})=>theme.pallete.grey.A100};
        color: ${({theme})=>theme.pallete.background.default};
        border-bottom: 1px solid ${({theme})=>theme.pallete.background.default};
        border-radius: none;
    }

    .MuiDataGrid-root.MuiDataGrid-root--densityStandard.css-r11z79-MuiDataGrid-root{
        border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
        border: none;
        background-color: ${({theme})=>theme.pallete.background.paper};
    }

    .css-r11z79-MuiDataGrid-root .MuiDataGrid-cell{
        border-bottom: 1px solid ${({theme})=>theme.pallete.background.default};
    }

    .MuiDataGrid-cellContent{
        color: ${({theme})=>theme.pallete.text.primary};
    }
    .css-1ps6pg7-MuiPaper-root{

    }
    // DROPDOWN TABLE
    .css-1ps6pg7-MuiPaper-root{
        background-color: red;
    }
`

export const PaginationTable = styled.div`
    width: 100%;
    display: flex;
    padding: 5px 0;
    align-items: center;
    justify-content: flex-end;
`