import React, { Fragment } from 'react';
import { CentralContainer } from './styles';

export default function HomeScreen() {

    document.title = 'Página Inicial'

    return (
        <Fragment>
            <CentralContainer>
                <i className="fas fa-check-circle"></i>
                Parabéns, você está logado com o Google!
            </CentralContainer>
        </Fragment>
    );
}
