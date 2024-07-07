import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './GuildsPage.css';

const GuildsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Guilds</h2>
                    <div
                        className='main-description'
                        data-testid='home-description-test-id'
                    >
                        Here is a list of guilds you can join.
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default GuildsPage;
