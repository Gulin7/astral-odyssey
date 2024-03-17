import './CharacterCard.css';

const CharacterCard = (
    {id}: {id: number},
    {name}: {name: string},
    {charClass}: {charClass: string},
    {race}: {race: string},
    {skinUrl}: {skinUrl: string},
) => {
    return (
        <div className='card'>
            <h2 className='character-name'>Name: {name}</h2>
            <img src={skinUrl} alt={name} className='skin' />
            <div className='card-info'>
                <div className='character-class'>Class: {charClass}</div>
                <div className='character-race'>Race: {race}</div>
                <div className='character-id'>ID: {id}</div>
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
