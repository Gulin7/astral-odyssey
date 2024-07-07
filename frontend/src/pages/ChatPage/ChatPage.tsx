import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MessageContainer from '../../components/MessageContainer/MessageContainer';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainLayout from '../../layouts/mainLayout/MainLayout';

const ChatPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    });

    // const [chats, setChats] = useState([]);

    // const fetchChats = async () => {
    //     const {data} = await axios.get('/api/chats');

    //     setChats(data);
    // };

    // useEffect(() => {
    //     fetchChats();
    // }, []);

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
                    <div className='chat-container'>
                        <Sidebar />
                        <MessageContainer />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ChatPage;
