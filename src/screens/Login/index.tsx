import React, { Fragment } from 'react';
import { Button, GoogleButton, LoginBox } from './styles';
import routes from '../../routes';
import api from '../../services/api';

// @ts-ignore
export default function LoginScreen(props) {

    document.title = 'Login'

    const actionLoginGoogle = async () => {
        let result = await api.googleLogar();

        if(result) {
            props.onReceiveGoogle(result.user);
        } else {
            alert('Erro ao logar')
        }
    }

    return (
        <Fragment>
            <LoginBox>
                    <img src="https://i.ibb.co/Qf42zMb/icon-png-17.png" alt="" />
                    <h1>Bem-vindo!</h1>
                    <span>Faça login</span>

                    <div className='inputs'>
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id='email'  placeholder='example@gmail.com' />
                        <label htmlFor="senha">Senha</label>
                        <input type="text" id='senha'  placeholder='Digite sua senha' />
                    </div>

                    <a href="" className='recoverPassword'>Esqueceu a senha?</a>

                    <Button>Login</Button>

                    <GoogleButton onClick={actionLoginGoogle}>
                        Entrar com 
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png" />
                    </GoogleButton>
                    <p className='signupText'>Não tem uma conta? <a href=''>Cadastre-se</a></p>
            </LoginBox>
        </Fragment>
    );
}
