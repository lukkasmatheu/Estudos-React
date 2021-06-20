import React, { useEffect, useState } from 'react';
import { Main, Footer } from './styles';
import MenuCards from '../../Components/MenuCards';

import tarefasConcluidas from '../../assets/concluir.svg';
import tarefas from '../../assets/newTask.svg';
import createTask from '../../assets/task.svg';
import editTask from '../../assets/lista-de-tarefas.svg';
import listTask from '../../assets/lista-de-controle.svg';
import BoxConteiner from '../../Components/Conteiner';

const Home: React.FC = () => {
    useEffect(() => {
        console.log('renderizando page');
    }, []);

    const [tasks] = useState<number>(0);
    return (
        <BoxConteiner header={'Gerenciador de Tarefas'}>
            <Main>
                <MenuCards
                    to={'/create'}
                    title={'Criar Nova Tarefa'}
                    image={createTask}
                    description={'Link para pagina de criação de novas taredas'}
                />
                <MenuCards
                    to={'/list'}
                    title={'Listar Tarefas'}
                    image={listTask}
                    description={'Link para pagina de listagem de tarefas'}
                />
                <MenuCards
                    to={'/edit'}
                    title={'Editar Tarefas'}
                    image={editTask}
                    description={
                        'Link para pagina de edição exclusão de tarefas'
                    }
                />
            </Main>
            <Footer>
                <section>
                    <span>
                        <img
                            src={tarefas}
                            alt="Alerta de quantidade de tarefas criadas"
                        />
                        {tasks} - <b> Tarefas </b>{' '}
                    </span>
                    <span>
                        <img
                            src={tarefasConcluidas}
                            alt="Alerta de quantidade de tarefas concluidas"
                        />
                        {tasks} - <b>Tarefas Prontas </b>{' '}
                    </span>
                </section>
            </Footer>
        </BoxConteiner>
    );
};

export default Home;
