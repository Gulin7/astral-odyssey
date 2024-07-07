import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './RacesPage.css';

const RacesPage = () => {
    const navigate = useNavigate();
    let path: string = 'src/assets/races/';
    let framePath: string = 'src/assets/frames/';

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    });

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title main-title-races'>Races</h2>
                    <img
                        className='underline'
                        src={framePath + 'underline-2.png'}
                        alt='underline'
                    />
                    <div
                        className='main-description main-description-races'
                        data-testid='home-description-test-id'
                    >
                        Here is a list of races you can choose from in Astral
                        Odyssey.
                    </div>

                    <div className='container-races'>
                        <div className='top-left'>
                            <img
                                className='top-left-race    '
                                src={path + 'human-default.png'}
                                alt='human'
                            />
                            <div>
                                <h3 className='race-title'>Human</h3>
                                <p className='race-description'>
                                    Humans are the most common race in the world
                                    of Astral Odyssey. They are known for their
                                    adaptability and intelligence.
                                </p>
                            </div>
                        </div>
                        <div className='bottom-left'>
                            <div>
                                <h3 className='race-title'>Dwarf</h3>
                                <p className='race-description'>
                                    Dwarves are similar to humans in many ways,
                                    but they are shorter and stockier. They are
                                    known for their strength and resilience.
                                </p>
                            </div>
                            <img
                                className='bottom-left-race'
                                src={path + 'dwarf-default.png'}
                                alt='dwarf'
                            />
                        </div>
                        <div className='top-right'>
                            <div>
                                <h3 className='race-title'>Elf</h3>
                                <p className='race-description'>
                                    Elves are tall, slender, and graceful. They
                                    are known for their beauty and agility.
                                </p>
                            </div>
                            <img
                                className='top-right-race'
                                src={path + 'elf-default.png'}
                                alt='elf'
                            />
                        </div>
                        <div className='bottom-right'>
                            <img
                                className='bottom-right-race'
                                src={path + 'orc-default.png'}
                                alt='orc0'
                            />
                            <div>
                                <h3 className='race-title'>Orc</h3>
                                <p className='race-description'>
                                    Orcs are a strong and terrifying race that
                                    is feared by many. They are known for their
                                    brute strength and ferocity in battle.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default RacesPage;
