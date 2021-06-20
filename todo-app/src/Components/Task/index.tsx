import React, { Suspense, lazy, useEffect, useState } from 'react';
import { getTasks, patchTask } from '../../services/api';

import { TaskProperties } from '../../models/TaskModel';
import Button from '../Button'
import { useHistory } from 'react-router-dom';

import concluir from '../../assets/concluir.svg'
import excluir from '../../assets/excluir.svg'

import { ButtonContainer, TaskList } from './styles';
import Loading from '../../Components/Loading';

const ItemList = lazy(() => import('./ItemTask/index'));
interface Tasksprop {
    buttonsActive?: boolean;
}

const Task: React.FC<Tasksprop> = ({ buttonsActive = false }) => {
    const history = useHistory();
    const [tasks, setTasks] = useState<TaskProperties[]>([])
    const concluirTask = (index) => {
        if (!tasks[index].complete) {
            patchTask(index).then((e) => {
                const arr = Array.from(tasks);
                arr[index].complete = true;
                setTasks(arr);
            }).catch((err) => console.error(err))
        }
    }
    useEffect(() => {
        getTasks()
            .then((res) => {
                console.log(res.data)
                return res.data;
            })
            .then((res) => {
                setTasks(res);
            })
            .catch((err) => console.error(err))
    }, []);

    return (
        <TaskList>
            {tasks.map(({ id, task, description, date, complete }) => (
                <Suspense fallback={<Loading />} key={id}>
                    <ItemList
                        key={id}
                        id={id}
                        task={task}
                        description={description}
                        date={date}
                        complete={complete}
                    >
                        {!buttonsActive && (
                            <ButtonContainer>
                                <Button img={concluir} handleChange={() => { concluirTask(id) }} />
                                <Button img={excluir} handleChange={() => { }} />
                            </ButtonContainer>)}
                    </ItemList>
                </Suspense>
            ))}
        </TaskList>
    );
};

export default Task;
