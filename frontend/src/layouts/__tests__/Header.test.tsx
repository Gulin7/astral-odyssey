import {describe, expect, it} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import Header from '../header/Header';

describe('Header component', () => {
    it('Renders the header', () => {
        render(<Header></Header>);

        const renderedHeader = screen.getByTestId('header-test-id');
        expect(renderedHeader).toBeInTheDocument();

        const renderedHeaderContainer = screen.getByTestId(
            'header-container-test-id',
        );
        expect(renderedHeaderContainer).toBeInTheDocument();

        const renderedHeaderTitle = screen.getByRole('heading', {level: 1});
        expect(renderedHeaderTitle).toBeInTheDocument();
        expect(renderedHeaderTitle).toHaveTextContent('Astral Odyssey');
    });
});
