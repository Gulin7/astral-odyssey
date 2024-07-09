import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MinesweeperBoard from '../../components/MinesweeperBoard/MinesweeperBoard';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './MinesweeperPage.css';

const RockPaperScissorsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    });
    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Minesweeper</h2>
                    <div
                        className='main-description'
                        data-testid='home-description-test-id'
                    >
                        Minesweeper clone
                    </div>
                    <div className='minesweeper'>
                        <MinesweeperBoard />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default RockPaperScissorsPage;
