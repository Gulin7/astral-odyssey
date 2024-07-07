import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {WeaponsContext} from '../../contexts/WeaponsContext';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Armor from '../../models/Armor';
import Weapon from '../../models/Weapon';
import './WeaponsPage.css';

const WeaponsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    });

    const [weapons, setWeapons] = useState<Weapon[]>([]);
    const weaponsContext = useContext(WeaponsContext)!;

    const fetchWeapons = async () => {
        const URL = 'http://localhost:5000/api/weapons';
        // const URL = 'http://3.79.63.224:5000/api/weapons';
        const path = 'src/assets/weapons/';
        await axios
            .get(URL)
            .then((response) => {
                const fetchedWeapons = response.data.map(
                    (weapon: any) =>
                        new Armor(
                            weapon.id,
                            weapon.itemName,
                            weapon.primaryStat,
                            weapon.itemRarity,
                            weapon.classes,
                            weapon.itemDescription,
                            weapon.itemPrice,
                            path + weapon.ItemName,
                        ),
                );
                setWeapons(fetchedWeapons);
            })
            .catch((error) => {
                console.error('Error fetching weapons: ', error);
            });
    };

    useEffect(() => {
        fetchWeapons();
    }, []);

    document.title = 'WeaponsPage';
    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Weapon Shop</h2>
                    <div className='main-description'>
                        This is the Weapon shop where you can buy different
                        weapons for your character.
                        <div
                            className='weapons-list'
                            data-testid='weapons-list-test-id'
                        ></div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default WeaponsPage;
