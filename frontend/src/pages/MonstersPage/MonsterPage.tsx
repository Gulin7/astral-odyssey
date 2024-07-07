import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';

const MonsterPage = () => {
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
                    <h2 className='main-title'>Monsters</h2>
                    <div
                        className='main-description'
                        data-testid='home-description-test-id'
                    >
                        Monsters are magical creatures that you can fight to
                        gain experience and other rewards.
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default MonsterPage;
