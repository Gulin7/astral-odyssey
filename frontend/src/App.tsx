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

// let player1: Player = new Player(1, 'suciub', 'sbbogdy', 'profile-1.png');
// let player2: Player = new Player(
//     2,
//     'danutgolut',
//     'xXDanFTWXx',
//     'profile-2.png',
// );
// let player3: Player = new Player(
//     3,
//     'tudorgulin',
//     'ClasTreyler27',
//     'profile-3.png',
// );
// let player4: Player = new Player(
//     4,
//     'nimrod2003',
//     'NimrodTheGoat',
//     'profile-4.png',
// );

let character1: Character = new Character(
    1,
    'gabitzuMircea',
    'Warrior',
    'RasaMatii',
    1,
);

let character2: Character = new Character(2, 'DanutGolut', 'Mage', 'Dwarf', 2);

let character3: Character = new Character(
    3,
    'NinjaNarcis',
    'Fighter',
    'Human',
    3,
);

let character4: Character = new Character(
    4,
    'NimrodTheGoat',
    'Ranger',
    'Elf',
    4,
);

let character5: Character = new Character(
    5,
    'DanutVoinicut',
    'Warrior',
    'Dwarf',
    2,
);

let character6: Character = new Character(
    6,
    'gabiTheLTaker',
    'Ranger',
    'Human',
    1,
);

let character7: Character = new Character(7, 'ErikGod', 'Fighter', 'Human', 3);

let character8: Character = new Character(8, 'GuguTheGoat', 'Mage', 'Elf', 4);

function App() {
    // let [players, setPlayers] = useState<Player[]>([
    //     player1,
    //     player2,
    //     player3,
    //     player4,
    // ]);

    let [characters, setCharacters] = useState<Character[]>([
        character1,
        character2,
        character3,
        character4,
        character5,
        character6,
        character7,
        character8,
    ]);

    const [players, setPlayers] = useState<Player[]>([]);

    const fetchDevices = async () => {
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
                console.log('My data is: ');
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error fetching players: ', error);
            });
    };

    useEffect(() => {
        fetchDevices();
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
