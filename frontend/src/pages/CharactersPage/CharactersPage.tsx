import {Pagination} from '@mui/material';
import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {CharactersContext} from '../../contexts/CharactersContext';
import CharacterCard from '../../features/CharacterCard/CharacterCard';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Character from '../../models/Character';
import './CharactersPage.css';

const CharactersPage = () => {
    const navigate = useNavigate();

    document.title = 'Astral Odyssey | Characters';

    const charactersContext = useContext(CharactersContext)!;

    const layoutTitle: string = 'Characters';

    const removeCharacter = charactersContext.removeCharacter;

    const charactersArray: Character[] = charactersContext.characters;

    const [characters, setCharacters] = useState<Character[]>([]);

    const [sortedByName, setSortedByName] = useState<boolean>(false);

    useEffect(() => {
        const token = sessionStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    // Console useEffect for characters
    useEffect(() => {
        console.log(characters);
    }, [characters]);

    // Sorted useEffect
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

    // Pagination
    const [page, setPage] = useState(1);
    const limit = 6;

    useEffect(() => {
        setCharacters(charactersArray);
    }, [charactersContext.characters]);

    const getCharactersList = () => {
        const start = (page - 1) * limit;
        const end = page * limit;
        return characters.slice(start, end);
    };

    const handleChange = (
        _event: React.ChangeEvent<unknown>,
        value: number,
    ) => {
        setPage(value);
    };

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>{layoutTitle}</h2>
                    <div className='main-description'>
                        This is the Characters page where you can create and
                        manage all your characters.
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
                                const filtered = charactersArray.filter(
                                    (character) =>
                                        character.getCharClass() === 'warrior',
                                );
                                setCharacters(filtered);
                            }}
                            className='button-dark'
                        ></Button>
                        <Button
                            type='button'
                            buttonText='Ranger'
                            onClick={() => {
                                const filtered = charactersArray.filter(
                                    (character) =>
                                        character.getCharClass() === 'ranger',
                                );
                                setCharacters(filtered);
                            }}
                            className='button-dark'
                        ></Button>
                        <Button
                            type='button'
                            buttonText='Fighter'
                            onClick={() => {
                                const filtered = charactersArray.filter(
                                    (character) =>
                                        character.getCharClass() === 'fighter',
                                );
                                setCharacters(filtered);
                            }}
                            className='button-dark'
                        ></Button>
                        <Button
                            type='button'
                            buttonText='Mage'
                            onClick={() => {
                                const filtered = charactersArray.filter(
                                    (character) =>
                                        character.getCharClass() === 'mage',
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
                        {getCharactersList().map((character: Character) => (
                            <CharacterCard
                                givenCharacter={character}
                                removeCharacter={removeCharacter}
                                key={character.getId()}
                            />
                        ))}
                    </div>
                    <div className='pagination'>
                        <Pagination
                            count={Math.ceil(characters.length / limit)}
                            page={page}
                            onChange={handleChange}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CharactersPage;
