import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {PlayersContext} from '../../contexts/PlayersContext';
import PlayerCard from '../../features/PlayerCard/PlayerCard';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import {Player} from '../../models/Player';
import './PlayersPage.css';

const PlayersPage = () => {
    const navigate = useNavigate();

    document.title = 'Astral Odyssey | Players';

    const playersContext = useContext(PlayersContext)!;

    const layoutTitle: string = 'Players';

    let playersArray: Player[] = playersContext.players;
    const removePlayer = playersContext.removePlayer;

    const [numToShow, setNumToShow] = useState(3);

    const handleShowMore = () => {
        setNumToShow((prevNum) => prevNum + 3);
    };

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>{layoutTitle}</h2>
                    <div className='main-description'>
                        Here you can see all the players.
                    </div>

                    <div
                        className='players-list'
                        data-testid='players-list-test-id'
                    >
                        {playersArray
                            .slice(0, numToShow)
                            .map((player: Player) => (
                                <PlayerCard
                                    givenPlayer={player}
                                    removePlayer={removePlayer}
                                    key={player.getId()}
                                />
                            ))}
                    </div>
                    <div className='pagination'>
                        <div>
                            Showing {Math.min(numToShow, playersArray.length)}{' '}
                            out of {playersArray.length} players
                        </div>
                        <Button
                            type='button'
                            buttonText='Show More'
                            onClick={handleShowMore}
                            className='button-dark'
                        ></Button>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PlayersPage;
