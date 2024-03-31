import {describe, expect, it} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';
import Navbar from '../navbar/Navbar';

describe('Navbar component', () => {
    it('Renders the navbar', () => {
        render(
            <BrowserRouter>
                <Navbar></Navbar>
            </BrowserRouter>,
        );

        const renderedNavbar = screen.getByTestId('navbar-test-id');
        expect(renderedNavbar).toBeInTheDocument();
    });
    it('Renders the navbar title', () => {
        render(
            <BrowserRouter>
                <Navbar></Navbar>
            </BrowserRouter>,
        );

        const renderedNavbarTitle = screen.getByRole('heading', {level: 2});
        expect(renderedNavbarTitle).toBeInTheDocument();
        expect(renderedNavbarTitle).toHaveTextContent('Astral Odyssey');
    });
});
