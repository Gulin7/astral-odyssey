import axios from 'axios';
import React, {useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {CharactersContext} from '../../contexts/CharactersContext';
import {CharacterForm} from '../../features/CRUD/CharacterForm/CharacterForm';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Character from '../../models/Character';
import './EditCharacterPage.css';

function handleOnClick(
    // idInput: React.RefObject<HTMLInputElement>,
    nameInput: React.RefObject<HTMLInputElement>,
    classInput: React.RefObject<HTMLInputElement>,
    raceInput: React.RefObject<HTMLInputElement>,
    playerIdInput: React.RefObject<HTMLInputElement>,
) {
    if (
        // !idInput.current ||
        !nameInput.current ||
        !classInput.current ||
        !raceInput.current ||
        !playerIdInput.current
    ) {
        throw new Error('Inputs references are null');
    }

    if (
        // !idInput.current.value ||
        !nameInput.current.value ||
        !classInput.current.value ||
        !raceInput.current.value ||
        !playerIdInput.current.value
    ) {
        throw new Error('You must provide values for each field');
    }

    // const characterId: number = parseInt(idInput.current!.value);
    const characterName: string = nameInput.current!.value;
    const characterClass: string = classInput.current!.value;
    const characterRace: string = raceInput.current!.value;
    const characterPlayerId: number = parseInt(playerIdInput.current!.value);

    const characterFields = {
        name: characterName,
        charClass: characterClass,
        race: characterRace,
        playerId: characterPlayerId,
    };

    return characterFields;
}

const EditCharacterPage = () => {
    document.title = 'Astral Odyssey | Character Profile';

    // const idInput = React.createRef<HTMLInputElement>();
    const nameInput = React.createRef<HTMLInputElement>();
    const classInput = React.createRef<HTMLInputElement>();
    const raceInput = React.createRef<HTMLInputElement>();
    const playerIdInput = React.createRef<HTMLInputElement>();

    const navigate = useNavigate();
    const charactersContext = useContext(CharactersContext)!;

    const {characterId} = useParams();
    if (!characterId) {
        navigate('/characters');
        return;
    }

    const givenCharacter = charactersContext.characters.find(
        (character: Character) => character.getId() === parseInt(characterId),
    );

    const handleOnClickWrapper = () => {
        try {
            const newCharacter = handleOnClick(
                // idInput,
                nameInput,
                classInput,
                raceInput,
                playerIdInput,
            );

            axios
                .put(
                    `http://localhost:5000/api/characters/${givenCharacter?.getId()}`,
                    newCharacter,
                )
                .then((response) => {
                    console.log('Character updated: ', response.data);
                })
                .catch((error) => {
                    console.error('Error updating character: ', error);
                });

            navigate('/characters');
        } catch (error) {
            alert(error);
        }
    };

    const layoutTitle: string = 'Character Profile';

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>{layoutTitle}</h2>
                    <CharacterForm
                        // idInput={idInput}
                        nameInput={nameInput}
                        classInput={classInput}
                        raceInput={raceInput}
                        playerIdInput={playerIdInput}
                        givenCharacter={givenCharacter}
                    />

                    <Button
                        type='submit'
                        buttonText='Edit Character'
                        onClick={handleOnClickWrapper}
                        className='button-dark'
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default EditCharacterPage;
