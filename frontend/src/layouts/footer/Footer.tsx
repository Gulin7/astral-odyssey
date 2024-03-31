import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer' data-testid='footer-test-id'>
            <div
                className='footer-container'
                data-testid='footer-container-test-id'
            >
                <div>Created by Gulin Tudor</div>
                <div>Copyright &copy; Astral Odyssey</div>
            </div>
        </footer>
    );
};

export default Footer;
