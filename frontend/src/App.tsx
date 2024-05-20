import axios from 'axios';
import axiosRetry from 'axios-retry';
import {useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {io} from 'socket.io-client';
import './App.css';
import ConnectionStatus from './ConnectionStatus';
import {CharactersContextProvider} from './contexts/CharactersContext';
import {PlayersContextProvider} from './contexts/PlayersContext';
import {UserContextProvider} from './contexts/UserContext';
import Character from './models/Character';
import {Player} from './models/Player';
import {User} from './models/User';
import AddCharacterPage from './pages/AddCharacterPage/AddCharacterPage';
import AddPlayerPage from './pages/AddPlayerPage/AddPlayerPage';
import ArmorPage from './pages/ArmorsPage/ArmorsPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import ClassesChartPage from './pages/ClassesChartPage/ClassesChartPage';
import EditCharacterPage from './pages/EditCharacterPage/EditCharacterPage';
import EditPlayerPage from './pages/EditPlayerPage/EditPlayerPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PlayersPage from './pages/PlayersPage/PlayersPage';
import PotionPage from './pages/PotionsPage/PotionsPage';
import SignupPage from './pages/SignupPage/SignupPage';
import WeaponPage from './pages/WeaponsPage/WeaponsPage';

function App() {
    const [players, setPlayers] = useState<Player[]>([]);

    const page = 0;

    const [user, setUser] = useState<User>();

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [isServerOnline, setIsServerOnline] = useState(true);

    useEffect(() => {
        const socket = io('http://localhost:5000', {transports: ['websocket']});
        socket.on('player', (fields: any) => {
            console.log('Received new player from server: ', fields);
            /*const player = new Player(
                fields.id,
                fields.userId,
                fields.nickname,
                fields.pictureURL,
            );
            setPlayers((prevPlayers) => [...prevPlayers, player]);*/
        });

        socket.on('connect_error', () => {
            setIsServerOnline(false);
        });
    });

    useEffect(() => {
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', () => setIsOnline(false));

        return () => {
            window.removeEventListener('online', () => setIsOnline(true));
            window.removeEventListener('offline', () => setIsOnline(false));
        };
    }, []);

    axiosRetry(axios, {retries: 3});

    const fetchPlayers = async () => {
        await axios({
            method: 'GET',
            url: `http://localhost:5000/api/players?page=${page}`,
            data: page,
        })
            //.get(`http://localhost:5000/api/players?page=${page}`)
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
                if (page === 0) {
                    setPlayers(fetchedPlayers);
                } else {
                    setPlayers((prevPlayers) => [
                        ...prevPlayers,
                        ...fetchedPlayers,
                    ]);
                }

                localStorage.setItem('players', JSON.stringify(fetchedPlayers));
                setIsServerOnline(true);

                //setPlayers(fetchedPlayers);

                //console.log('My players are: ');
                //console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching players: ', error);
                const storedPlayers = JSON.parse(
                    localStorage.getItem('players') || '[]',
                );
                const players = storedPlayers.map(
                    (player: any) =>
                        new Player(
                            player.id,
                            player.username,
                            player.nickname,
                            player.pictureURL,
                        ),
                );
                setPlayers(players);
                setIsServerOnline(false);
            });
    };

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
                //console.log('My characters are: ');
                //console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching characters: ', error);
                setIsServerOnline(false);
            });
    };

    useEffect(() => {
        fetchPlayers();
        fetchCharacters();
    }, [isServerOnline]);

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
        <UserContextProvider userContext={{user, setUser}}>
            <PlayersContextProvider
                playerContext={{players, addPlayer, removePlayer}}
            >
                <CharactersContextProvider
                    characterContext={{
                        characters,
                        addCharacter,
                        removeCharacter,
                    }}
                >
                    <BrowserRouter>
                        <ConnectionStatus />
                        <Routes>
                            <Route
                                path='/'
                                element={
                                    user && user.getId() > 0 ? (
                                        <HomePage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route path='/login' element={<LoginPage />} />
                            <Route path='/signup' element={<SignupPage />} />
                            <Route
                                path='/players'
                                element={
                                    user && user.getId() > 0 ? (
                                        <PlayersPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route
                                path='/addPlayer'
                                element={
                                    user && user.getId() > 0 ? (
                                        <AddPlayerPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route
                                path='/editPlayer/:playerId'
                                element={
                                    user && user.getId() > 0 ? (
                                        <EditPlayerPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route
                                path='/characters'
                                element={
                                    user && user.getId() > 0 ? (
                                        <CharactersPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route
                                path='/addCharacter'
                                element={
                                    user && user.getId() > 0 ? (
                                        <AddCharacterPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route
                                path='/editCharacter/:characterId'
                                element={
                                    user && user.getId() > 0 ? (
                                        <EditCharacterPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route
                                path='/classesChart'
                                element={
                                    user && user.getId() > 0 ? (
                                        <ClassesChartPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route
                                path='/armorShop'
                                element={
                                    user && user.getId() > 0 ? (
                                        <ArmorPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route
                                path='/potionShop'
                                element={
                                    user && user.getId() > 0 ? (
                                        <PotionPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route
                                path='/weaponShop'
                                element={
                                    user && user.getId() > 0 ? (
                                        <WeaponPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                            <Route
                                path='*'
                                element={
                                    user && user.getId() > 0 ? (
                                        <NotFoundPage />
                                    ) : (
                                        <Navigate to='/login' replace />
                                    )
                                }
                            />
                        </Routes>
                    </BrowserRouter>
                </CharactersContextProvider>
            </PlayersContextProvider>
        </UserContextProvider>
    );
}

export default App;
