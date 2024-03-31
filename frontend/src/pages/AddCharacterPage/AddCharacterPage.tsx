import {useContext, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {CharactersContext} from '../../contexts/CharactersContext';
import {CharacterForm} from '../../features/CRUD/CharacterForm/CharacterForm';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Character from '../../models/Character';
import './AddCharacterPage.css';

function handleOnClick(
    idInput: React.RefObject<HTMLInputElement>,
    nameInput: React.RefObject<HTMLInputElement>,
    classInput: React.RefObject<HTMLInputElement>,
    raceInput: React.RefObject<HTMLInputElement>,
    playerIdInput: React.RefObject<HTMLInputElement>,
): Character {
    if (
        !idInput.current!.value ||
        !nameInput.current!.value ||
        !classInput.current!.value ||
        !raceInput.current!.value ||
        !playerIdInput.current!.value
    ) {
        throw new Error('All fields are required');
    }

    const characterId: number = parseInt(idInput.current!.value);
    const characterName: string = nameInput.current!.value;
    const characterClass: string = classInput.current!.value;
    const characterRace: string = raceInput.current!.value;
    const characterPlayerId: number = parseInt(playerIdInput.current!.value);

    return new Character(
        characterId,
        characterName,
        characterClass,
        characterRace,
        characterPlayerId,
    );
}

const AddCharacterPage = () => {
    document.title = 'Astral Odyssey | Add Character';

    const idInput = useRef<HTMLInputElement>(null);
    const nameInput = useRef<HTMLInputElement>(null);
    const classInput = useRef<HTMLInputElement>(null);
    const raceInput = useRef<HTMLInputElement>(null);
    const playerIdInput = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const charactersContext = useContext(CharactersContext)!;

    const handleOnClickWrapper = () => {
        try {
            const inputCharacter = handleOnClick(
                idInput,
                nameInput,
                classInput,
                raceInput,
                playerIdInput,
            );
            console.log(idInput);
            charactersContext.addCharacter(inputCharacter);
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
                        idInput={idInput}
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
