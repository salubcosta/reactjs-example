import React from 'react';
import * as S from './styles';

import logo from '../../assets/images/logo.png';
import alert from '../../assets/images/alert.png'

function Header(){ /*eslint-disable */
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt='Logo' />
            </S.LeftSide>
            <S.RightSide>
                <a>INÍCIO</a> 
                <span className='divider' />
                <a>NOVA TAREFA</a>
                <span className='divider' />
                <a>SINCRONIZAR CELULAR</a>
                <span className='divider' />
                <a id='notification'>
                    <img src={alert} alt='Notificação' />
                    <span>5</span>
                </a>
            </S.RightSide>
        </S.Container>
    );
}

export default Header;