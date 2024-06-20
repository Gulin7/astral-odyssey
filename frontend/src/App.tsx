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
import ClassesChartPage from './pages/ClassesChartPage/ClassesChartPage';
import ClassesPage from './pages/ClassesPage/ClassesPage';
import EditCharacterPage from './pages/EditCharacterPage/EditCharacterPage';
import EditPlayerPage from './pages/EditPlayerPage/EditPlayerPage';
import FighterPage from './pages/FighterPage/FighterPage';
import GamesPage from './pages/GamesPage/GamesPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MagePage from './pages/MagePage/MagePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PlayersPage from './pages/PlayersPage/PlayersPage';
import PokemonBattlePage from './pages/PokemonBattlePage/PokemonBattlePage';
import PotionPage from './pages/PotionsPage/PotionsPage';
import RacesPage from './pages/RacesPage/RacesPage';
import RangerPage from './pages/RangerPage/RangerPage';
import SignupPage from './pages/SignupPage/SignupPage';
import WarriorPage from './pages/WarriorPage/WarriorPage';
import WeaponPage from './pages/WeaponsPage/WeaponsPage';

function App() {
    const page = 0;

    const [user, setUser] = useState<User>();

    const [isOnline, setIsOnline] = useState(navigator.onLine);
    const [isServerOnline, setIsServerOnline] = useState(true);

    // Entities states
    const [characters, setCharacters] = useState<Character[]>([]);
    const [players, setPlayers] = useState<Player[]>([]);
    const [armors, setArmors] = useState<Armor[]>([]);
    const [weapons, setWeapons] = useState<Weapon[]>([]);
    const [potions, setPotions] = useState<Potion[]>([]);

    // Socket.io for adding players
    // useEffect(() => {
    //     //const URL = 'http://localhost:5000';
    //     const URL = 'http://3.79.63.224:5000';

    //     const socket = io(URL, {transports: ['websocket']});
    //     socket.on('player', (fields: any) => {
    //         console.log('Received new player from server: ', fields);
    //         /*const player = new Player(
    //             fields.id,
    //             fields.userId,
    //             fields.nickname,
    //             fields.pictureURL,
    //         );
    //         setPlayers((prevPlayers) => [...prevPlayers, player]);*/
    //     });

    //     socket.on('connect_error', () => {
    //         setIsServerOnline(false);
    //     });
    // });

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
        // const URL = `http://localhost:5000/api/players?page=${page}`;
        const URL = `http://3.79.63.224:5000/api/players?page=${page}`;

        await axios({
            method: 'GET',
            url: URL,
            data: page,
        })
            //.get(`http://localhost:5000/api/players?page=${page}`)
            .then((response) => {
                const fetchedPlayers = response.data.map(
                    (player: any) =>
                        new Player(
                            // player.id,
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
                            // player.id,
                            player.username,
                            player.nickname,
                            player.pictureURL,
                        ),
                );
                setPlayers(players);
                setIsServerOnline(false);
            });
    };

    const fetchCharacters = async () => {
        //const URL = 'http://localhost:5000/api/characters';
        const URL = 'http://3.79.63.224:5000/api/characters';
        await axios
            .get(URL)
            .then((response) => {
                const fetchedCharacters = response.data.map(
                    (character: any) =>
                        new Character(
                            // character.id,
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

    const fetchArmors = async () => {
        //const URL = 'http://localhost:5000/api/armors';
        const URL = 'http://3.79.63.224:5000/api/armors';

        const path = 'src/assets/armors/';
        await axios
            .get(URL)
            .then((response) => {
                const fetchedArmors = response.data.map(
                    (armor: any) =>
                        new Armor(
                            armor.id,
                            armor.itemName,
                            armor.primaryStat,
                            armor.itemRarity,
                            armor.classes,
                            armor.itemDescription,
                            armor.itemPrice,
                            path + armor.ItemName,
                        ),
                );
                setArmors(fetchedArmors);
            })
            .catch((error) => {
                console.error('Error fetching armors: ', error);
                setIsServerOnline(false);
            });
    };

    const fetchWeapons = async () => {
        //const URL = 'http://localhost:5000/api/weapons';
        const URL = 'http://3.79.63.224:5000/api/weapons';
        const path = 'src/assets/weapons/';
        await axios
            .get(URL)
            .then((response) => {
                const fetchedWeapons = response.data.map(
                    (weapon: any) =>
                        new Armor(
                            weapon.id,
                            weapon.itemName,
                            weapon.primaryStat,
                            weapon.itemRarity,
                            weapon.classes,
                            weapon.itemDescription,
                            weapon.itemPrice,
                            path + weapon.ItemName,
                        ),
                );
                setWeapons(fetchedWeapons);
            })
            .catch((error) => {
                console.error('Error fetching weapons: ', error);
                setIsServerOnline(false);
            });
    };

    const fetchPotions = async () => {
        //const URL = 'http://localhost:5000/api/armors';
        const URL = 'http://3.79.63.224:5000/api/potions';
        const path = 'src/assets/potions/';
        await axios
            .get(URL)
            .then((response) => {
                const fetchedPotions = response.data.map(
                    (potion: any) =>
                        new Armor(
                            potion.id,
                            potion.itemName,
                            potion.primaryStat,
                            potion.itemRarity,
                            potion.classes,
                            potion.itemDescription,
                            potion.itemPrice,
                            path + potion.ItemName,
                        ),
                );
                setPotions(fetchedPotions);
            })
            .catch((error) => {
                console.error('Error fetching potions: ', error);
                setIsServerOnline(false);
            });
    };

    useEffect(() => {
        fetchPlayers();
        fetchCharacters();
        fetchArmors();
        fetchWeapons();
        fetchPotions();
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

    const addArmor = (newArmor: Armor) => {
        setArmors((prevState: Armor[]) => [...prevState, newArmor]);
    };

    const removeArmor = (armorId: number) => {
        setArmors((prevState: Armor[]) =>
            prevState.filter((armor: Armor) => armor.getId() !== armorId),
        );
    };

    const addWeapon = (newWeapon: Weapon) => {
        setWeapons((prevState: Weapon[]) => [...prevState, newWeapon]);
    };

    const removeWeapon = (weaponId: number) => {
        setWeapons((prevState: Weapon[]) =>
            prevState.filter((weapon: Weapon) => weapon.getId() !== weaponId),
        );
    };

    const addPotion = (newPotion: Potion) => {
        setPotions((prevState: Potion[]) => [...prevState, newPotion]);
    };

    const removePotion = (potionId: number) => {
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
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <HomePage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
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
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <PlayersPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/addPlayer'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <AddPlayerPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/editPlayer/:playerId'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <EditPlayerPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/characters'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <CharactersPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/addCharacter'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <AddCharacterPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/editCharacter/:characterId'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <EditCharacterPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/classesChart'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <ClassesChartPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/armorShop'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <ArmorPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/potionShop'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <PotionPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/weaponShop'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <WeaponPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/characterClasses'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <ClassesPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/characterRaces'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <RacesPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/warriorClass'
                                            element={
                                                user && user.getId() > 0 ? (
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
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <RangerPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/mageClass'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <MagePage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/fighterClass'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <FighterPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/arcade'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <GamesPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='/pokemonArcade'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <PokemonBattlePage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
                                        />
                                        <Route
                                            path='*'
                                            element={
                                                user && user.getId() > 0 ? (
                                                    <NotFoundPage />
                                                ) : (
                                                    <Navigate
                                                        to='/login'
                                                        replace
                                                    />
                                                )
                                            }
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
