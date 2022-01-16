import React, { Fragment } from 'react';
import { CentralContainer } from './styles';

// @ts-ignore
export default function HomeScreen(props) {

    document.title = 'Página Inicial'

    console.log(props.user);
    

    return (
        <Fragment>
            <CentralContainer>
                <i className="fas fa-check-circle"></i>
                Parabéns, {props.user.name}, você está logado com o Google!
            </CentralContainer>
        </Fragment>
    );
}
