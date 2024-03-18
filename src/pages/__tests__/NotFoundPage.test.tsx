import {describe, expect, it} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';

import App from '../../App';

describe('NotFoundPage component', () => {
    it('Renders not found page when route is not found', () => {
        window.history.pushState({}, 'Test page', '/myTestPage');
        render(<App />);

        const renderedNotFoundPage = screen.getByTestId('not-found-test-id');

        expect(renderedNotFoundPage).toBeInTheDocument();
    });
    it('Does not render not found page when the route is found', () => {
        window.history.pushState({}, 'Test page', '/');
        render(<App />);

        const renderedNotFoundPage = screen.queryByTestId('not-found-test-id');

        expect(renderedNotFoundPage).not.toBeInTheDocument();
    });
});
