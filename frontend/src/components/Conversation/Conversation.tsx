import {Player} from '../../models/Player';
import './Conversation.css';

const Conversation = (props: Player) => {
    return (
        <div className='conversation-container'>
            <div className='conversation-avatar'>
                <img src='' alt='Player profile picture'></img>
            </div>
            <div className='conversation-name'>
                <span></span>
            </div>
        </div>
    );
};

export default Conversation;
