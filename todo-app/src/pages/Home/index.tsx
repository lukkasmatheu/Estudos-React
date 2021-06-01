import React, {useEffect} from 'react';
import {Container} from './styles';
import Link from 'react-router-dom';

const Home: React.FC = () => {
    useEffect(() => {
        console.log('renderizando page');
    }, []);

    return (
        <Container>
            <header>
                <h2>TODO-LIST</h2>
            </header>
            <main>
                {/* <Link>
                    <div>Criar Nova Tarefa</div>
                </Link> */}
                {/* <Link>
                    <div>Listar Tarefas/div>
                </Link> */}
                {/* <Link>
                    <div>Editar Tarefas</div>
                </Link> */}
                <div>Criar Nova Tarefa</div>
                <div>Listar Tarefas</div>
                <div>Editar Tarefas</div>
            </main>
        </Container>
    );
};

export default Home;
