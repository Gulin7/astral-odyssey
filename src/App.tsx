import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {PlayersContextProvider} from './contexts/PlayersContext';
import {Player} from './models/Player';
import AddCharacterPage from './pages/AddCharacterPage/AddCharacterPage';
import AddPlayerPage from './pages/AddPlayerPage/AddPlayerPage';
import ArmorPage from './pages/ArmorPage/ArmorPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
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

    const addPlayer = (newPlayer: Player) => {
        setPlayers((prevState: Player[]) => [...prevState, newPlayer]);
    };

    const removePlayer = (playerId: number) => {
        setPlayers((prevState: Player[]) =>
            prevState.filter((player: Player) => player.getId() !== playerId),
        );
    };

    return (
        <PlayersContextProvider
            playerContext={{players, addPlayer, removePlayer}}
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/players' element={<PlayersPage />} />
                    <Route path='/characters' element={<CharactersPage />} />
                    <Route
                        path='/addCharacter'
                        element={<AddCharacterPage />}
                    />
                    <Route path='/addPlayer' element={<AddPlayerPage />} />
                    <Route
                        path='/editPlayer/:playerId'
                        element={<EditPlayerPage />}
                    />
                    <Route path='/armorShop' element={<ArmorPage />} />
                    <Route path='/potionShop' element={<PotionPage />} />
                    <Route path='/weaponShop' element={<WeaponPage />} />
                    <Route path='*' element={<NotFoundPage />} />
                </Routes>
            </BrowserRouter>
        </PlayersContextProvider>
    );
}

export default App;
