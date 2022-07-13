import { useForm } from 'react-hook-form'
import { Params } from 'next/dist/server/router'
import { NextPage } from 'next'
import axios from 'axios'
import Router from 'next/router'
import { useContext, useEffect, useState } from 'react'
import * as yup from 'yup'
import { hash } from 'bcrypt'
// COMPONENTS
import HeadPage from '@components/HeadPage'
import { NextFitIcon } from '@components/Icons'
// STYLES
import { Button } from '@styles/buttons'
import { Container, Content, InputError, Logo } from '@styles/layoutPageInitial'
import 'react-toastify/dist/ReactToastify.min.css'
// TYPES
import { iPassword } from 'src/@types/components'
import { ToastContainer } from 'react-toastify'
import LoadingPage from '@components/Loading'
import { DataContext } from '@store/GlobalState'
import { typeNotify } from '@services/notify'
import { yupErrosPtBr } from '@utils/yupErrosPtBr'
import { yupResolver } from '@hookform/resolvers/yup'
import { api } from '@services/api'

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
  async function onSubmit({ password, passwordRepeat }: any){
    setLoadingPage(true)
    if(password !== passwordRepeat){
      return console.log('As senhas não coincidem')
    }

    if(password.length < 6 || password.length > 16){
      return console.log('A senha deve contar mais de 6 caracteres e no máximo 16!')
    }

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
      console.log('Senha alterada com sucesso!')
      return setTimeout(()=>Router.push('/'), 5000)
    }).catch( ({response: {data}}) => {
      setLoadingPage(false)
      setNotify({type: data.status, message: data.message})
      console.log(data)
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
  <HeadPage titlePage="NextFit - Nova senha" />
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