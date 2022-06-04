import HeadPage from "../components/HeadPage";
import { GoogleIcon, NextFitIcon } from "../components/Icons";
import { ButtonGoogle, ContainerLogin, Content, Divider, Logo } from "../styles/login";

const Login = (): JSX.Element => {
    return(<>
    <HeadPage titlePage="NextFit - Login"/>
    <Content>
        <ContainerLogin>

            <Logo>
                <h1>NextFit</h1>
                <NextFitIcon/>
            </Logo>

            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Senha"/>

            <span>Ao clicar em entrar, ou ao continuar com as outras opções abaixo, você concorda com os Termos de serviço  e confirma que leu a  Política de privacidade <b>NextFit</b>.</span>
            <button>Entrar</button>
            <Divider>
                <hr/>
                ou
                <hr/>
            </Divider>
            <ButtonGoogle>
                <GoogleIcon/>
                Continuar com o Google
            </ButtonGoogle>
            <p>Novo no NextFit? <u>Crie uma conta!</u></p>
        </ContainerLogin>

        <footer>
            Copyright © 2022 NextFit - Todos os direitos reservados
        </footer>
    </Content>
    </>)
}

export default Login;