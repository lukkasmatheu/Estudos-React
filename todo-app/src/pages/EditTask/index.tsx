import React, { Suspense, lazy } from 'react';
import BoxConteiner from '../../Components/Conteiner'
import Task from '../../Components/Task';
const EditTask: React.FC = () => {
    return (
        <BoxConteiner header={'Listar Tarefas'}>
            <Task buttonsActive={true} />
        </BoxConteiner>
    );
};

export default EditTask;
