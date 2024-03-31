import {describe, expect, it} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import App from '../../App';
import HomePage from '../HomePage/HomePage';

describe('HomePage component', () => {
    it('Renders HomePage corretly', () => {
        render(
            <BrowserRouter>
                <HomePage></HomePage>
            </BrowserRouter>,
        );
        const renderedHomePage = screen.getByTestId('home-description-test-id');

        expect(renderedHomePage).toBeInTheDocument();
    });

    it('Renders HomePage when app is rendered', () => {
        render(<App />);
        const renderedHomePage = screen.getByTestId('home-description-test-id');

        expect(renderedHomePage).toBeInTheDocument();
    });
});
