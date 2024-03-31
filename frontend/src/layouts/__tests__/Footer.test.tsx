import {describe, expect, it} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Footer from '../footer/Footer';

describe('Footer component', () => {
    it('Renders the footer', () => {
        render(<Footer></Footer>);

        const renderedFooter = screen.getByTestId('footer-test-id');
        expect(renderedFooter).toBeInTheDocument();
        const renderedFooterContainer = screen.getByTestId(
            'footer-container-test-id',
        );
        expect(renderedFooterContainer).toBeInTheDocument();
    });
});
