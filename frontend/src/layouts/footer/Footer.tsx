import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer' data-testid='footer-test-id'>
            <div
                className='footer-container'
                data-testid='footer-container-test-id'
            >
                <div>
                    Created by{' '}
                    <a href='https://github.com/Gulin7' target='_blank'>
                        Gulin Tudor
                    </a>{' '}
                </div>
                <div>Copyright &copy; Astral Odyssey</div>
            </div>
        </footer>
    );
};

export default Footer;
