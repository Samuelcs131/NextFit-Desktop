import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { useContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { Controller, useForm } from 'react-hook-form'
import { GetServerSideProps, NextPage } from 'next' 
import NumberFormat from 'react-number-format'
import { ToastContainer } from 'react-toastify'
// COMPONENTS
import HeadPage from '@components/HeadPage'
import { ChevronIcon, GoogleIcon, NextFitIcon } from '@components/Icons'
// STYLES
import { ButtonGoogle, Container, Content, Divider, InputError, Logo } from '@styles/layoutPageInitial'
import { Button } from '@styles/buttons'
import 'react-toastify/dist/ReactToastify.min.css'
// UTILS
import { yupErrosPtBr } from '@utils/yupErrosPtBr'
import LoadingPage from '@components/Loading'
import { typeNotify } from '@services/notify'
import { DataContext } from '@store/GlobalState'
// TYPES
import { iInputFormRegister } from 'src/@types/pages'

const Register: NextPage = () => {
  // GLOBAL STATE
  const { notify, setNotify, registerUser } = useContext(DataContext)

  // LOADING PAGE
  const [loadingPage, setLoadingPage] = useState<boolean>(false)

  // VALIDATION FORM
  const validationForm = yup.object({
    name: yup.string().min(4).max(16).required(),
    lastName: yup.string().min(4).max(16).required(),
    email: yup.string().email().max(50).required(),
    sex: yup.string().required(),
    height: yup.number().min(1).max(300).integer().required().default(0).typeError('somente númerico'),
    weight: yup.number().min(1).max(200).integer().required().default(0).typeError('somente númerico'),
    password: yup.string().min(8).max(32).required().oneOf([yup.ref('passwordRepeat'), null], 'as senhas não coincidem'),
    passwordRepeat: yup.string().min(8).max(32).required().oneOf([yup.ref('password'), null], 'as senhas não coincidem')
  })

  // CUSTOM ERROR
  yup.setLocale(yupErrosPtBr)
  
  // FORM
  const { control, register ,handleSubmit, formState: { errors } } = useForm({resolver: yupResolver(validationForm)})

  // SUBMIT FORM
  function onSubmit(data: iInputFormRegister){
    const {email, height, lastName, name, password, sex, weight} = data
    const user = {email, height, lastName, name, password, sex, weight}
    registerUser(user,password,setLoadingPage)
  }

  useEffect(()=>{
    // NOTIFY
    if(notify !== undefined){
      typeNotify(notify)
      setNotify(undefined)
    }
  })
   
  return (
    <>
      {/* NOTIFY */}
      <ToastContainer/>
      {/* HEAD PAGE */}
      <HeadPage titlePage='Cadastro' />
      {/* LOADING */}
      {loadingPage === true && <LoadingPage/>}

      <Content>
        <Container>

          <Link href='/'>
          <Logo>
          <h1>NextFit</h1>
          <NextFitIcon />
          </Logo>
          </Link>

          <form id='form-register' onSubmit={handleSubmit(onSubmit)}>
            {/* NAME */}
            <input {...register('name')} type='text' placeholder='Nome'/>
            {errors?.name?.type &&(<InputError>{errors.name.message}</InputError>)}
            {/* LASTNAME */}
            <input {...register('lastName')} type='text' placeholder='Sobrenome'/>
            {errors?.lastName?.type &&(<InputError>{errors.lastName.message}</InputError>)}
            {/* EMAIL */}
            <input {...register('email')} type='email' placeholder='Email'/>
            {errors?.email?.type &&(<InputError>{errors.email.message}</InputError>)}
            {/* SEX */}
            <div><select {...register('sex')} defaultValue={''}>
                <option value='' disabled>Selecionar</option>
                <option value='m'>Masculino</option>
                <option value='f'>Feminino</option>
            </select><ChevronIcon/></div>
            {errors?.sex?.type &&(<InputError>{errors.sex.message}</InputError>)}
            {/* HEIGHT */}
            <Controller control={control} name='height' render={({field})=>{
              return <NumberFormat {...field} format="###" mask="_" placeholder='Altura (centimetros)' />
            }}
            />
            {errors?.height?.type &&(<InputError>{errors.height.message}</InputError>)}
            {/* WEIGHT */}
            <input {...register('weight')} type="number" placeholder='Peso (kilo)' />
            {errors?.weight?.type &&(<InputError>{errors.weight.message}</InputError>)}
            {/* PASSWORD */}
            <input {...register('password')} type='password' placeholder='Senha'/>
            {errors?.password?.type &&(<InputError>{errors.password.message}</InputError>)}
            {/* PASSWORD REPEAT */}
            <input {...register('passwordRepeat')} type='password' placeholder='Repita a senha'/>
            {errors?.passwordRepeat?.type &&(<InputError>{errors.passwordRepeat.message}</InputError>)}
          </form>

          <span>
            Ao clicar em assinar, ou ao continuar com as outras opções abaixo, você concorda com os Termos de serviço  e confirma que leu a  Política de privacidade <b>NextFit</b>
            .
          </span>
          <Button form='form-register' color='primary' variant='contained'>Cadastrar</Button>
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
            <Link href="/login">
              <a><u>Fezer login em vez disso</u></a>
            </Link>
          </p>
        </Container>

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

export default Register
