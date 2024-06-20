import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {ArmorCardPropsType} from '../../utils/types/ArmorCardProps.types';
import './ArmorCard.css';

const ArmorCard = ({givenArmor, removeArmor}: ArmorCardPropsType) => {
    let path: string = 'src/assets/armors/' + givenArmor.getSkinUrl();

    const navigate = useNavigate();

    const editArmor = () => {
        navigate('/editArmor/' + givenArmor.getId());
    };

    const removeArmorFunction = (e: any) => {
        e.stopPropagation();
        removeArmor(givenArmor.getId());

        axios
            .delete(`http://localhost:8080/armors/${givenArmor.getId()}`)
            .then((response) => {
                console.log('Armor removed');
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error removing armor: ', error);
            });
    };
    return (
        <div
            className='armor-card'
            data-testid='armor-card-test-id'
            onClick={editArmor}
        >
            <div className='armor-image'>
                <img src={path} alt={givenArmor.getItemName()} />
            </div>
            <div className='card-info'>
                <div className='armor-id'>ID: {givenArmor.getId()}</div>

                <div className='armor-name'>
                    Name: {givenArmor.getItemName()}
                </div>
                <div className='armor-primarystat'>
                    Defense: {givenArmor.getPrimaryStat()}
                </div>
                <div className='armor-rarity'>
                    Rarity: {givenArmor.getItemRarity()}
                </div>
                <div className='armor-price'>
                    Price: {givenArmor.getItemPrice()}
                </div>
            </div>
            <Button
                type='button'
                buttonText='Remove armor'
                className='button-light remove-button'
                onClick={removeArmorFunction}
            ></Button>
        </div>
    );
};

export default ArmorCard;
