import MainLayout from '../../layouts/mainLayout/MainLayout';
import './ArmorPage.css';

const ArmorPage = () => {
    document.title = 'Astral Odyssey | Armor Shop';
    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Armor Shop</h2>
                    <div className='main-description'>
                        This is the Armor shop where you can buy different
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

export default ArmorPage;
