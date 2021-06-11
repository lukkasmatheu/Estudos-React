import React from 'react';

import {TaskProperties} from '../../models/TaskModel';

import ItemList from './ItemTask/index';

import {TaskList} from './styles';

interface Tasksprop {
    tasks: TaskProperties[];
}

const Task: React.FC<Tasksprop> = ({tasks}) => {
    return (
        <TaskList>
            {tasks.map(({id, task, description, date, complete}) => (
                <ItemList
                    key={id}
                    id={id}
                    task={task}
                    description={description}
                    date={date}
                    complete={complete}
                />
            ))}
        </TaskList>
    );
};

export default Task;
