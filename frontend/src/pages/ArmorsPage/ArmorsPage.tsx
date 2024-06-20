import {useContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {ArmorsContext} from '../../contexts/ArmorsContext';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import Armor from '../../models/Armor';
import './ArmorsPage.css';

const ArmorsPage = () => {
    const navigate = useNavigate();

    document.title = 'Astral Odyssey | Armors';

    const armorsContext = useContext(ArmorsContext)!;

    const layoutTitle: string = 'Armors';

    const removeArmor = armorsContext.removeArmor;

    const armorsArray: Armor[] = armorsContext.armors;

    const [armors, setArmors] = useState<Armor[]>([]);

    const [sortedByRarity, setSortedByRarity] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    // Console useEffect for armors
    useEffect(() => {
        console.log(armors);
    }, [armors]);

    // Sorted useEffect
    useEffect(() => {
        let sorted;
        if (sortedByRarity) {
            sorted = [...armors].sort((a, b) =>
                a.getItemRarity().toLowerCase() >
                b.getItemRarity().toLowerCase()
                    ? 1
                    : -1,
            );
        } else {
            sorted = [...armors].sort((a, b) =>
                a.getItemRarity().toLowerCase() <
                b.getItemRarity().toLowerCase()
                    ? 1
                    : -1,
            );
        }

        setArmors(sorted);
    }, [sortedByRarity]);

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Armor Shop</h2>
                    <div className='main-description'>
                        This is the Armors shop where you can buy different
                        armors for your character.
                        <div
                            className='armors-list'
                            data-testid='armors-list-test-id'
                        ></div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ArmorsPage;
