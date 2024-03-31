import MainLayout from '../../layouts/mainLayout/MainLayout';
import './NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title' data-testid='not-found-test-id'>
                        404 - Not Found
                    </h2>
                    <div className='main-description'>
                        The page you are looking for does not exist.
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default NotFoundPage;
