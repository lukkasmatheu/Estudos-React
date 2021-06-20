import React from 'react';
import { render } from '@testing-library/react';
import Home from './index';
import { MemoryRouter } from 'react-router';

describe('MenuCards', () => {
    it('should render page home without crash', () => {
        render(<MemoryRouter>
            <Home></Home>
        </MemoryRouter>);
    });
});
