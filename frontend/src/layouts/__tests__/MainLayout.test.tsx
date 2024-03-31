import {describe, expect, it} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import {BrowserRouter} from 'react-router-dom';

import MainLayout from '../mainLayout/MainLayout';

describe('MainLayout component', () => {
    it('Renders the main layout', () => {
        render(
            <BrowserRouter>
                <MainLayout></MainLayout>
            </BrowserRouter>,
        );

        const renderedMainLayout = screen.getByTestId('main-layout-test-id');
        expect(renderedMainLayout).toBeInTheDocument();
    });
    it('Renders the main layout content', () => {
        render(
            <BrowserRouter>
                <MainLayout></MainLayout>
            </BrowserRouter>,
        );

        const renderedMainLayoutContent = screen.getByTestId(
            'main-layout-content-test-id',
        );
        expect(renderedMainLayoutContent).toBeInTheDocument();
    });
    it('Render the Header component', () => {
        render(
            <BrowserRouter>
                <MainLayout></MainLayout>
            </BrowserRouter>,
        );

        const renderedHeader = screen.getByTestId('header-test-id');
        expect(renderedHeader).toBeInTheDocument();
    });
    it('Render the Navbar component', () => {
        render(
            <BrowserRouter>
                <MainLayout></MainLayout>
            </BrowserRouter>,
        );

        const renderedNavbar = screen.getByTestId('navbar-test-id');
        expect(renderedNavbar).toBeInTheDocument();
    });
    it('Render the Footer component', () => {
        render(
            <BrowserRouter>
                <MainLayout></MainLayout>
            </BrowserRouter>,
        );

        const renderedFooter = screen.getByTestId('footer-test-id');
        expect(renderedFooter).toBeInTheDocument();
    });
});
