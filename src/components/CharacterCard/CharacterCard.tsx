import {CharacterCardProps} from '../../utils/types/CharacterCardProps.types';
import './CharacterCard.css';

const CharacterCard = (prosp: CharacterCardProps) => {
    return (
        <div className='card'>
            <h2 className='character-name'>Name: {prosp.name}</h2>
            <img src={prosp.skinUrl} alt={prosp.name} className='skin' />
            <div className='card-info'>
                <div className='character-class'>Class: {prosp.charClass}</div>
                <div className='character-race'>Race: {prosp.race}</div>
                <div className='character-id'>ID: {prosp.id}</div>
            </div>
            <button
                className='button-delete'
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                Detele character
            </button>
        </div>
    );
};

export default CharacterCard;
