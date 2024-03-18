import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {CharactersContextProvider} from './contexts/CharactersContext';
import {PlayersContextProvider} from './contexts/PlayersContext';
import Character from './models/Character';
import {Player} from './models/Player';
import AddCharacterPage from './pages/AddCharacterPage/AddCharacterPage';
import AddPlayerPage from './pages/AddPlayerPage/AddPlayerPage';
import ArmorPage from './pages/ArmorPage/ArmorPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import EditCharacterPage from './pages/EditCharacterPage/EditCharacterPage';
import EditPlayerPage from './pages/EditPlayerPage/EditPlayerPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import PlayersPage from './pages/PlayersPage/PlayersPage';
import PotionPage from './pages/PotionPage/PotionPage';
import WeaponPage from './pages/WeaponPage/WeaponPage';

let player1: Player = new Player(1, 'suciub', 'sbbogdy', 'profile-1.png');
let player2: Player = new Player(
    2,
    'danutgolut',
    'xXDanFTWXx',
    'profile-2.png',
);
let player3: Player = new Player(
    3,
    'tudorgulin',
    'ClasTreyler27',
    'profile-3.png',
);

function App() {
    let [players, setPlayers] = useState<Player[]>([player1, player2, player3]);

    let [characters, setCharacters] = useState<Character[]>([]);

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
