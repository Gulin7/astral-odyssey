import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {expect, test} from 'vitest';

import React from 'react';
import {PlayerFormEntry} from '../CRUD/PlayerFormEntry/PlayerFormEntry';

test('test form entry without default value', () => {
    const demoReference = React.createRef<HTMLInputElement>();

    render(
        <PlayerFormEntry
            label='test-label'
            placeHolder='test-placeHolder'
            disabled={false}
            defaultValue=''
            ref={demoReference}
        />,
    );

    const element = screen.getByTestId('player-form-entry-test-id');
    expect(element).toBeInTheDocument();
});

test('test form entry with default value', () => {
    const demoReference = React.createRef<HTMLInputElement>();

    render(
        <PlayerFormEntry
            label='test-label'
            placeHolder='test-placeHolder'
            disabled={false}
            defaultValue='test value'
            ref={demoReference}
        />,
    );

    const element = screen.getByTestId('player-form-entry-test-id');
    expect(element).toBeInTheDocument();
});

test('test form entry for disabled input', () => {
    const demoReference = React.createRef<HTMLInputElement>();

    render(
        <PlayerFormEntry
            label='test-label'
            placeHolder='test-placeHolder'
            disabled={true}
            defaultValue='test value'
            ref={demoReference}
        />,
    );

    const element = screen.getByTestId('player-form-input-test-id');
    expect(element).toBeDisabled();
});

test('test form entry for enabled input', () => {
    const demoReference = React.createRef<HTMLInputElement>();

    render(
        <PlayerFormEntry
            label='test-label'
            placeHolder='test-placeHolder'
            disabled={false}
            defaultValue='test value'
            ref={demoReference}
        />,
    );

    const element = screen.getByTestId('player-form-input-test-id');
    expect(element).toBeEnabled();
});
