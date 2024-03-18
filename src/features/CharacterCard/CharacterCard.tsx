import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {CharacterCardPropsType} from '../../utils/types/CharacterCardProps.types';
import './CharacterCard.css';

const CharacterCard = ({
    givenCharacter,
    removeCharacter,
}: CharacterCardPropsType) => {
    let path: string = 'src/assets/skins/' + givenCharacter.getSkinUrl();

    const navigate = useNavigate();

    const editCharacter = () => {
        navigate('/editCharacter/' + givenCharacter.getId());
    };

    const removeCharacterFunction = (e: any) => {
        e.stopPropagation();
        removeCharacter(givenCharacter.getId());
    };
    return (
        <div
            className='character-card'
            data-testid='character-card-test-id'
            onClick={editCharacter}
        >
            <div className='character-image'>
                <img src={path} alt={givenCharacter.getName()} />
            </div>
            <div className='card-info'>
                <div className='character-name'>
                    Name: {givenCharacter.getName()}
                </div>
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
            ></Button>
        </div>
    );
};

export default CharacterCard;
