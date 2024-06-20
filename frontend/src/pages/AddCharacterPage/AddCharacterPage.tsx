import axios from 'axios';
import axiosRetry from 'axios-retry';
import {useContext, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {CharactersContext} from '../../contexts/CharactersContext';
import {CharacterForm} from '../../features/CRUD/CharacterForm/CharacterForm';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Character from '../../models/Character';
import './AddCharacterPage.css';

function handleOnClick(
    // idInput: React.RefObject<HTMLInputElement>,
    nameInput: React.RefObject<HTMLInputElement>,
    classInput: React.RefObject<HTMLInputElement>,
    raceInput: React.RefObject<HTMLInputElement>,
    playerIdInput: React.RefObject<HTMLInputElement>,
): {name: string; charClass: string; race: string; playerId: number} {
    if (
        // !idInput.current!.value ||
        !nameInput.current!.value ||
        !classInput.current!.value ||
        !raceInput.current!.value ||
        !playerIdInput.current!.value
    ) {
        throw new Error('All fields are required');
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

const AddCharacterPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    document.title = 'Astral Odyssey | Add Character';

    // const idInput = useRef<HTMLInputElement>(null);
    const nameInput = useRef<HTMLInputElement>(null);
    const classInput = useRef<HTMLInputElement>(null);
    const raceInput = useRef<HTMLInputElement>(null);
    const playerIdInput = useRef<HTMLInputElement>(null);

    const charactersContext = useContext(CharactersContext)!;

    const handleOnClickWrapper = () => {
        axiosRetry(axios, {retries: 3});

        try {
            const inputCharacter = handleOnClick(
                // idInput,
                nameInput,
                classInput,
                raceInput,
                playerIdInput,
            );

            charactersContext.addCharacter(
                new Character(
                    inputCharacter.name,
                    inputCharacter.charClass,
                    inputCharacter.race,
                    inputCharacter.playerId,
                    `${inputCharacter.charClass}-default.png`,
                    1,
                ),
            );

            //const URL = `http://localhost:5000/api/characters/addCharacter`;
            const URL = `http://3.79.63.224:5000/api/characters/addCharacter`;

            axios({
                method: 'POST',
                url: URL,
                data: inputCharacter,
            }).then((response) => {
                console.log('My characters are: ');
                console.log(response.data);
            });
            navigate('/characters');
        } catch (error) {
            // alert('Smth went wrong');
            alert(error);
        }
    };

    const layoutTitle: string = 'Add Characters';

    return (
        <MainLayout>
            <div className='main-page' data-testid='main-page-id'>
                <div className='main-page-container'>
                    <div className='main-title'>{layoutTitle}</div>
                    <CharacterForm
                        // idInput={idInput}
                        nameInput={nameInput}
                        classInput={classInput}
                        raceInput={raceInput}
                        playerIdInput={playerIdInput}
                        data-testid='character-form-id'
                    />
                    <Button
                        type='submit'
                        buttonText='Add Characters'
                        onClick={handleOnClickWrapper}
                        data-testid='add-character-button-id'
                        className='button-dark'
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default AddCharacterPage;
