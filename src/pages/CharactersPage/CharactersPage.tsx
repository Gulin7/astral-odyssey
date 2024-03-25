import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {CharactersContext} from '../../contexts/CharactersContext';
import CharacterCard from '../../features/CharacterCard/CharacterCard';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Character from '../../models/Character';
import './CharactersPage.css';

const CharactersPage = () => {
    document.title = 'Astral Odyssey | Characters';

    const charactersContext = useContext(CharactersContext)!;

    const layoutTitle: string = 'Characters';

    const removeCharacter = charactersContext.removeCharacter;

    const charactersArray: Character[] = charactersContext.characters;

    const [characters, setCharacters] = useState<Character[]>([]);

    const [sortedByName, setSortedByName] = useState<boolean>(false);

    useEffect(() => {
        console.log(characters);
    }, [characters]);

    useEffect(() => {
        let sorted;
        if (sortedByName) {
            sorted = [...characters].sort((a, b) =>
                a.getName().toLowerCase() > b.getName().toLowerCase() ? 1 : -1,
            );
        } else {
            sorted = [...characters].sort((a, b) =>
                a.getName().toLowerCase() < b.getName().toLowerCase() ? 1 : -1,
            );
        }

        setCharacters(sorted);
    }, [sortedByName]);

    useEffect(() => {
        setCharacters(charactersArray);
    }, [charactersContext.characters]);
    const navigate = useNavigate();

    const getCharactersList = (page = 0, limit = 6) => {
        const start = page * limit;
        const end = (page + 1) * limit;
        const items = characters.slice(start, end);
    };

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>{layoutTitle}</h2>
                    <div className='main-description'>
                        This is the Characters page where you can create and
                        manage your characters.
                    </div>
                    <div className='buttons'>
                        <Button
                            type='button'
                            buttonText='See charts'
                            className='button-dark'
                            onClick={() => {
                                navigate('/classesChart');
                            }}
                        ></Button>
                        <Button
                            type='button'
                            buttonText='Sort by name'
                            className='button-dark'
                            onClick={() => {
                                setSortedByName(!sortedByName);
                            }}
                        ></Button>
                        <Button
                            type='button'
                            buttonText='Sort by level'
                            className='button-dark'
                            onClick={() => {
                                const sortedByLevel = characters.sort(
                                    (a, b) => a.getLevel() - b.getLevel(),
                                );
                                setCharacters(sortedByLevel);
                            }}
                        ></Button>

                        <Button
                            type='button'
                            buttonText='All classes'
                            onClick={() => {
                                setCharacters(charactersArray);
                            }}
                            className='button-dark'
                        ></Button>
                        <Button
                            type='button'
                            buttonText='Warrior'
                            onClick={() => {
                                const filtered = characters.filter(
                                    (character) =>
                                        character.getCharClass() === 'Warrior',
                                );
                                setCharacters(filtered);
                            }}
                            className='button-dark'
                        ></Button>
                        <Button
                            type='button'
                            buttonText='Ranger'
                            onClick={() => {
                                const filtered = characters.filter(
                                    (character) =>
                                        character.getCharClass() === 'Ranger',
                                );
                                setCharacters(filtered);
                            }}
                            className='button-dark'
                        ></Button>
                        <Button
                            type='button'
                            buttonText='Fighter'
                            onClick={() => {
                                const filtered = characters.filter(
                                    (character) =>
                                        character.getCharClass() === 'Fighter',
                                );
                                setCharacters(filtered);
                            }}
                            className='button-dark'
                        ></Button>
                        <Button
                            type='button'
                            buttonText='Mage'
                            onClick={() => {
                                const filtered = characters.filter(
                                    (character) =>
                                        character.getCharClass() === 'Mage',
                                );
                                setCharacters(filtered);
                            }}
                            className='button-dark'
                        ></Button>
                    </div>
                    <div
                        className='characters-list'
                        data-testid='characters-list-test-id'
                    >
                        {characters.map((character: Character) => (
                            <CharacterCard
                                givenCharacter={character}
                                removeCharacter={removeCharacter}
                                key={character.getId()}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CharactersPage;
