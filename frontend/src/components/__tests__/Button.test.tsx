import {describe, expect, it, test} from 'vitest';

import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import Button from '../Button/Button';

// 1st type of testing
test('test button rendering without extra class', () => {
    render(<Button type='button' buttonText='Remove player'></Button>);

    const renderedButton = screen.getByTestId('button-test-id');
    expect(renderedButton).toBeInTheDocument();
});

test('test button rendering with extra class', () => {
    render(
        <Button
            type='button'
            buttonText='Remove player'
            className='button-light remove-button'
        ></Button>,
    );

    const renderedButton = screen.getByTestId('button-test-id');
    expect(renderedButton).toBeInTheDocument();
});

// 2nd types of testing
describe('Button component', () => {
    it('Render without extra class', () => {
        render(<Button type='button' buttonText='Remove player'></Button>);

        const renderedButton = screen.getByTestId('button-test-id');
        expect(renderedButton).toBeInTheDocument();
    });
    it('Render with extra class', () => {
        render(
            <Button
                type='button'
                buttonText='Remove player'
                className='button-light remove-button'
            ></Button>,
        );

        const renderedButton = screen.getByTestId('button-test-id');
        expect(renderedButton).toBeInTheDocument();
    });
    it('Has the desired text', () => {
        render(
            <Button
                type='button'
                buttonText='Remove player'
                className='button-light remove-button'
            ></Button>,
        );

        const renderedButton = screen.getByTestId('button-test-id');
        expect(renderedButton).toHaveTextContent('Remove player');
    });
    it('Has the desired type', () => {
        render(
            <Button
                type='button'
                buttonText='Remove player'
                className='button-light remove-button'
            ></Button>,
        );

        const renderedButton = screen.getByTestId('button-test-id');
        expect(renderedButton).toHaveAttribute('type', 'button');
    });
    it('Has the desired class', () => {
        render(
            <Button
                type='button'
                buttonText='Remove player'
                className='button-light remove-button'
            ></Button>,
        );

        const renderedButton = screen.getByTestId('button-test-id');
        expect(renderedButton).toHaveClass('button');
        expect(renderedButton).toHaveClass('button-light');
        expect(renderedButton).toHaveClass('remove-button');
    });
});
