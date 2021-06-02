import React, {useEffect, useState} from 'react';
import {Container} from './styles';
import tarefasConcluidas from '../../assets/concluir.svg';
import tarefas from '../../assets/newTask.svg';
import createTask from '../../assets/task.svg';
import editTask from '../../assets/lista-de-tarefas.svg';
import listTask from '../../assets/lista-de-controle.svg';
import MenuCards from '../../Components/MenuCards';

const Home: React.FC = () => {
    useEffect(() => {
        console.log('renderizando page');
    }, []);

    const [tasks] = useState<number>(0);
    return (
        <Container>
            <header>Lista de Tarefas</header>
            <main>
                <MenuCards
                    to={'/'}
                    title={'Criar Nova Tarefa'}
                    image={createTask}
                    description={'Link para pagina de criação de novas taredas'}
                />
                <MenuCards
                    to={'/'}
                    title={'Listar Tarefas'}
                    image={listTask}
                    description={'Link para pagina de listagem de tarefas'}
                />
                <MenuCards
                    to={'/'}
                    title={'Editar Tarefas'}
                    image={editTask}
                    description={
                        'Link para pagina de edição exclusão de tarefas'
                    }
                />
            </main>
            <footer>
                <section>
                    <span>
                        <img src={tarefas} alt="" />
                        {tasks} - <b> Tarefas </b>{' '}
                    </span>
                    <span>
                        <img src={tarefasConcluidas} alt="" />
                        {tasks} - <b>Tarefas Prontas </b>{' '}
                    </span>
                </section>
            </footer>
        </Container>
    );
};

export default Home;
