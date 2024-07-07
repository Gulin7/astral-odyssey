import axios from 'axios';
import axiosRetry from 'axios-retry';
import {useEffect, useState} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import ConnectionStatus from './ConnectionStatus';
import {ArmorsContextProvider} from './contexts/ArmorsContext';
import {CharactersContextProvider} from './contexts/CharactersContext';
import {PlayersContextProvider} from './contexts/PlayersContext';
import {PotionsContextProvider} from './contexts/PotionsContext';
import {UserContextProvider} from './contexts/UserContext';
import {WeaponsContextProvider} from './contexts/WeaponsContext';
import Armor from './models/Armor';
import Character from './models/Character';
import {Player} from './models/Player';
import Potion from './models/Potion';
import {User} from './models/User';
import Weapon from './models/Weapon';
import AddCharacterPage from './pages/AddCharacterPage/AddCharacterPage';
import AddPlayerPage from './pages/AddPlayerPage/AddPlayerPage';
import ArmorPage from './pages/ArmorsPage/ArmorsPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import ChatPage from './pages/ChatPage/ChatPage';
import ClassesChartPage from './pages/ClassesChartPage/ClassesChartPage';
import ClassesPage from './pages/ClassesPage/ClassesPage';
import EditCharacterPage from './pages/EditCharacterPage/EditCharacterPage';
import EditPlayerPage from './pages/EditPlayerPage/EditPlayerPage';
import FighterPage from './pages/FighterPage/FighterPage';
import GamesPage from './pages/GamesPage/GamesPage';
import GuildsPage from './pages/GuildsPage/GuildsPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MagePage from './pages/MagePage/MagePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PlayersPage from './pages/PlayersPage/PlayersPage';
import PotionPage from './pages/PotionsPage/PotionsPage';
import RacesPage from './pages/RacesPage/RacesPage';
import RangerPage from './pages/RangerPage/RangerPage';
import SignupPage from './pages/SignupPage/SignupPage';
import WarriorPage from './pages/WarriorPage/WarriorPage';
import WeaponPage from './pages/WeaponsPage/WeaponsPage';

function App() {
    const [user, setUser] = useState<User | null>();

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [isServerOnline, setIsServerOnline] = useState(true);

    // Entities states
    const [characters, setCharacters] = useState<Character[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);
    const [armors, setArmors] = useState<Armor[]>([]);
    const [weapons, setWeapons] = useState<Weapon[]>([]);
    const [potions, setPotions] = useState<Potion[]>([]);

    useEffect(() => {
        window.addEventListener('online', () => setIsOnline(true));
        window.addEventListener('offline', () => setIsOnline(false));

        return () => {
            window.removeEventListener('online', () => setIsOnline(true));
            window.removeEventListener('offline', () => setIsOnline(false));
        };
    }, []);

    axiosRetry(axios, {retries: 3});

    useEffect(() => {}, [isServerOnline]);

    const addPlayer = (newPlayer: Player) => {
        setPlayers((prevState: Player[]) => [...prevState, newPlayer]);
    };

    const removePlayer = (playerId: string) => {
        setPlayers((prevState: Player[]) =>
            prevState.filter((player: Player) => player.getId() !== playerId),
        );
    };

    const addCharacter = (newCharacter: Character) => {
        setCharacters((prevState: Character[]) => [...prevState, newCharacter]);
    };

    const removeCharacter = (characterId: string) => {
        setCharacters((prevState: Character[]) =>
            prevState.filter(
                (character: Character) => character.getId() !== characterId,
            ),
        );
    };

    const addArmor = (newArmor: Armor) => {
        setArmors((prevState: Armor[]) => [...prevState, newArmor]);
    };

    const removeArmor = (armorId: string) => {
        setArmors((prevState: Armor[]) =>
            prevState.filter((armor: Armor) => armor.getId() !== armorId),
        );
    };

    const addWeapon = (newWeapon: Weapon) => {
        setWeapons((prevState: Weapon[]) => [...prevState, newWeapon]);
    };

    const removeWeapon = (weaponId: string) => {
        setWeapons((prevState: Weapon[]) =>
            prevState.filter((weapon: Weapon) => weapon.getId() !== weaponId),
        );
    };

    const addPotion = (newPotion: Potion) => {
        setPotions((prevState: Potion[]) => [...prevState, newPotion]);
    };

    const removePotion = (potionId: string) => {
        setPotions((prevState: Potion[]) =>
            prevState.filter((potion: Potion) => potion.getId() !== potionId),
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
                    <ArmorsContextProvider
                        armorContext={{
                            armors,
                            addArmor,
                            removeArmor,
                        }}
                    >
                        <WeaponsContextProvider
                            weaponContext={{
                                weapons,
                                addWeapon,
                                removeWeapon,
                            }}
                        >
                            <PotionsContextProvider
                                potionContext={{
                                    potions,
                                    addPotion,
                                    removePotion,
                                }}
                            >
                                <BrowserRouter>
                                    <ConnectionStatus />
                                    <Routes>
                                        <Route
                                            path='/'
                                            element={<HomePage />}
                                        />
                                        <Route
                                            path='/login'
                                            element={<LoginPage />}
                                        />
                                        <Route
                                            path='/signup'
                                            element={<SignupPage />}
                                        />
                                        <Route
                                            path='/players'
                                            element={<PlayersPage />}
                                        />
                                        <Route
                                            path='/addPlayer'
                                            element={<AddPlayerPage />}
                                        />
                                        <Route
                                            path='/guilds'
                                            element={<GuildsPage />}
                                        />
                                        <Route
                                            path='/chat'
                                            element={<ChatPage />}
                                        />
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
                                        <Route
                                            path='/armorShop'
                                            element={<ArmorPage />}
                                        />
                                        <Route
                                            path='/potionShop'
                                            element={<PotionPage />}
                                        />
                                        <Route
                                            path='/weaponShop'
                                            element={<WeaponPage />}
                                        />
                                        <Route
                                            path='/characterClasses'
                                            element={<ClassesPage />}
                                        />
                                        <Route
                                            path='/characterRaces'
                                            element={<RacesPage />}
                                        />
                                        <Route
                                            path='/warriorClass'
                                            element={
                                                user ? (
                                                    <WarriorPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/rangerClass'
                                            element={<RangerPage />}
                                        />
                                        <Route
                                            path='/mageClass'
                                            element={<MagePage />}
                                        />
                                        <Route
                                            path='/fighterClass'
                                            element={<FighterPage />}
                                        />
                                        <Route
                                            path='/arcade'
                                            element={<GamesPage />}
                                        />

                                        <Route
                                            path='*'
                                            element={<NotFoundPage />}
                                        />
                                    </Routes>
                                </BrowserRouter>
                            </PotionsContextProvider>
                        </WeaponsContextProvider>
                    </ArmorsContextProvider>
                </CharactersContextProvider>
            </PlayersContextProvider>
        </UserContextProvider>
    );
}

export default App;

// // SOCKET.IO Used for adding players automatically
// useEffect(() => {
//     //const URL = 'http://localhost:5000';
//     const URL = 'http://3.79.63.224:5000';

//     const socket = io(URL, {transports: ['websocket']});
//     socket.on('player', (fields: any) => {
//         console.log('Received new player from server: ', fields);
//         /*const player = new Player(
//             fields.id,
//             fields.user,
//             fields.nickname,
//             fields.pictureURL,
//         );
//         setPlayers((prevPlayers) => [...prevPlayers, player]);*/
//     });

//     socket.on('connect_error', () => {
//         setIsServerOnline(false);
//     });
// });
