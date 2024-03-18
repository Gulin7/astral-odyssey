import {useNavigate} from 'react-router-dom';
import {CharacterCardPropsType} from '../../utils/types/CharacterCardProps.types';
import Button from '../Button/Button';
import './CharacterCard.css';

const CharacterCard = ({
    givenCharacter,
    removeCharacter,
}: CharacterCardPropsType) => {
    let path: string = 'src/assets/' + givenCharacter.getSkinUrl();

    const navigate = useNavigate();

    const editCharacter = () => {
        navigate('/editCharacter/' + givenCharacter.getId());
    };

    const removeCharacterFunction = (e: any) => {
        e.stopPropagation();
        removeCharacter(givenCharacter.getId());
    };
    return (
        <div className='card'>
            <h2 className='character-name'>Name: {givenCharacter.getName()}</h2>
            <img src={path} alt={givenCharacter.getName()} className='skin' />
            <div className='card-info'>
                <div className='character-class'>
                    Class: {givenCharacter.getCharClass()}
                </div>
                <div className='character-race'>
                    Race: {givenCharacter.getRace()}
                </div>
                <div className='character-id'>ID: {givenCharacter.getId()}</div>
                <div className='character-player-id'>
                    Player ID: {givenCharacter.getPlayerId()}
                </div>
                <div className='character-level'>
                    Level: {givenCharacter.getLevel()}
                </div>
            </div>
            <Button
                type='button'
                buttonText='Remove character'
                className='button-light remove-button'
                onClick={removeCharacterFunction}
                data-testid='remove-button-id'
            ></Button>
        </div>
    );
};

export default CharacterCard;
