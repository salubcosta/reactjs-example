import React from 'react';
import * as S from './styles';

import Filter from '../../assets/images/filter.png';

function FilterCard({label, actived}){
    return(
        <S.Container actived={actived}>
            <img src={Filter} alt='Filtro' />
            <span>{label}</span>
        </S.Container>
    );
}

export default FilterCard;