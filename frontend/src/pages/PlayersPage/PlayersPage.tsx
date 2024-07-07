import axios from 'axios';
import axiosRetry from 'axios-retry';
import React, {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {PlayersContext} from '../../contexts/PlayersContext';
import PlayerCard from '../../features/PlayerCard/PlayerCard';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import {Player} from '../../models/Player';
import './PlayersPage.css';

const PlayersPage = () => {
    axiosRetry(axios, {retries: 3});

    const navigate = useNavigate();

    const [players, setPlayers] = useState<Player[]>([]);

    document.title = 'Astral Odyssey | Players';

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    });

    const playersContext = useContext(PlayersContext)!;

    const fetchPlayers = async () => {
        const URL = `http://localhost:5000/api/players?page=${page}`;
        // const URL = `http://3.79.63.224:5000/api/players?page=${page}`;

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
                            player.id,
                            player.user,
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
                            player.user,
                            player.nickname,
                            player.pictureURL,
                        ),
                );
                setPlayers(players);
            });
    };

    const layoutTitle: string = 'Players';

    let playersArray: Player[] = playersContext.players;
    const removePlayer = playersContext.removePlayer;

    const [numToShow, setNumToShow] = useState(1);

    const handleShowMore = () => {
        setNumToShow((prevNum) => prevNum + 5);
    };

    const [page, setPage] = useState<number>(1);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollBottom =
                document.documentElement.scrollHeight -
                (window.innerHeight + window.scrollY);
            if (scrollBottom < 100 && !isLoading) {
                loadMoreData();
            }
        };

        const debounce = (func: any, delay: number) => {
            let timer: ReturnType<typeof setTimeout>;
            return function (this: any) {
                const context = this;
                const args = arguments;
                clearTimeout(timer);
                timer = setTimeout(() => {
                    func.apply(context, args);
                }, delay);
            };
        };

        const debouncedScrollHandler = debounce(handleScroll, 1000);

        window.addEventListener('scroll', debouncedScrollHandler);
        return () => {
            window.removeEventListener('scroll', debouncedScrollHandler);
        };
    }, [isLoading]);

    const [fetchedPlayersIds, setfetchedPlayersIds] = React.useState<string[]>(
        [],
    );

    const loadMoreData = async () => {
        setIsLoading(true);
        try {
            const nextPage = page + 1;

            const URL = `http://localhost:5000/api/players?page=${nextPage}`;
            // const URL = `http://3.79.63.224:5000/api/players?page=${nextPage}`;

            axios({
                method: 'GET',
                url: URL,
                data: nextPage,
            })
                //.get(`http://localhost:5000/api/players?page=${nextPage}`)
                .then((response) => {
                    console.log('Next page of cars fetched: ', response.data);

                    const newPlayers = response.data.map((player: any) => {
                        return new Player(
                            player.id,
                            player.userId,
                            player.nickname,
                            player.pictureURL,
                        );
                    });

                    const filteredNewPlayers = newPlayers.filter(
                        (newPlayer: Player) =>
                            !fetchedPlayersIds.includes(newPlayer.getId()),
                    );

                    setfetchedPlayersIds([
                        ...fetchedPlayersIds,
                        ...filteredNewPlayers.map((newPlayer: Player) =>
                            newPlayer.getId(),
                        ),
                    ]);

                    filteredNewPlayers.forEach((newPlayer: Player) => {
                        playersContext.addPlayer(newPlayer);
                    });

                    setPage(nextPage);
                })
                .catch((error) => {
                    console.log('Error fetching next page of cars: ', error);
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } catch (error) {
            console.log('Error fetching next page of cars: ', error);
        }
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
                        {playersArray.map((player: Player) => (
                            <PlayerCard
                                givenPlayer={player}
                                removePlayer={removePlayer}
                                key={player.getId()}
                            />
                        ))}
                    </div>

                    {/* <InfiniteScroll
                        dataLength={playersArray.length} //This is important field to render       the next data
                        next={fetchMoreData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={
                            <p style={{textAlign: 'center'}}>
                                <b>Yay! You have seen it all</b>
                            </p>
                        }
                    >
                    </InfiniteScroll> */}

                    {/* <div className='pagination'>
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
                    </div> */}
                </div>
            </div>
        </MainLayout>
    );
};

export default PlayersPage;
