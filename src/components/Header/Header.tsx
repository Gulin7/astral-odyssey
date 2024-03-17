import PropTypes from 'prop-types'
import './Header.css'

const Header = ({title}: {title: string}) => {
    return (
        <header className='header'>
            <div className='header-container'>
                <h1>{title}</h1>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Astral Odyssey',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
