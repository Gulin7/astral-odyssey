import MainLayout from '../../layouts/mainLayout/MainLayout';
import './ArmorsPage.css';

const ArmorsPage = () => {
    document.title = 'Astral Odyssey | Armors Shop';
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
