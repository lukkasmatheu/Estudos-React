import React from 'react';
import { render } from '@testing-library/react';
import Routes from './Routes';
import { MemoryRouter } from 'react-router';


describe('Routes test', () => {

    it('should render Routes without crash', () => {
        render(
            <MemoryRouter initialEntries={['/list']}>
                <Routes />
            </MemoryRouter>,
        );
    });
});
