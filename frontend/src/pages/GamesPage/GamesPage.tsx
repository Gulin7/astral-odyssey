import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './GamesPage.css';

import twoZeroFourEightImage from '../../assets/games/2048.png';
import hangmanImage from '../../assets/games/hangman.png';

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

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h1 className='main-title pokemon-title'>
                        Astral Odyssey Arcade
                    </h1>
                    <div className='main-descriptionr'>
                        Welcome to Astral Odyssey Arcade! Here you can play a
                        variety of games to earn coins and have fun. Good luck!
                    </div>
                    <div className='arcade-container'>
                        <div
                            className='game-container'
                            onClick={navigateToHangman}
                        >
                            <img src={hangmanImage} alt=''></img>
                        </div>
                        <div
                            className='game-container'
                            onClick={navigateToTwoZeroFourEight}
                        >
                            <img src={twoZeroFourEightImage} alt=''></img>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default GamesPage;
