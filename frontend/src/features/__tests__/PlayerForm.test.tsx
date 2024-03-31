import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {expect, test} from 'vitest';
import {Player} from '../../../../models/Player';
import {PlayerForm} from '../CRUD/PlayerForm/PlayerForm';

test('testing rendering of user form without user', () => {
    let idInput = React.createRef<HTMLInputElement>();
    let usernameInput = React.createRef<HTMLInputElement>();
    let nicknameInput = React.createRef<HTMLInputElement>();
    let urlInput = React.createRef<HTMLInputElement>();

    render(
        <PlayerForm
            idInput={idInput}
            usernameInput={usernameInput}
            nicknameInput={nicknameInput}
            urlInput={urlInput}
        />,
    );

    const renderedUserForm = screen.getByTestId('player-form-test-id');
    const idFormInput = screen.getByPlaceholderText('Enter ID');
    const usernameFormInput = screen.getByPlaceholderText('Enter username');
    const nicknameFormLabel = screen.getByText('Nickname');
    const urlFormLabel = screen.getByText('URL');

    expect(renderedUserForm).toBeInTheDocument();
    expect(idFormInput).toBeInTheDocument();
    expect(usernameFormInput).toBeInTheDocument();
    expect(nicknameFormLabel).toBeInTheDocument();
    expect(urlFormLabel).toBeInTheDocument();
});

test('testing rendering of user form with user', () => {
    let idInput = React.createRef<HTMLInputElement>();
    let usernameInput = React.createRef<HTMLInputElement>();
    let nicknameInput = React.createRef<HTMLInputElement>();
    let urlInput = React.createRef<HTMLInputElement>();

    let demoPlayer = new Player(1, 'testUsername', 'testNickname', 'testUrl');

    render(
        <PlayerForm
            idInput={idInput}
            usernameInput={usernameInput}
            nicknameInput={nicknameInput}
            urlInput={urlInput}
            givenPlayer={demoPlayer}
        />,
    );

    const renderedPlayerForm = screen.getByTestId('player-form-test-id');
    const idFormInput = screen.getByDisplayValue('1');
    const usernameFormInput = screen.getByDisplayValue('testUsername');
    const idFormLabel = screen.getByText('ID');
    const nicknameFormLabel = screen.getByText('Nickname');

    expect(renderedPlayerForm).toBeInTheDocument();
    expect(idFormInput).toBeInTheDocument();
    expect(usernameFormInput).toBeInTheDocument();
    expect(idFormLabel).toBeInTheDocument();
    expect(nicknameFormLabel).toBeInTheDocument();
});
