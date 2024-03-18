import {useContext} from 'react';
import {PlayersContext} from '../../contexts/PlayersContext';
import PlayerCard from '../../features/PlayerCard/PlayerCard';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import {Player} from '../../models/Player';
import './PlayersPage.css';

const PlayersPage = () => {
    document.title = 'Astral Odyssey | Players';

    const playersContext = useContext(PlayersContext)!;

    const layoutTitle: string = 'Players';

    let playersArray: Player[] = playersContext.players;
    const removePlayer = playersContext.removePlayer;

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>{layoutTitle}</h2>
                    <div className='main-description'>
                        Here you can see all the players.
                    </div>
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
        </MainLayout>
    );
};

export default PlayersPage;
