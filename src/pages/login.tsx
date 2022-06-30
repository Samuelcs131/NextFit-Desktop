import { GetServerSideProps, NextPage } from 'next'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import { parseCookies } from 'nookies'
// STYLES
import { Button } from '@styles/buttons'
import { ButtonGoogle, ContainerLogin, Content, Divider, Logo } from '@styles/login'
// COMPONENTS
import HeadPage from '@components/HeadPage'
import LoadingPage from '@components/Loading'
import { GoogleIcon, NextFitIcon } from '@components/Icons'
// STORE
import { DataContext } from '@store/GlobalState'

const Login: NextPage = () => {
  // FORM
  const { register, handleSubmit } = useForm();
  const { signIn } = useContext(DataContext)
  const [loadingPage, setLoadingPage] = useState<boolean>(false);

  interface iData {
    email: string | undefined
    password: string | undefined
  }

  async function handleSignIn(data: any){
    const verify = [data.email, data.password]

    if(verify.includes('') || verify.includes(undefined) ){
      console.log('Preencha todos os campos')
      return
    }

    if(data.email === undefined || data.password === undefined){
        console.log('Preencha todos os campos')
      }
      console.log(data.email)
      console.log(data.password)
      
    await signIn(data.email, data.password, setLoadingPage)
  }

  return (
    <>
      <HeadPage titlePage="NextFit - Login" />
      <Content>
          {loadingPage === true && <LoadingPage/>}
        <ContainerLogin>

          <Logo>
            <h1>NextFit</h1>
            <NextFitIcon />
          </Logo>

          <form id="form-login" onSubmit={handleSubmit(handleSignIn)}>
            <input {...register('email')} type="email" placeholder="Email" />
            <input {...register('password')} type="password" placeholder="Senha" />
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
