import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './WarriorPage.css';

const WarriorPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    const goToClasses = () => {
        navigate('/characterClasses');
    };

    let path: string = 'src/assets/skins/warrior-default.png';

    return (
        <MainLayout>
            <div className='class-page-container'>
                <img
                    onClick={goToClasses}
                    className='class-page-image'
                    src={path}
                    alt='mage'
                ></img>
                <div className='class-page-content'>
                    <div className='class-page-underline'></div>
                    <h1 className='class-page-title'>Warrior</h1>
                    <div className='class-page-description'>
                        The warrior is a melee class that uses swords and
                        shields to protect themselves and their allies. They are
                        known for their high health and defense.
                    </div>
                    <div className='class-page-stats'>
                        <div className='stats-deco'></div>
                        <div className='stats-text'>Stats</div>
                        <div className='stats-case'>
                            <div className='stats1'>
                                <li>HP</li>
                                <li>STR</li>
                                <li>SPD</li>
                            </div>
                            <div className='stats1-info'>
                                <li>300</li>
                                <li>12</li>
                                <li>6</li>
                            </div>
                            <div className='stats2'>
                                <li>MP</li>
                                <li>DEF</li>
                                <li>INT</li>
                            </div>
                            <div className='stats2-info'>
                                <li>100</li>
                                <li>18</li>
                                <li>4</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default WarriorPage;
