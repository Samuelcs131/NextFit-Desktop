import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { ToastContainer } from 'react-toastify'
import * as yup from 'yup'
// STYLES
import { Button } from '@styles/buttons'
import { ButtonGoogle, ContainerLogin, Content, Divider, InputError, Logo } from '@styles/login'
import 'react-toastify/dist/ReactToastify.min.css';
import { yupResolver } from '@hookform/resolvers/yup'
// COMPONENTS
import HeadPage from '@components/HeadPage'
import LoadingPage from '@components/Loading'
import { GoogleIcon, NextFitIcon } from '@components/Icons'
// STORE
import { DataContext } from '@store/GlobalState'
// SERVICES
import { typeNotify } from '@services/notify'

const Login: NextPage = () => {
    
  // GLOBAL STATE
  const { signIn, notify, setNotify } = useContext(DataContext)
  const [loadingPage, setLoadingPage] = useState<boolean>(false);
  
  // VALIDATION FORM
  const validationForm = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required()
  })
  
  // FORM
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationForm)});
  
  
  // SUBMIT FORM
  async function onSubmit(data: any){
      await signIn(data.email, data.password, setLoadingPage)
  }

  // CUSTOM ERROS
  const errosInput = {
    email: {
        required: "Email é um campo obrigatório",
        email: "O email informado é invalido"
    },
    password: {
        min: "a senha deve ter pelo menos 6 caracteres",
        password: "Senha é um campo obrigatório"
    }
  }
  
  useEffect(()=>{
    // NOTIFY
    if(notify !== undefined){
      typeNotify(notify)
      setNotify(undefined)
    }
  }) 
/*   console.log(errors?.password?.type) */
  return (<>
      {/* NOTIFY */}
      <ToastContainer/>
      {/* LOADING */}
      {loadingPage === true && <LoadingPage/>}
      {/* HEAD */}
      <HeadPage titlePage="NextFit - Login" />

      {/* CONTENT */}
      <Content>
        <ContainerLogin>
          <Logo>
            <h1>NextFit</h1>
            <NextFitIcon />
          </Logo>

          <form id="form-login" onSubmit={handleSubmit(onSubmit)}>
            {/* EMAIL */}
            <input {...register('email')} type="email" placeholder="Email" />
            {/* @ts-expect-error */}
            {errors?.email?.type &&(<InputError>{errosInput['email'][errors.email.type]}</InputError>)}
            
            {/* PASSWORD */}
            <input {...register('password')} type="password" placeholder="Senha" />
            {/* @ts-expect-error */}
            {errors?.password?.type &&(<InputError>{errosInput['password'][errors.password.type]}</InputError>)}
          </form>


          <span>
            Ao clicar em entrar, ou ao continuar com as outras opções abaixo, você concorda com os Termos de serviço  e confirma que leu a  Política de privacidade <b>NextFit</b>
            .
          </span>
          <Button form="form-login" color="primary" variant="contained">Entrar</Button>
          <Divider>
            <hr />
            ou
            <hr />
          </Divider>
          <ButtonGoogle>
            <GoogleIcon />
            Continuar com o Google
          </ButtonGoogle>
          <p>
            Novo no NextFit? <Link href="/register"><a><u>Crie uma conta!</u></a></Link>
          </p>
        </ContainerLogin>

        <footer>
          Copyright © 2022 NextFit - Todos os direitos reservados
        </footer>
      </Content>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // REDIRECT IF AUTH
  const { ['nextfit-token']: token } = parseCookies(context)
  if(token){
      return {
          redirect: {
              destination: '/dashboard',
              permanent: false
          }
      }
  }

  return{
      props: {}
  }
}

export default Login
