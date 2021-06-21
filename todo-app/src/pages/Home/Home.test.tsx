import React from 'react';
import {render} from '@testing-library/react';
import Home from './index';
import {MemoryRouter} from 'react-router';

import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {act} from 'react-dom/test-utils';
import {TaskProperties} from '../../models/TaskModel';

const apiMock = new MockAdapter(axios);

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

describe('Home', () => {
    beforeEach(() => {
        apiMock.onGet('http://localhost:5000/task').reply(200, [...itemList]);
    });
    it('should render page home without crash', () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>,
        );
    });
});
