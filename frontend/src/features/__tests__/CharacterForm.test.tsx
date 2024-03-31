import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import React from 'react';
import {expect, test} from 'vitest';
import Character from '../../models/Character';
import {CharacterForm} from '../CRUD/CharacterForm/CharacterForm';

test('testing rendering of user form without user', () => {
    let idInput = React.createRef<HTMLInputElement>();
    let nameInput = React.createRef<HTMLInputElement>();
    let classInput = React.createRef<HTMLInputElement>();
    let raceInput = React.createRef<HTMLInputElement>();
    let playerIdInput = React.createRef<HTMLInputElement>();

    render(
        <CharacterForm
            idInput={idInput}
            nameInput={nameInput}
            classInput={classInput}
            raceInput={raceInput}
            playerIdInput={playerIdInput}
        />,
    );

    const renderedUserForm = screen.getByTestId('character-form-test-id');
    const idFormInput = screen.getByPlaceholderText('Enter ID');
    const nameFormInput = screen.getByPlaceholderText('Enter name');
    const classFormLabel = screen.getByText('Character Class');
    const raceFormLabel = screen.getByText('Character Race');

    expect(renderedUserForm).toBeInTheDocument();
    expect(idFormInput).toBeInTheDocument();
    expect(nameFormInput).toBeInTheDocument();
    expect(classFormLabel).toBeInTheDocument();
    expect(raceFormLabel).toBeInTheDocument();
});

test('testing rendering of user form with user', () => {
    let idInput = React.createRef<HTMLInputElement>();
    let nameInput = React.createRef<HTMLInputElement>();
    let classInput = React.createRef<HTMLInputElement>();
    let raceInput = React.createRef<HTMLInputElement>();
    let playerIdInput = React.createRef<HTMLInputElement>();

    let demoCharacter = new Character(
        1,
        'testName',
        'testClass',
        'testRace',
        2,
    );

    render(
        <CharacterForm
            idInput={idInput}
            nameInput={nameInput}
            classInput={classInput}
            raceInput={raceInput}
            playerIdInput={playerIdInput}
            givenCharacter={demoCharacter}
        />,
    );

    const renderedUserForm = screen.getByTestId('character-form-test-id');
    expect(renderedUserForm).toBeInTheDocument();

    const nameFormInput = screen.getByDisplayValue('testName');
    expect(nameFormInput).toBeInTheDocument();

    const nameFormLabel = screen.getByText('Character Name');
    expect(nameFormLabel).toBeInTheDocument();

    const classFormInput = screen.getByDisplayValue('testClass');
    expect(classFormInput).toBeInTheDocument();

    const classFormLabel = screen.getByText('Character Class');
    expect(classFormLabel).toBeInTheDocument();

    const raceFormLabel = screen.getByText('Character Race');
    expect(raceFormLabel).toBeInTheDocument();

    const raceFormInput = screen.getByDisplayValue('testRace');
    expect(raceFormInput).toBeInTheDocument();

    const idFormInput = screen.getByDisplayValue('1');
    expect(idFormInput).toBeInTheDocument();

    const idFormLabel = screen.getByText('Character ID');
    expect(idFormLabel).toBeInTheDocument();

    const playerIdFormLabel = screen.getByText('Player ID');
    expect(playerIdFormLabel).toBeInTheDocument();

    const playerIdFormInput = screen.getByDisplayValue('2');
    expect(playerIdFormInput).toBeInTheDocument();
});
