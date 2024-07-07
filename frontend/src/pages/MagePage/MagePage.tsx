import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './MagePage.css';

const MagePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    });

    const goToClasses = () => {
        navigate('/characterClasses');
    };

    let path: string = 'src/assets/skins/mage-default.png';

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
                    <h1 className='class-page-title'>Mage</h1>
                    <div className='class-page-description'>
                        The mage is a magic class that uses spells and staffs to
                        cast powerful magic attacks. They are known for their
                        high mana and intelligence.
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
                                <li>100</li>
                                <li>4</li>
                                <li>6</li>
                            </div>
                            <div className='stats2'>
                                <li>MP</li>
                                <li>DEF</li>
                                <li>INT</li>
                            </div>
                            <div className='stats2-info'>
                                <li>300</li>
                                <li>10</li>
                                <li>20</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default MagePage;
