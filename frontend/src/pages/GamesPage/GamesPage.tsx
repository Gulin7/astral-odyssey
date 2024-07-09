import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './GamesPage.css';

import twoZeroFourEightImage from '../../assets/games/2048.png';
import coinflipImage from '../../assets/games/coinflip.png';
import hangmanImage from '../../assets/games/hangman.png';
import minesweeperImage from '../../assets/games/minesweeper.png';
import rpsImage from '../../assets/games/rps.png';
import ticTacToeImage from '../../assets/games/tictactoe.png';

const GamesPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    });

    const path: string = '../../assets/games/';

    const navigateToHangman = () => {
        navigate('/hangman');
    };

    const navigateToTwoZeroFourEight = () => {
        navigate('/2048');
    };

    function navigateToTicTacToe() {
        navigate('/tictactoe');
    }

    const navigateToRPS = () => {
        navigate('/rps');
    };

    const navigateToMinesweeper = () => {
        navigate('/minesweeper');
    };

    const navigateToCoinflip = () => {
        navigate('/coinflip');
    };

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h1 className='main-title'>Astral Odyssey Arcade</h1>
                    <div className='main-descriptionr'>
                        Welcome to Astral Odyssey Arcade! Here you can play a
                        variety of games to earn coins and have fun. Good luck!
                    </div>
                    <div className='arcade-container'>
                        <div
                            className='game-container'
                            onClick={navigateToHangman}
                            id='hangman-game-image'
                        >
                            <img src={hangmanImage} alt=''></img>
                        </div>
                        <div
                            className='game-container'
                            onClick={navigateToTwoZeroFourEight}
                            id='2048-game-image'
                        >
                            <img src={twoZeroFourEightImage} alt=''></img>
                        </div>
                        <div
                            className='game-container'
                            onClick={navigateToTicTacToe}
                            id='tictactoe-game-image'
                        >
                            <img src={ticTacToeImage} alt=''></img>
                        </div>
                        <div className='game-container' onClick={navigateToRPS}>
                            <img
                                src={rpsImage}
                                alt=''
                                id='rps-game-image'
                            ></img>
                        </div>
                        <div
                            className='game-container'
                            onClick={navigateToMinesweeper}
                        >
                            <img
                                src={minesweeperImage}
                                alt=''
                                id='minesweeper-game-image'
                            ></img>
                        </div>
                        <div
                            className='game-container'
                            onClick={navigateToCoinflip}
                        >
                            <img
                                src={coinflipImage}
                                alt=''
                                id='coinflip-game-image'
                            ></img>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default GamesPage;
