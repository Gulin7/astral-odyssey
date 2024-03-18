import MainLayout from '../../layouts/mainLayout/MainLayout';
import './PotionPage.css';

const PotionPage = () => {
    document.title = 'Astral Odyssey | Potion Shop';
    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Potion Shop</h2>
                    <div className='main-description'>
                        This is the Potion shop where you can buy different
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

export default PotionPage;
