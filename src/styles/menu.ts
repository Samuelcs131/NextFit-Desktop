import { rgba } from "polished";
import styled, { css } from "styled-components";

interface iContainerMenu{
    show: boolean
}

export const ContainerMenu = styled.div<iContainerMenu>`
    position: absolute;
    visibility: hidden; 
    transition: visibility .3s ease;
    width: 100%;
    
    & > div {
        opacity: 0%;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: ${({theme})=>rgba(theme.pallete.common.black, 0.3)};
        transition: opacity .3s ease;
        z-index: 999;
    }

    & > nav {
        transition: transform .3s ease;
        transform: translateX(-100%);
        background-color: ${({theme})=>theme.pallete.background.paper};
        height: 100vh;
        width: 190px;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: space-between;
        z-index: 1000;
        position: relative;
    }
    
    // MENU ACTIVE
    ${({show})=>{
        return show === true && (css`
            visibility: visible; 
            transition: visibility .3s ease; 
            
            & > nav {
                transition: transform .3s ease;
                transform: translateX(0%);
            }
            
            & > div {
                transition: opacity .3s ease;
                opacity: 100%;
            }
        `)
    }}
`

export const CloseMenu = styled.div`
`

export const Icon = styled.a`
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding-top: 20px;
    margin-bottom: 25px;
    gap: 10px;
    cursor: pointer;

    & > span{
        font-family: 'Prosto One', cursive;
        font-size: 1.5rem;
    }

    & > svg{
        height: 30px;
        width: 30px;
        path{
            fill: ${({theme})=>theme.pallete.text.icon}
        }
    }
`

export const ListMenu = styled.nav`
    & > ul{
        width: 100%;
        display: grid;
        gap: 20px; 
    }
`
interface iListMenuActive {
    active: boolean
}

export const ItemList = styled.li<iListMenuActive>`
    list-style: none;

    a{
        width: 100%;
        height: 36px;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.875rem;
        font-weight: ${({theme})=>theme.typography.fontWeightMedium};
        padding: 0 12px;
        cursor: pointer;
    }
    
    // ITEM MENU ACTIVE
    ${ ({active}) => {
        return active === true && (css`
            width: 150px;
            background-color: ${({theme})=>theme.pallete.text.primary};
            border-radius: ${({theme})=>theme.shape.borderRadiusPrimary};
            a{
                color: ${({theme})=>theme.pallete.background.default};
            }

            svg{
                path{
                    fill: ${({theme})=>theme.pallete.background.default}
                }
            }
        `)
    }}
`

export const Signout = styled.nav`
    width: 150px;
    margin: 0 auto;
    margin-bottom: 10px;

    a{
        cursor: pointer;
        width: 100%;
        height: 36px;
        display: flex;
        align-items: center;
        gap: 12px;
        font-size: 0.875rem;
        font-weight: ${({theme})=>theme.typography.fontWeightMedium};
        padding: 0 12px;
    }
`