import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './RangerPage.css';

const RangerPage = () => {
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

    let path: string = 'src/assets/skins/ranger-default.png';

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
                    <h1 className='class-page-title'>Ranger</h1>
                    <div className='class-page-description'>
                        The ranger is a ranged class that uses bows and arrows
                        to attack enemies from a distance. They are known for
                        their high damage and speed.
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
                                <li>150</li>
                                <li>8</li>
                                <li>22</li>
                            </div>
                            <div className='stats2'>
                                <li>MP</li>
                                <li>DEF</li>
                                <li>INT</li>
                            </div>
                            <div className='stats2-info'>
                                <li>200</li>
                                <li>8</li>
                                <li>14</li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default RangerPage;
