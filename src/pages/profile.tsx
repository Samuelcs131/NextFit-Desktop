import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { NextPage } from "next";
import { useContext, useEffect, useState } from "react"
import * as yup from 'yup'
// COMPONENTS
import HeadPage from "@components/HeadPage"
import { MenuIcon } from "@components/Icons"
import Menu from "@components/Menu"
import LoadingPage from "@components/Loading"
// STYLES
import { ContainerMain } from "@styles/container"
import { Button } from "@styles/buttons"
import { Content, TitleAndMenu } from "@styles/layout"
import { ProfileForm } from "@styles/profile"
import { InputError } from "@styles/layoutPageInitial";
// GLOBAL STATE
import { DataContext } from "@store/GlobalState"
// TYPES
import { iUser } from "src/@types/globalState"
// UTILS
import { yupErrosPtBr } from "@utils/yupErrosPtBr"

const Profile: NextPage = () => {
    // LOADING
    const [loading, setLoading] = useState<boolean>(false);

    // DATE USER
    const userDateGlobal: iUser | null = useContext(DataContext).userDateGlobal

    // SHOW MENU
    const [showMenu, setShowMenu] = useState<boolean>(false);

    // VALIDATION FORM
    const validationForm = yup.object({
        name: yup.string().min(4).max(16).required().default('robertin'),
        lastName: yup.string().min(4).max(16).required(),
        email: yup.string().email().max(50).required(),
        height: yup.number().min(1).max(300).integer().required().default(0).typeError('somente númerico'),
        weight: yup.number().min(1).max(200).integer().required().default(0).typeError('somente númerico')
    }) 
    
    // CUSTOM ERROR
    yup.setLocale(yupErrosPtBr)

    // FORM
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationForm)});

    // SUBMIT FORM
    async function onSubmit(data: any){
        console.log(data)
        console.log(userDateGlobal)
    }

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
                        <h4>Perfil</h4>
                    </TitleAndMenu>
                </header>
                
                <ProfileForm  onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <span>
                            <label htmlFor="name">Nome</label>
                            <input type="text" defaultValue={userDateGlobal?.name} placeholder="Nome" id="name" {...register('name')}/>
                            {errors?.email?.type &&(<InputError>{errors?.name?.message}</InputError>)}
                        </span>
                        <span>
                            <label htmlFor="lastName">Sobrenome</label>
                            <input type="text" defaultValue={userDateGlobal?.lastName} placeholder="Sobrenome" id="lastName" {...register('lastName')}/>
                        </span>
                    </div>
                    <span>
                        <label htmlFor="email">Email</label>
                        <input type="text" defaultValue={userDateGlobal?.email} placeholder="Email" id="email" {...register('email')}/>
                    </span>
                    <div>
                        <span>
                            <label htmlFor="weight">Peso</label>
                            <input type="text" defaultValue={userDateGlobal?.weight} placeholder="Peso" id="weight" {...register('weight')}/>
                        </span>
                        <span>
                            <label htmlFor="height">Altura</label>
                            <input type="text" defaultValue={userDateGlobal?.height} placeholder="Altura" id="height" {...register('height')}/>
                        </span>
                    </div>
                    <Button variant="contained" color="info">Salvar</Button>
                </ProfileForm>

            </ContainerMain>
        </div>
    </Content>

    </>)
}

export default Profile