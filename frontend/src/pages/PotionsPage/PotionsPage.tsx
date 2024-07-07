import axios from 'axios';
import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {PotionsContext} from '../../contexts/PotionsContext';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Potion from '../../models/Potion';
import './PotionsPage.css';

const PotionsPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    });

    const [potions, setPotions] = useState<Potion[]>([]);
    const potionsContext = useContext(PotionsContext)!;

    const fetchPotions = async () => {
        const URL = 'http://localhost:5000/api/armors';
        // const URL = 'http://3.79.63.224:5000/api/potions';
        const path = 'src/assets/potions/';
        await axios
            .get(URL)
            .then((response) => {
                const fetchedPotions = response.data.map(
                    (potion: any) =>
                        new Potion(
                            potion.id,
                            potion.itemName,
                            potion.itemRarity,
                            potion.itemDescription,
                            potion.itemPrice,
                            path + potion.ItemName,
                        ),
                );
                setPotions(fetchedPotions);
            })
            .catch((error) => {
                console.error('Error fetching potions: ', error);
            });
    };

    useEffect(() => {
        fetchPotions();
    }, []);

    document.title = 'Astral Odyssey | Potions Shop';
    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Potion Shop</h2>
                    <div className='main-description'>
                        This is the Potions shop where you can buy different
                        potions for your character.
                        <div
                            className='potions-list'
                            data-testid='potions-list-test-id'
                        ></div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default PotionsPage;
