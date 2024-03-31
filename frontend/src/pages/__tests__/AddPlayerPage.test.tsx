import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {expect, test} from 'vitest';

import React from 'react';
import {PlayerForm} from '../../features/CRUD/PlayerForm/PlayerForm';
import {Player} from '../../models/Player';

test('testing rendering of player form without player', () => {
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
    const firstNameFormInput = screen.getByPlaceholderText('Enter username');
    const lastNameFormLabel = screen.getByText('Nickname');
    const urlFormLabel = screen.getByText('URL');

    expect(renderedUserForm).toBeInTheDocument();
    expect(idFormInput).toBeInTheDocument();
    expect(firstNameFormInput).toBeInTheDocument();
    expect(lastNameFormLabel).toBeInTheDocument();
    expect(urlFormLabel).toBeInTheDocument();
});

test('testing rendering of player form with player', () => {
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
    const nicknameFormLabel2 = screen.getByDisplayValue('testNickname');
    const usernameFormInput = screen.getByDisplayValue('testUsername');
    const nicknameFormLabel = screen.getByText('Nickname');
    const urlFormLabel = screen.getByText('URL');

    expect(nicknameFormLabel2).toBeInTheDocument();
    expect(renderedPlayerForm).toBeInTheDocument();
    expect(idFormInput).toBeInTheDocument();
    expect(usernameFormInput).toBeInTheDocument();
    expect(nicknameFormLabel).toBeInTheDocument();
    expect(urlFormLabel).toBeInTheDocument();
});
