import Footer from '../../layouts/footer/Footer';
import Header from '../../layouts/header/Header';
import Navbar from '../../layouts/navbar/Navbar';
import './HomePage.css';

const HomePage = () => {
    return (
        <div>
            <Header title='Astral Odyssey' />
            <Navbar />
            <Footer />
        </div>
    );
};

export default HomePage;
