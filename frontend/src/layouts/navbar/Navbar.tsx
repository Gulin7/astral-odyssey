import {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserContext} from '../../contexts/UserContext';
import {User} from '../../models/User';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const userContext = useContext(UserContext)!;

    function logout() {
        localStorage.setItem('isLoggedIn', 'no');
        userContext.setUser(new User(-1, '', '', '', false));
        navigate('/login');
    }

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
                    <Link to='/players' className='nav-link'>
                        Players
                    </Link>
                </div>
                <div>
                    <Link to='/addPlayer' className='nav-link'>
                        Add Player
                    </Link>
                </div>
                <div>
                    <Link to='/characters' className='nav-link'>
                        Characters
                    </Link>
                </div>
                <div>
                    <Link to='/addCharacter' className='nav-link'>
                        Add Character
                    </Link>
                </div>
                <div>
                    <Link to='/armorShop' className='nav-link'>
                        Armor
                    </Link>
                </div>
                <div>
                    <Link to='/weaponShop' className='nav-link'>
                        Weapons
                    </Link>
                </div>
                <div>
                    <Link to='/potionShop' className='nav-link'>
                        Potions
                    </Link>
                </div>
                <div>
                    <button className='nav-link button-dark' onClick={logout}>
                        Log out
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
