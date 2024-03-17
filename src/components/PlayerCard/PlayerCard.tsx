import {useNavigate} from 'react-router-dom';
import {PlayerCardPropsType} from '../../utils/types/PlayerCardProps.types';
import './PlayerCard.css';

const PlayerCard = ({givenPlayer, removePlayer}: PlayerCardPropsType) => {
    let path: string = 'assets/' + givenPlayer.getPictureUrl();

    const navigate = useNavigate();

    const playerProfile = () => {
        navigate('/playerProfile' + givenPlayer.getId());
    };

    const removePlayerFunction = (e: any) => {
        e.stopPropagation();
        removePlayer(givenPlayer.getId());
    };

    return (
        <div
            className='plater-card'
            data-testid='player-card-it'
            onClick={playerProfile}
        >
            <button
                className='remove-button'
                onClick={removePlayerFunction}
                data-testid='remove-button-id'
            >
                Remove player
            </button>
            <div className='player-card' data-testid='player-card-id'>
                <div className='player-image'>
                    <img src={path} alt={givenPlayer.getUsername()} />
                </div>
                <div className='player-info'>
                    <div className='user-username'>
                        UserName: {givenPlayer.getUsername()}
                    </div>
                    <div className='player-nickname'>
                        NickName: {givenPlayer.getNickname()}
                    </div>
                    <div className='player-id'>Id: {givenPlayer.getId()}d</div>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
