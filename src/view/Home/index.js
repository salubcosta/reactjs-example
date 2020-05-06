import React, {useState, useEffect} from 'react';
import * as S from './styles';

//comunicação com backend feita em nodejs
import api from '../../services/api';

//Componentes local
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';

function Home() {

  const [filterActived, setFilterActived] = useState('today');
  const [tasks, setTasks] = useState([]);

  const loadTask = async () =>{
    await api.get(`/task/filter/${filterActived}/11:11:11:11:11:11`)
    .then(response=>{
      setTasks(response.data);
    })
  }

  useEffect(()=>{
    loadTask();
  }, [filterActived]);

  return (
    <S.Container>
      <Header />
        <S.FilterArea>
          <button type='button' onClick={()=> setFilterActived('all')}>
            <FilterCard label='Todos'  actived={filterActived==='all'}/>
          </button>
          <button type='button' onClick={()=> setFilterActived('today')}>
            <FilterCard label='Hoje'   actived={filterActived==='today'}/>
          </button>
          <button type='button' onClick={()=> setFilterActived('week')}>
            <FilterCard label='Semana' actived={filterActived==='week'}/>
          </button>
          <button type='button' onClick={()=> setFilterActived('month')}>
          <FilterCard label='Mês'    actived={filterActived==='month'}/>
          </button>
          <button type='button' onClick={()=> setFilterActived('year')}>
            <FilterCard label='Ano'    actived={filterActived==='year'}/>
          </button>
        </S.FilterArea>

        <S.Title>
          <h3>Tareafs</h3>
        </S.Title>

        <S.Content>
          {
            tasks.map(t=>(
              <TaskCard type={t.type} title={t.title} when={t.when} />
            ))
          }
        </S.Content>
      <Footer />
    </S.Container>

  );
}

export default Home;
