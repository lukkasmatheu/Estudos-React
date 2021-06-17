import React from 'react';
import {render} from '@testing-library/react';
import ItemList from './index';
import Task from './index';
import {TaskProperties} from '../../models/TaskModel';

const itemList: TaskProperties[] = [
    {
        id: 0,
        task: 'testes',
        description: 'Testes',
        date: '20-02-2000',
        complete: false,
    },
    {
        id: 1,
        task: 'testes1',
        description: 'Testes1',
        date: '20-02-2000',
        complete: false,
    },
];

describe('ItemList', () => {
    it('should render page home without crash', () => {
        const {getAllByText} = render(<Task tasks={itemList} />);

        const taskOne = getAllByText(/testes/i);
        const taskTwo = getAllByText(/testes1/i);

        expect(taskOne).toBeTruthy();
        expect(taskTwo).toBeTruthy();
    });
});
