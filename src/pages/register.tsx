import Link from 'next/link'
import { Button } from '@styles/buttons'
import HeadPage from '@components/HeadPage'
import { GoogleIcon, NextFitIcon } from '@components/Icons'
import {
  ButtonGoogle, ContainerLogin, Content, Divider, Logo
} from '@styles/login'
import { NextPage } from 'next'
import { useForm } from 'react-hook-form'

const Register: NextPage = () => {

  const { register, handleSubmit } = useForm();

  function handleSignIn(data: any){
    console.log(data)
  }

  return (
    <>
      <HeadPage titlePage="NextFit - Login" />
      <Content>
        <ContainerLogin>

          <Link href="/">
          <Logo>
          <h1>NextFit</h1>
          <NextFitIcon />
          </Logo>
          </Link>

          <form id='form-register' onSubmit={handleSubmit(handleSignIn)}>
            <input {...register('name')} type="text" placeholder="Nome" />
            <input {...register('lastName')} type="text" placeholder="Sobrenome" />
            <input {...register('email')} type="email" placeholder="Email" />
            <input {...register('height')} type="text" placeholder="Altura" />
            <input {...register('password')} type="password" placeholder="Senha" />
          </form>

          <span>
            Ao clicar em assinar, ou ao continuar com as outras opções abaixo, você concorda com os Termos de serviço  e confirma que leu a  Política de privacidade
            <b>NextFit</b>
            .
          </span>
          <Button form='form-register' color="primary" variant="contained">Entrar</Button>
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
        </ContainerLogin>

        <footer>
          Copyright © 2022 NextFit - Todos os direitos reservados
        </footer>
      </Content>
    </>
  )
}

export default Register
