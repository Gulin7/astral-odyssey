import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';

const AreasPage = () => {
    const navigate = useNavigate();

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
                    <h2 className='main-title'>Areas</h2>
                    <div
                        className='main-description'
                        data-testid='home-description-test-id'
                    >
                        Areas are places where you can go to fight monsters and
                        gain experience.
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default AreasPage;
