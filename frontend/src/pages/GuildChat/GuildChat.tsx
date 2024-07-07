import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';

const GuildChat = () => {
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
                    <h2 className='main-title'>Guild chat</h2>
                    <div
                        className='main-description'
                        data-testid='home-description-test-id'
                    >
                        Guild chat is a place where you can talk to other
                        members of your guild.
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default GuildChat;
