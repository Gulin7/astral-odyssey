import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {PotionCardPropsType} from '../../utils/types/PotionCardProps.types';
import './ArmorCard.css';

const PotionCard = ({givenPotion, removePotion}: PotionCardPropsType) => {
    let path: string = 'src/assets/potions/' + givenPotion.getSkinUrl();

    const navigate = useNavigate();

    const editPotion = () => {
        navigate('/editPotion/' + givenPotion.getId());
    };

    const removePotionFunction = (e: any) => {
        e.stopPropagation();
        removePotion(givenPotion.getId());

        axios
            .delete(`http://localhost:8080/potions/${givenPotion.getId()}`)
            .then((response) => {
                console.log('Potion removed');
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error removing potion: ', error);
            });
    };
    return (
        <div
            className='potion-card'
            data-testid='potion-card-test-id'
            onClick={editPotion}
        >
            <div className='potion-image'>
                <img src={path} alt={givenPotion.getItemName()} />
            </div>
            <div className='card-info'>
                <div className='potion-id'>ID: {givenPotion.getId()}</div>

                <div className='potion-name'>
                    Name: {givenPotion.getItemName()}
                </div>
                <div className='potion-rarity'>
                    Rarity: {givenPotion.getItemRarity()}
                </div>
                <div className='potion-price'>
                    Price: {givenPotion.getItemPrice()}
                </div>
            </div>
            <Button
                type='button'
                buttonText='Remove potion'
                className='button-light remove-button'
                onClick={removePotionFunction}
            ></Button>
        </div>
    );
};

export default PotionCard;
