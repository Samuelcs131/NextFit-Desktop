import Link from 'next/link'
import { Button } from '@styles/buttons'
import HeadPage from '@components/HeadPage'
import { GoogleIcon, NextFitIcon } from '@components/Icons'
import {
  ButtonGoogle, ContainerLogin, Content, Divider, Logo
} from '@styles/login'
import { NextPage } from 'next'

const Register: NextPage = () => {
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

          <input type="text" placeholder="Nome" />
          <input type="text" placeholder="Sobrenome" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Altura" />
          <input type="password" placeholder="Senha" />

          <span>
            Ao clicar em assinar, ou ao continuar com as outras opções abaixo, você concorda com os Termos de serviço  e confirma que leu a  Política de privacidade
            <b>NextFit</b>
            .
          </span>
          <Button color="primary" variant="contained">Entrar</Button>
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
