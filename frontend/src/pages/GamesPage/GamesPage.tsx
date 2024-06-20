import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './GamesPage.css';

const FighterPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    const goToPokemonArcade = () => {
        navigate('/pokemonArcade');
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
                        <div id='pokemon-arcade'>
                            <button onClick={goToPokemonArcade}>
                                {' '}
                                Pokemon Arcade
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default FighterPage;
