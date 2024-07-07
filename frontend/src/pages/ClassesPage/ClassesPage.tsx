import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './ClassesPage.css';

const ClassesPage = () => {
    const navigate = useNavigate();
    let path: string = 'src/assets/skins/';
    let framePath: string = 'src/assets/frames/';

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    });

    const navigateToRangerClass = () => {
        navigate('/rangerClass');
    };

    const navigateToWarriorClass = () => {
        navigate('/warriorClass');
    };

    const navigateToMageClass = () => {
        navigate('/mageClass');
    };

    const navigateToFighterClass = () => {
        navigate('/fighterClass');
    };

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title main-title-classes'>Classes</h2>
                    <img
                        className='underline'
                        src={framePath + 'underline-2.png'}
                        alt='underline'
                    />
                    <div
                        className='main-description main-description-classes'
                        data-testid='home-description-test-id'
                    >
                        Here is a list of classes you can choose from in Astral
                        Odyssey.
                    </div>

                    <div className='container-classes'>
                        <div
                            className='top-left'
                            onClick={navigateToWarriorClass}
                        >
                            <img
                                className='top-left-class'
                                src={path + 'warrior-default.png'}
                                alt='warrior'
                            />
                            <div>
                                <h3 className='class-title'>Warrior</h3>
                                <p className='class-description'>
                                    The warrior is a melee class that uses
                                    swords and shields to protect themselves and
                                    their allies. They are known for their high
                                    health and defense.
                                </p>
                            </div>
                        </div>
                        <div
                            className='bottom-left'
                            onClick={navigateToRangerClass}
                        >
                            <div>
                                <h3 className='class-title'>Ranger</h3>
                                <p className='class-description'>
                                    The ranger is a ranged class that uses bows
                                    and arrows to attack enemies from a
                                    distance. They are known for their high
                                    damage and speed.
                                </p>
                            </div>
                            <img
                                className='bottom-left-class'
                                src={path + 'ranger-default.png'}
                                alt='warrior'
                            />
                        </div>
                        <div
                            className='top-right'
                            onClick={navigateToMageClass}
                        >
                            <div>
                                <h3 className='class-title'>Mage</h3>
                                <p className='class-description'>
                                    The mage is a magic class that uses spells
                                    and staffs to cast powerful magic attacks.
                                    They are known for their high mana and
                                    intelligence.
                                </p>
                            </div>
                            <img
                                className='top-right-class'
                                src={path + 'mage-default.png'}
                                alt='warrior'
                            />
                        </div>
                        <div
                            className='bottom-right'
                            onClick={navigateToFighterClass}
                        >
                            <img
                                className='bottom-right-class'
                                src={path + 'fighter-default.png'}
                                alt='warrior'
                            />
                            <div>
                                <h3 className='class-title'>Fighter</h3>
                                <p className='class-description'>
                                    The fighter is a melee class that uses fists
                                    and kicks to attack enemies up close. They
                                    are known for their high strength and speed.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default ClassesPage;
