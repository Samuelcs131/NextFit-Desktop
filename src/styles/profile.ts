import styled from "styled-components"

export const ProfileForm = styled.form`
    display: grid;
    gap: 16px;
    width: 100%;

    & > {
       div{
           display: grid;
           gap: 16px; 
        }
        
        span{
            display: block;
        }
        
        button{
            margin-top: 20px;
            // width: 150px;
        }
    }

    label{
       font-size: 0.875rem;
       color: ${({theme})=>theme.pallete.grey.A100}; 
       font-weight: ${({theme})=>theme.typography.fontWeightRegular};
    }

    input{
        color: ${({theme})=>theme.pallete.text.primary};
        font-size: 1rem;
        font-weight: ${({theme})=>theme.typography.fontWeightRegular};
        display: block;
        // width: 240px;
        width: 100%;
        height: 44px;
        background-color: ${({theme})=>theme.pallete.grey.A300};
        border-radius: ${({theme})=>theme.shape.borderRadiusSecundary};
        padding: 11px 13px;
    }
 
    // MD - 768px
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.md}) {
        display: grid;
        gap: 16px;
        width: 500px;

        & > {
            div{
                display: flex;
                gap: 20px;
                justify-content: space-between;
            }
            span{
                display: block;
            }
            button{
                margin-top: 20px;
                width: 180px;
            }
        }
        input{
            width: 240px;
        }
        #email{
            width: 100%;
        }
    }
`