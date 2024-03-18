import MainLayout from '../../layouts/mainLayout/MainLayout';
import './PotionsPage.css';

const PotionsPage = () => {
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
