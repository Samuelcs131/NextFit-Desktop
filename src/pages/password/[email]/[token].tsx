import { NextPage } from 'next'
import HeadPage from '@components/HeadPage'
import { NextFitIcon } from '@components/Icons'
import { Button } from '@styles/buttons'
import { ContainerLogin, Content, Logo } from '@styles/login'
import { Params } from 'next/dist/server/router'
import { useForm } from 'react-hook-form'
import { iPassword } from 'src/@types/components'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { hash } from 'bcrypt'

const Password: NextPage<iPassword> = ({dateNow, token, email, passwordResetExpires, passwordResetToken}) => {

  const { register, handleSubmit } = useForm();
  const route = useRouter()

  useEffect((): any =>{
    if(token !== passwordResetToken){
      route.push('/')
    }
    // REDIRECT ROUTE MAIN
    if(dateNow > passwordResetExpires){
      route.push('/')
    } 
  })

  async function handleForgetPassword({ password, passwordRepeat }: any){
  
    if(password !== passwordRepeat){
      return console.log('As senhas não coincidem')
    }

    if(password.length < 6 || password.length > 16){
      return console.log('A senha deve contar mais de 6 caracteres e no máximo 16!')
    }

    console.log(passwordResetToken)

    await axios.post('http://localhost:8080/users/reset_password',
     {
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
    ).then(
      () => {
        console.log('Senha alterada com sucesso!')
        return setTimeout(()=>route.push('/'), 5000)
      }
    )


  }

  return(<>
  <HeadPage titlePage="NextFit - Nova senha" />
    <Content>
      <ContainerLogin>

        <Logo>
          <h1>NextFit</h1>
          <NextFitIcon />
        </Logo> 
        <form id='form-forget-password' onSubmit={handleSubmit(handleForgetPassword)}>
          <input {...register('password')} type="password" placeholder="Senha" />
          <input {...register('passwordRepeat')} type="password" placeholder="Repita a senha" />
        </form>

        <Button form='form-forget-password' color="primary" variant="contained">Atualizar senha</Button>
      </ContainerLogin>
      
      <footer>
        Copyright © 2022 NextFit - Todos os direitos reservados
      </footer>
    </Content>
  </>)
 
}

// GET SERVER SIDE PROPS
export async function getServerSideProps({ params }: Params) {
  try {
    // PARAMS
    const { token, email } = params
    const tokenAuth: string = await hash(process.env.NEXTFIT_API_KEY as string, 4)

    const { data: {passwordResetExpires, passwordResetToken} } = await axios.get(`http://localhost:8080/users/${email}`, {
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
  } catch(error){
    console.log(error)
  }
}

export default Password