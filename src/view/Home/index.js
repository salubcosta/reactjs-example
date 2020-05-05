import React, {useState} from 'react';
import * as S from './styles';

//Componentes local
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';

function Home() {

  const [filterActived, setFilterActived] = useState('today');

  return (
    <S.Container>
      <Header />
        <S.FilterArea>
          <button type='button' onClick={()=> setFilterActived('all')}>
            <FilterCard label='Todos'  actived={filterActived=='all'}/>
          </button>
          <button type='button' onClick={()=> setFilterActived('today')}>
            <FilterCard label='Hoje'   actived={filterActived=='today'}/>
          </button>
          <button type='button' onClick={()=> setFilterActived('week')}>
            <FilterCard label='Semana' actived={filterActived=='week'}/>
          </button>
          <button type='button' onClick={()=> setFilterActived('month')}>
          <FilterCard label='Mês'    actived={filterActived=='month'}/>
          </button>
          <button type='button' onClick={()=> setFilterActived('year')}>
            <FilterCard label='Ano'    actived={filterActived=='year'}/>
          </button>
        </S.FilterArea>
      <Footer />
    </S.Container>

  );
}

export default Home;
