import MainLayout from '../../layouts/mainLayout/MainLayout';
import './HomePage.css';

const HomePage = () => {
    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Welcome to Astral Odyssey!</h2>
                    <div
                        className='main-description'
                        data-testid='home-description-test-id'
                    >
                        This is a game where you can create your own character
                        and explore the world of Astral Odyssey.
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default HomePage;
