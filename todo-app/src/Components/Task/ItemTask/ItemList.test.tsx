import React from 'react';
import {render} from '@testing-library/react';
import ItemList from './index';

const itemList = {
    id: 0,
    task: 'testes',
    description: 'Testes',
    date: '20-02-2000',
    complete: false,
};

describe('ItemList', () => {
    it('should render page home without crash', () => {
        const {getAllByText} = render(
            <ItemList
                id={0}
                task={'testes'}
                description={'Testes'}
                date={'20-02-2000'}
                complete={false}
            />,
        );

        const task = getAllByText(/testes/i);
        console.log(task);
        expect(task).toBeTruthy();
    });
});
