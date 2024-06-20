import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {WeaponCardPropsType} from '../../utils/types/WeaponCardProps.types';
import './WeaponCard.css';

const WeaponCard = ({givenWeapon, removeWeapon}: WeaponCardPropsType) => {
    let path: string = 'src/assets/weapons/' + givenWeapon.getSkinUrl();

    const navigate = useNavigate();

    const editWeapon = () => {
        navigate('/editWeapon/' + givenWeapon.getId());
    };

    const removeWeaponFunction = (e: any) => {
        e.stopPropagation();
        removeWeapon(givenWeapon.getId());

        axios
            .delete(`http://localhost:8080/weapons/${givenWeapon.getId()}`)
            .then((response) => {
                console.log('Weapon removed');
                console.log(response.data);
            })
            .catch((error) => {
                console.error('Error removing weapon: ', error);
            });
    };
    return (
        <div
            className='weapon-card'
            data-testid='weapon-card-test-id'
            onClick={editWeapon}
        >
            <div className='weapon-image'>
                <img src={path} alt={givenWeapon.getItemName()} />
            </div>
            <div className='card-info'>
                <div className='weapon-id'>ID: {givenWeapon.getId()}</div>

                <div className='weapon-name'>
                    Name: {givenWeapon.getItemName()}
                </div>
                <div className='weapon-primarystat'>
                    Defense: {givenWeapon.getPrimaryStat()}
                </div>
                <div className='weapon-rarity'>
                    Rarity: {givenWeapon.getItemRarity()}
                </div>
                <div className='weapon-price'>
                    Price: {givenWeapon.getItemPrice()}
                </div>
            </div>
            <Button
                type='button'
                buttonText='Remove armor'
                className='button-light remove-button'
                onClick={removeWeaponFunction}
            ></Button>
        </div>
    );
};

export default WeaponCard;
