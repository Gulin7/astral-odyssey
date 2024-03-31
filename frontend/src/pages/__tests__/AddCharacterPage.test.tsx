import '@testing-library/jest-dom';
import {render, screen} from '@testing-library/react';
import {expect, test} from 'vitest';

import React from 'react';
import Character from '../../../../models/Character';
import {CharacterForm} from '../../features/CRUD/CharacterForm/CharacterForm';

test('testing rendering of character form without character', () => {
    let idInput = React.createRef<HTMLInputElement>();
    let nameInput = React.createRef<HTMLInputElement>();
    let classInput = React.createRef<HTMLInputElement>();
    let raceInput = React.createRef<HTMLInputElement>();
    let playerIdInput = React.createRef<HTMLInputElement>();

    const renderedComp = render(
        <CharacterForm
            idInput={idInput}
            nameInput={nameInput}
            classInput={classInput}
            raceInput={raceInput}
            playerIdInput={playerIdInput}
        />,
    );

    const renderedCharacterForm = screen.getByTestId('character-form-test-id');
    const idFormInput = screen.getByPlaceholderText('Enter ID');
    const nameFormInput = screen.getByPlaceholderText('Enter name');
    const classFormInput = screen.getByPlaceholderText('Enter class');
    const raceFormInput = screen.getByPlaceholderText('Enter race');

    const idFormLabel = screen.getByText('Character ID');
    const nameFormLabel = screen.getByText('Character Name');
    const classFormLabel = screen.getByText('Character Class');

    expect(renderedCharacterForm).toBeInTheDocument();
    expect(idFormInput).toBeInTheDocument();
    expect(nameFormInput).toBeInTheDocument();
    expect(classFormInput).toBeInTheDocument();
    expect(raceFormInput).toBeInTheDocument();
    expect(idFormLabel).toBeInTheDocument();
    expect(nameFormLabel).toBeInTheDocument();
    expect(classFormLabel).toBeInTheDocument();
    expect(renderedComp).toMatchSnapshot();
});

test('testing rendering of character form with character', () => {
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

    const renderedPlayerForm = screen.getByTestId('character-form-test-id');
    const idFormInput = screen.getByDisplayValue('1');
    const nameInputFormInput = screen.getByDisplayValue('testName');
    const classInputFormInput = screen.getByDisplayValue('testClass');
    const raceInputFormInput = screen.getByDisplayValue('testRace');
    const playerIdInputFormInput = screen.getByDisplayValue('2');

    expect(renderedPlayerForm).toBeInTheDocument();
    expect(idFormInput).toBeInTheDocument();
    expect(nameInputFormInput).toBeInTheDocument();
    expect(classInputFormInput).toBeInTheDocument();
    expect(raceInputFormInput).toBeInTheDocument();
    expect(playerIdInputFormInput).toBeInTheDocument();
});
