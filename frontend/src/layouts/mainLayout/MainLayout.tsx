import Footer from '../footer/Footer';
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';
import './MainLayout.css';

const MainLayout = ({children}: {children?: any}) => {
    return (
        <div className='main-layout' data-testid='main-layout-test-id'>
            <Header />
            <div
                className='main-layout-content'
                data-testid='main-layout-content-test-id'
            >
                <Navbar />
                <div className='main-layout-section'>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

MainLayout.defaultProps = {
    title: 'Astral Odyssey',
};

export default MainLayout;

// const MainLayout = ({props}: {props: MainLayoutProps}) => {
//     return (
//         <div className='main-layout' data-testid='main-layout-test-id'>
//             <Header />
//             <div className='main-layout-content'>
//                 <Navbar />
//                 <div className='main-layout-section'>
//                     <h2>{props.title}</h2>
//                     {props.children}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };
