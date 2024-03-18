import {useContext} from 'react';
import {CharactersContext} from '../../contexts/CharactersContext';
import CharacterCard from '../../features/CharacterCard/CharacterCard';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Character from '../../models/Character';
import './CharactersPage.css';

const CharactersPage = () => {
    document.title = 'Astral Odyssey | Characters';

    const charactersContext = useContext(CharactersContext)!;

    const layoutTitle: string = 'Characters';

    let charactersArray: Character[] = charactersContext.characters;
    const removeCharacter = charactersContext.removeCharacter;

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>{layoutTitle}</h2>
                    <div className='main-description'>
                        This is the Characters page where you can create and
                        manage your characters.
                        <div
                            className='characters-list'
                            data-testid='characters-list-id'
                        >
                            {charactersArray.map((character: Character) => (
                                <CharacterCard
                                    givenCharacter={character}
                                    removeCharacter={removeCharacter}
                                    key={character.getId()}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CharactersPage;
