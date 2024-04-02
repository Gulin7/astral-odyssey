import axios from 'axios';
import {useEffect, useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {CharactersContextProvider} from './contexts/CharactersContext';
import {PlayersContextProvider} from './contexts/PlayersContext';
import Character from './models/Character';
import {Player} from './models/Player';
import AddCharacterPage from './pages/AddCharacterPage/AddCharacterPage';
import AddPlayerPage from './pages/AddPlayerPage/AddPlayerPage';
import ArmorPage from './pages/ArmorsPage/ArmorsPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import ClassesChartPage from './pages/ClassesChartPage/ClassesChartPage';
import EditCharacterPage from './pages/EditCharacterPage/EditCharacterPage';
import EditPlayerPage from './pages/EditPlayerPage/EditPlayerPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PlayersPage from './pages/PlayersPage/PlayersPage';
import PotionPage from './pages/PotionsPage/PotionsPage';
import WeaponPage from './pages/WeaponsPage/WeaponsPage';

function App() {
    const [players, setPlayers] = useState<Player[]>([]);

    const fetchPlayers = async () => {
        await axios
            .get('http://localhost:5000/api/players')
            .then((response) => {
                const fetchedPlayers = response.data.map(
                    (player: any) =>
                        new Player(
                            player.id,
                            player.username,
                            player.nickname,
                            player.pictureURL,
                        ),
                );
                setPlayers(fetchedPlayers);
                console.log('My players are: ');
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching players: ', error);
            });
    };

    useEffect(() => {
        fetchPlayers();
    }, []);

    const [characters, setCharacters] = useState<Character[]>([]);

    const fetchCharacters = async () => {
        await axios
            .get('http://localhost:5000/api/characters')
            .then((response) => {
                const fetchedCharacters = response.data.map(
                    (character: any) =>
                        new Character(
                            character.id,
                            character.name,
                            character.charClass,
                            character.race,
                            character.playerId,
                            character.skinURL,
                            character.level,
                        ),
                );
                setCharacters(fetchedCharacters);
                console.log('My characters are: ');
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching characters: ', error);
            });
    };

    useEffect(() => {
        fetchCharacters();
    }, []);

    const addPlayer = (newPlayer: Player) => {
        setPlayers((prevState: Player[]) => [...prevState, newPlayer]);
    };

    const removePlayer = (playerId: number) => {
        setPlayers((prevState: Player[]) =>
            prevState.filter((player: Player) => player.getId() !== playerId),
        );
    };

    const addCharacter = (newCharacter: Character) => {
        setCharacters((prevState: Character[]) => [...prevState, newCharacter]);
    };

    const removeCharacter = (characterId: number) => {
        setCharacters((prevState: Character[]) =>
            prevState.filter(
                (character: Character) => character.getId() !== characterId,
            ),
        );
    };

    return (
        <PlayersContextProvider
            playerContext={{players, addPlayer, removePlayer}}
        >
            <CharactersContextProvider
                characterContext={{characters, addCharacter, removeCharacter}}
            >
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/players' element={<PlayersPage />} />
                        <Route path='/addPlayer' element={<AddPlayerPage />} />
                        <Route
                            path='/editPlayer/:playerId'
                            element={<EditPlayerPage />}
                        />
                        <Route
                            path='/characters'
                            element={<CharactersPage />}
                        />
                        <Route
                            path='/addCharacter'
                            element={<AddCharacterPage />}
                        />
                        <Route
                            path='/editCharacter/:characterId'
                            element={<EditCharacterPage />}
                        />
                        <Route
                            path='/classesChart'
                            element={<ClassesChartPage />}
                        />
                        <Route path='/armorShop' element={<ArmorPage />} />
                        <Route path='/potionShop' element={<PotionPage />} />
                        <Route path='/weaponShop' element={<WeaponPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Routes>
                </BrowserRouter>
            </CharactersContextProvider>
        </PlayersContextProvider>
    );
}

export default App;
