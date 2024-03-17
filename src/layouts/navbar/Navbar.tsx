import {Link} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar' data-testid='navbar-test-id'>
            <h2 className='nav-title'>Astral Odyssey</h2>
            <br />
            <div className='nav-links'>
                <div>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                </div>
                <div>
                    <Link to='/characters' className='nav-link'>
                        Characters
                    </Link>
                </div>
                <div>
                    <Link to='/armor' className='nav-link'>
                        Armor
                    </Link>
                </div>
                <div>
                    <Link to='/weapons' className='nav-link'>
                        Weapons
                    </Link>
                </div>
                <div>
                    <Link to='/potions' className='nav-link'>
                        Potions
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
