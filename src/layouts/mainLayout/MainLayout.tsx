import Footer from '../footer/Footer';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './MainLayout.css';

const MainLayout = ({children}: {children?: any}) => {
    return (
        <div className='layout' data-testid='main-layout-test-id'>
            <Header />
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
