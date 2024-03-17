import {useContext} from 'react';
import PlayerCard from '../../components/PlayerCard/PlayerCard';
import {PlayersContext} from '../../contexts/PlayersContext';
import {Player} from '../../models/Player';
import './PlayersPage.css';

const PlayersPage = () => {
    document.title = 'Astral Odyssey | Players';

    const playersContext = useContext(PlayersContext)!;

    let playersArray: Player[] = playersContext.players;
    const removePlayer = playersContext.removePlayer;

    return (
        <div>
            <div className='main-page'>
                <div className='main-page-container'>
                    <div className='players-list' data-testid='users-list-id'>
                        {playersArray.map((player: Player) => (
                            <PlayerCard
                                givenPlayer={player}
                                removePlayer={removePlayer}
                                key={player.getId()}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayersPage;
