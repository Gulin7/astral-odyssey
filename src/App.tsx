import {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import {PlayersContextProvider} from './contexts/PlayersContext';
import {Player} from './models/Player';
import PlayerProfilePage from './pages/PlayerProfilePage/PlayerProfilePage';
import PlayersPage from './pages/PlayersPage/PlayersPage';

let player1: Player = new Player(1, 'gulintudor', 'MareBarosSan', 'player.jpg');
let player2: Player = new Player(2, 'danutgolut', 'xXxDanFTWxXx', 'player.jpg');

function App() {
    let [players, setPlayers] = useState<Player[]>([player1, player2]);

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
                    <Route path='/' element={<PlayersPage />} />
                    <Route path='/addPlayer' element={<PlayersPage />} />
                    <Route
                        path='/playerProfile/:playerId'
                        element={<PlayerProfilePage />}
                    />
                </Routes>
            </BrowserRouter>
        </PlayersContextProvider>
    );
}

export default App;
