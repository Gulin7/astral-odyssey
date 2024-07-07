import Messages from '../Messages/Messages';
import './MessageContainer.css';

const MessageContainer = () => {
    return (
        <div className='message-container'>
            <div className='message-header'></div>
            <Messages />
        </div>
    );
};

export default MessageContainer;
