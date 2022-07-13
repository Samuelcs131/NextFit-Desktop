import HeadPage from "@components/HeadPage"
import { NextFitIcon } from "@components/Icons"
import LoadingPage from "@components/Loading"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "@services/api"
import { typeNotify } from "@services/notify"
import { DataContext } from "@store/GlobalState"
import { Button } from "@styles/buttons"
import { Container, Content, InputError, Logo } from "@styles/layoutPageInitial"
import { yupErrosPtBr } from "@utils/yupErrosPtBr"
import { NextPage } from "next"
import Link from "next/link"
import { useContext, useEffect } from "react"
import { useForm } from "react-hook-form"
import { ToastContainer } from "react-toastify"
import * as yup from 'yup'
import 'react-toastify/dist/ReactToastify.min.css'

const ForgotPassword: NextPage = () => {
    // GLOBAL STATE
    const { signIn, notify, setNotify } = useContext(DataContext)
 
    // VALIDATION FORM
    const validationForm = yup.object({
        email: yup.string().email().required()
    })
    
    // CUSTOM ERROR
    yup.setLocale(yupErrosPtBr)

    // FORM
    const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationForm)})

    // SUBMIT FORM
    async function onSubmit(data: any){
        await api.post('/users/forgot_password', {
            body: { "email": data.email },
            headers: { "Content-Type": "application/json" }
        }).then( () => {
            setNotify({type: 200, message: 'Enviado com sucesso!'})
        }).catch( ({ response: { data }})=>{
            setNotify({type: data.status, message: data.message})
        })
    }

    useEffect(()=>{
        // NOTIFY
        if(notify !== undefined){
          typeNotify(notify)
          setNotify(undefined)
        }
    })

return(<>
    {/* NOTIFY */}
    <ToastContainer/> 
    {/* HEAD */}
    <HeadPage titlePage="NextFit - Login" />
    <Content>
        <Container>
        <Link href={'/'}>
          <Logo>
            <h1>NextFit</h1>
            <NextFitIcon />
          </Logo>
        </Link>
        <span>
            Um email será enviado com um link para restaurar a senha.
        </span>
        <form id="form-forgot-password" onSubmit={handleSubmit(onSubmit)}>
            {/* EMAIL */}
            <input {...register('email')} type="email" placeholder="Email" />
            {errors?.email?.type &&(<InputError>{errors?.email?.message}</InputError>)}
        </form>
        <Button form="form-forgot-password" variant="contained">Redefinir senha</Button>
        
        <p><Link href="/login"><a>Voltar</a></Link></p>
        </Container>
        <footer>
          Copyright © 2022 NextFit - Todos os direitos reservados
        </footer>
    </Content>
</>)
}

export default ForgotPassword