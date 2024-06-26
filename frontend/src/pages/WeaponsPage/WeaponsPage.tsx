import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './WeaponsPage.css';

const WeaponsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    document.title = 'WeaponsPage';
    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Weapon Shop</h2>
                    <div className='main-description'>
                        This is the Weapon shop where you can buy different
                        weapons for your character.
                        <div
                            className='weapons-list'
                            data-testid='weapons-list-test-id'
                        ></div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default WeaponsPage;
