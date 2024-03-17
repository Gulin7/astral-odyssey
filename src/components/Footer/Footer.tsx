import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div>
                Created by Gulin Tudor
                <a href='https://github.com/Gulin7'>
                    <i className='fa-brands fa-github'></i>
                </a>
                <a href='https://www.linkedin.com/in/gulin-tudor/'>
                    <i className='fa-brands fa-linkedin'></i>
                </a>
            </div>
            <br />
            <div>Copyright &copy; Astral Odyssey</div>
        </div>
    );
};

export default Footer;
