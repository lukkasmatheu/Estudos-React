import React, {useEffect, useState} from 'react';
import {getTasks} from '../../services/api';
import BoxConteiner from '../../Components/Conteiner';
import Task from '../../Components/Task';
import {TaskProperties} from '../../models/TaskModel';
import Loading from '../../Components/Loading';
const ListTask: React.FC = () => {
    const [tasks, setTasks] = useState<TaskProperties[]>();
    const [load, setLoad] = useState<boolean>(true);
    useEffect(() => {
        //simular longo tempo de resposta da request (loading é mostrado)
        const timer = setTimeout(() => {
            getTasks()
                .then((res) => {
                    return res.data;
                })
                .then((res) => {
                    setTasks(res);
                })
                .catch((err) => console.error(err))
                .finally(() => {
                    setLoad(false);
                });
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <BoxConteiner header={'Listar Tarefas'}>
            {load ? <Loading /> : <Task tasks={tasks} />}
        </BoxConteiner>
    );
};

export default ListTask;
