import React, { Suspense, lazy } from 'react';
import BoxConteiner from '../../Components/Conteiner';
const Task = lazy(() => import('../../Components/Task'));
import Loading from '../../Components/Loading';
const ListTask: React.FC = () => {
    return (
        <BoxConteiner header={'Listar Tarefas'}>
            <Suspense fallback={<Loading />}>
                <Task />
            </Suspense>
        </BoxConteiner>
    );
};

export default ListTask;
