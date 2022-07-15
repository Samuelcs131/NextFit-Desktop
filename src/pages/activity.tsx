import { NextPage } from "next";
import { useContext, useEffect, useState } from "react"
// COMPONENTS
import HeadPage from "@components/HeadPage"
import { MenuIcon } from "@components/Icons"
import LoadingPage from "@components/Loading"
import Menu from "@components/Menu"
// STYLES
import { ContainerMain } from "@styles/container"
import { Content, TitleAndMenu } from "@styles/layout"
// TYPES
import { iUser } from "src/@types/globalState"
// GLOBAL STATE
import { DataContext } from "@store/GlobalState"
import Link from "next/link";
import { parseCookies } from "nookies";
import Router from "next/router";

const Activity: NextPage = () => {
    // LOADING
    const [loading, setLoading] = useState<boolean>(false);

    // DATE USER
    const userDateGlobal: iUser | null = useContext(DataContext).userDateGlobal

    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false);

    useEffect(()=>{ 
        // LOADING
        setLoading(true)
        if(userDateGlobal){ setLoading(false) }

        // VERIFY COOKIE AUTH
        const { ['nextfit-token']: token } = parseCookies()
        if(!token){ Router.push('/login') }
    },[userDateGlobal])
 
    return(<>
        {/* LOADING */}
        {loading === true && <LoadingPage/>}

        {/* HEAD PAGE */}
        <HeadPage titlePage="Atividade"/>
        <Content>
            <Menu showMenu={showMenu} setPropsShowMenu={setShowMenu}/>
            <div>
                <ContainerMain>
                    <header>
                        <TitleAndMenu>
                            <span onClick={()=>setShowMenu(!showMenu)}>
                                <MenuIcon/>
                            </span> 
                            <h4>Atividade</h4>
                        </TitleAndMenu>
                    </header>
                    <div>
                        <Link href="/activity/newActivity"><a>Nova atividade</a></Link>
                    </div>
                </ContainerMain>
            </div>
        </Content>
    </>)
}

export default Activity