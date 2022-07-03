import styled, { css } from "styled-components";

import { rgba } from "polished";
import { iContainerMenu, iListMenuActive } from "src/@types/styles";

/* CONTAINER MENU */
export const ContainerMenu = styled.div<iContainerMenu>`
    position: absolute;
    visibility: hidden; 
    transition: visibility .3s ease;
    width: 100%;
    
    & > div {
        opacity: 0%;
        visibility: hidden;
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
        transition: transform .3s;
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
                visibility: visible;
            }
            
            & > div {
                transition: opacity .3s ease;
                opacity: 100%;
                visibility: visible;
            }
        `)
    }}


    // LG
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        visibility: visible; 
        transition: visibility .3s ease; 
        position: relative;
        // max-width: 190px;
        max-width: 80px;
        
        & > nav {
            transition: transform .3s ease;
            transform: translateX(0%);
            visibility: visible;
            width: 100%;

        }
        & > div {
            display: none;
        }
    }
    // XXL
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xxl}) {
        visibility: visible; 
        transition: visibility .3s ease; 
        max-width: 190px;
    }
`

/* LOGO MENU */
export const LogoMenu = styled.a`
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

    // LG
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        justify-content: center;
        & > span {
            display: none;
        } 
    }
    // XXL
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xxl}) {
        & > span {
            display: initial;
        }
    }
`

/* LIST MENU */
export const ListMenu = styled.nav`
    & > ul{
        width: 100%;
        display: grid;
        gap: 20px; 
    }
`

/* ITEM MENU */
export const ItemList = styled.li<iListMenuActive>`
    list-style: none;
    position: relative;

    a{
        text-decoration: none;
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

            svg path{
                fill: ${({theme})=>theme.pallete.background.default};
            }
            
            .activity-icon path{
                fill: ${({theme})=>theme.pallete.text.primary};
                stroke: ${({theme})=>theme.pallete.background.default};
            }
            
            // LG - 992px
            @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
                svg path{
                    fill: ${({theme})=>theme.pallete.text.icon};
                }
                .activity-icon path{
                    fill: ${({theme})=>theme.pallete.background.default};
                    stroke: ${({theme})=>theme.pallete.text.icon};
                }
                &::before{
                    content: '';
                    position: absolute;
                    height: 36px;
                    width: 3px;
                    right: -19px;
                    top: 0;
                    border-radius: 5px;
                    background-color: ${({theme})=>theme.pallete.text.primary};
                }
            }
            // XXL - 1320px
            @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xxl}) {
                svg path{
                    fill: ${({theme})=>theme.pallete.background.default};
                }
                .activity-icon path{
                    fill: ${({theme})=>theme.pallete.text.primary};
                    stroke: ${({theme})=>theme.pallete.background.default};
                }
            }
    `)}}

    // LG
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        width: 100%;
        background-color: initial;

        a {
            span {
                display: none;
            }
        } 
    }

    // XXL
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xxl}) {
        ${ ({active}) => {
        return active === true && (css`
            width: 150px;
            background-color: ${({theme})=>theme.pallete.text.primary};
            
            &::before{ 
                display: none; 
            }
        `)}}
        a {
            span {
                display: initial;
            }
        }
    }
`

/* SINGOUT */
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

    // LG
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.lg}) {
        width: 100%;
        display: flex;
        justify-content: center;

        a{
            display: block;
            width: initial;
            span {
                display: none;
            }
        }
    }
    // XXL
    @media screen and (min-width: ${({theme})=>theme.breakpoints.value.xxl}) {
        width: 150px;
        margin-bottom: 10px;
        a{
            display: flex;
            width: 100%;
            span {
                display: initial;
            }
        }
    }
`


/*  */
export const CloseMenu = styled.div`
`