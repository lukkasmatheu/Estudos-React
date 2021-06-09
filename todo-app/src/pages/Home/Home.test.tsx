import React from 'react';
import {render} from '@testing-library/react';
import Home from './index';

describe('teste do boilerPlate', () => {
    it('Home', () => {
        const {getAllByAltText, debug} = render(<Home />);
        debug();
    });
});
