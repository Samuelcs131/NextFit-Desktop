import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Params } from 'next/dist/server/router'
import { NextPage } from 'next'
import Router from 'next/router'
import { useContext, useEffect, useState } from 'react'
import * as yup from 'yup'
import { hash } from 'bcrypt'
import { ToastContainer } from 'react-toastify'
// COMPONENTS
import HeadPage from '@components/HeadPage'
import { NextFitIcon } from '@components/Icons'
import LoadingPage from '@components/Loading'
// STYLES
import { Button } from '@styles/buttons'
import { Container, Content, InputError, Logo } from '@styles/layoutPageInitial'
import 'react-toastify/dist/ReactToastify.min.css'
// GLOBAL STATE
import { DataContext } from '@store/GlobalState'
// TYPES
import { iInputFormResetPassword, iPassword } from 'src/@types/pages'
// SERVICES
import { typeNotify } from '@services/notify'
import { api } from '@services/api'
// UTILS
import { yupErrosPtBr } from '@utils/yupErrosPtBr'

const Password: NextPage<iPassword> = ({dateNow, token, email, passwordResetExpires, passwordResetToken}) => {
  // GLOBAL STATE
  const { notify, setNotify } = useContext(DataContext)
  
  // LOADING
  const [loadingPage, setLoadingPage] = useState<boolean>(false)

  // VALIDATION FORM
  const validationForm = yup.object({
    password: yup.string().min(8).max(32).required().oneOf([yup.ref('passwordRepeat'), null], 'as senhas não coincidem'),
    passwordRepeat: yup.string().min(8).max(32).required().oneOf([yup.ref('password'), null], 'as senhas não coincidem')
  })
  
  // CUSTOM ERROR
  yup.setLocale(yupErrosPtBr)

  // FORM
  const { register, handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationForm)});

  // SUBMIT FORM
  async function onSubmit({ password }: iInputFormResetPassword){
    setLoadingPage(true)
    await api.post('/users/reset_password', {
      body: {
        "email": email,
        "resetToken": passwordResetToken,
        "password": password
      },
      headers: {
        'Content-Type': 'application/json',
        "Authorization": token
      }
    }
    ).then( () => {
      setLoadingPage(false)
      setNotify({type: 200, message: 'Senha alterada com sucesso!'})
      setTimeout(()=>Router.push('/login'), 5000)
    }).catch( ({response: {data}}) => {
      setLoadingPage(false)
      setNotify({type: data.status, message: data.message})
    })
  }

  useEffect((): any =>{
    // REDIRECT ROUTE MAIN
    if(token !== passwordResetToken){ Router.push('/') }
    if(dateNow > passwordResetExpires){ Router.push('/') }
    
    // NOTIFY
    if(notify !== undefined){
      typeNotify(notify)
      setNotify(undefined)
    }
  })

  return(<>
  {/* NOTIFY */}
  <ToastContainer/>
  {/* LOADING */}
  {loadingPage === true && <LoadingPage/>}
  {/* HEAD PAGE */}
  <HeadPage titlePage="Redefinir senha"/>
    <Content>
      <Container>

        <Logo>
          <h1>NextFit</h1>
          <NextFitIcon />
        </Logo> 
        <form id='form-forget-password' onSubmit={handleSubmit(onSubmit)}>
          <input {...register('password')} type="password" placeholder="Senha" />
          {errors?.password?.type &&(<InputError>{errors?.password?.message}</InputError>)}
          <input {...register('passwordRepeat')} type="password" placeholder="Repita a senha" />
          {errors?.passwordRepeat?.type &&(<InputError>{errors?.passwordRepeat?.message}</InputError>)}
        </form>

        <Button form='form-forget-password' color="primary" variant="contained">Atualizar senha</Button>
      </Container>
      
      <footer>
        Copyright © 2022 NextFit - Todos os direitos reservados
      </footer>
    </Content>
  </>)
 
}

// GET SERVER SIDE PROPS
export async function getServerSideProps({ params }: Params) {
    // PARAMS
    const { token, email } = params
    const tokenAuth: string = await hash(process.env.NEXTFIT_API_KEY as string, 4)

    const { data: {passwordResetExpires, passwordResetToken} } = await api.get(`/users/email/${email}`, {
      headers: {
        "Authorization": token,
        "AuthClientServer": tokenAuth
      }
    })

    // DATE NOW
    const dateBrazil: string = Intl.DateTimeFormat('pt-BR', { dateStyle: 'short' }).format().split('/').reverse().join('-')
    const hoursBrazil: string = Intl.DateTimeFormat('pt-BR', { timeStyle: 'medium' }).format()
    const dateNow = new Date(dateBrazil + ' ' + hoursBrazil + ' UTC').toISOString()

    return {
      props: {dateNow, token, email, passwordResetExpires, passwordResetToken},
    }
}

export default Password