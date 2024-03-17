import Footer from '../footer/Footer';
import Header from '../header/Header';
import './MainLayout.css';

const MainLayout = ({children}: {children?: any}) => {
    return (
        <div className='layout' data-testid='main-layout-test-id'>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
