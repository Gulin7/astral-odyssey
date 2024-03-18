import PropTypes from 'prop-types';
import './Header.css';

const Header = () => {
    return (
        <header className='header' data-testid='header-test-id'>
            <div
                className='header-container'
                data-testid='header-container-test-id'
            >
                <h1>Astral Odyssey</h1>
            </div>
        </header>
    );
};

Header.defaultProps = {
    title: 'Astral Odyssey',
};

Header.propTypes = {
    title: PropTypes.string,
};

export default Header;
