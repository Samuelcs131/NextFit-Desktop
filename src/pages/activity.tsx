import HeadPage from "@components/HeadPage";
import { MenuIcon } from "@components/Icons";
import LoadingPage from "@components/Loading";
import Menu from "@components/Menu";
import { DataContext } from "@store/GlobalState";
import { ContainerMain } from "@styles/container";
import { Content, TitleAndMenu } from "@styles/layout";
import { NextPage } from "next";
import { useContext, useEffect, useState } from "react";
import { iUser } from "src/@types/globalState";

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
    },[userDateGlobal])

    return(<>
        {/* LOADING */}
        {loading === true && <LoadingPage/>}

        {/* HEAD PAGE */}
        <HeadPage titlePage="Perfil"/>
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
                </ContainerMain>
            </div>
        </Content>
    </>)
}

export default Activity