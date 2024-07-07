import axios from 'axios';
import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';

const ChatPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    const [chats, setChats] = useState([]);

    const fetchChats = async () => {
        const {data} = await axios.get('/api/chats');

        setChats(data);
    };

    useEffect(() => {
        fetchChats();
    }, []);

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Welcome to Astral Odyssey!</h2>
                    <div
                        className='main-description'
                        data-testid='home-description-test-id'
                    >
                        Here you can see all of your chats and messages.
                    </div>
                    {chats.map((chat: Chat) => (
                        <div>{chat.getChatName()}</div>
                    ))}
                </div>
            </div>
        </MainLayout>
    );
};

export default ChatPage;
