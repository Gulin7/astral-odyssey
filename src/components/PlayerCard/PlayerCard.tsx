import {useNavigate} from 'react-router-dom';
import {PlayerCardPropsType} from '../../utils/types/PlayerCardProps.types';
import Button from '../Button/Button';
import './PlayerCard.css';

const PlayerCard = ({givenPlayer, removePlayer}: PlayerCardPropsType) => {
    let path: string = 'src/assets/' + givenPlayer.getPictureUrl();

    const navigate = useNavigate();

    const editPlayer = () => {
        navigate('/editPlayer/' + givenPlayer.getId());
    };

    const removePlayerFunction = (e: any) => {
        e.stopPropagation();
        removePlayer(givenPlayer.getId());
    };

    return (
        <div
            className='player-card'
            data-testid='player-card-it'
            onClick={editPlayer}
        >
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
                <div className='player-id'>Id: {givenPlayer.getId()}</div>
            </div>
            <Button
                type='button'
                buttonText='Remove player'
                className='button-light remove-button'
                onClick={removePlayerFunction}
                data-testid='remove-button-id'
            ></Button>
        </div>
    );
};

export default PlayerCard;
