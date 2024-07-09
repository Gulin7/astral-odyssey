import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import BoardView from '../../components/BoardView/BoardView';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './TwoZeroFourEightPage.scss';

const TwoZeroFourEightPage = () => {
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
                    <h2 className='main-title'>2048</h2>

                    <BoardView />
                </div>
            </div>
        </MainLayout>
    );
};

export default TwoZeroFourEightPage;
