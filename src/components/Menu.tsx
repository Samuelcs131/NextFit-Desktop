import { CloseMenu, ContainerMenu, ItemList, ListMenu, LogoMenu, Signout } from "@styles/menu"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { ActivityIcon, DashboardIcon, NextFitIcon, ProfileIcon, SettingsIcon, SignoutIcon } from "./Icons"

interface iMenu {
    setPropsShowMenu: any 
    showMenu: boolean
}

const Menu = ({ setPropsShowMenu, showMenu }: iMenu): JSX.Element => {
    const { pathname } = useRouter()

    function activeMenuList(item: string){
        if(pathname === item){
            return true
        } else {
            return false
        }
    }

    return(
    <ContainerMenu show={showMenu}>
        <nav>
            <div>
                <Link href={'/dashboard'}>
                    <LogoMenu>
                        <span>NextFit</span>
                        <NextFitIcon/>
                    </LogoMenu>
                </Link>
                <ListMenu>
                    <ul>
                        <ItemList active={activeMenuList('/dashboard')}>
                            <a>
                                <DashboardIcon/>
                                <span>Dashboard</span>
                            </a>
                        </ItemList>
                        <ItemList active={activeMenuList('/activity')}>
                            <a>
                                <ActivityIcon/>
                                <span>Atividades</span>
                            </a>
                        </ItemList>
                        <ItemList active={activeMenuList('/profile')}>
                            <a>
                                <ProfileIcon/>
                                <span>Perfil</span>
                            </a>
                        </ItemList>
                        <ItemList active={activeMenuList('/settings')}>
                            <a>
                                <SettingsIcon/>
                                <span>Definições</span>
                            </a>
                        </ItemList> 
                    </ul>
                </ListMenu>
            </div>

            <Signout>
                <a>
                    <SignoutIcon/>
                    <span>Sair</span>
                </a>
            </Signout>
        </nav>
        <CloseMenu onClick={()=>setPropsShowMenu(!showMenu)}/>
    </ContainerMenu>)
}

export default Menu

