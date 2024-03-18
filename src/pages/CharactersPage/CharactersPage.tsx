import MainLayout from '../../layouts/mainLayout/MainLayout';
import './CharactersPage.css';

const CharactersPage = () => {
    document.title = 'Astral Odyssey | Characters';

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Characters</h2>
                    <div className='main-description'>
                        This is the Characters page where you can create and
                        manage your characters.
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default CharactersPage;
