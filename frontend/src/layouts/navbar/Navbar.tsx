import axios from 'axios';
import {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {UserContext} from '../../contexts/UserContext';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const userContext = useContext(UserContext)!;

    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'yes';

    function logout() {
        try {
            const URL = 'http://localhost:5000/api/users/logout';
            // const URL = `http://3.79.63.224:5000/api/users/logout`;

            axios.post(URL).then((response) => {
                console.log(response.data);

                navigate('/');
            });

            localStorage.setItem('isLoggedIn', 'no');
            sessionStorage.removeItem('userToken');
        } catch (error) {
            console.error(error);
        }
        navigate('/login');
    }

    if (!isLoggedIn) {
        return null;
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
                {/* <div>
                    <Link to='/addPlayer' className='nav-link'>
                        Add Player
                    </Link>
                </div> */}
                <div>
                    <Link to='/chat' className='nav-link'>
                        Chat
                    </Link>
                </div>
                <div>
                    <Link to='/guilds' className='nav-link'>
                        Guilds
                    </Link>
                </div>
                <div>
                    <Link to='/guildChat' className='nav-link'>
                        Guild Chat
                    </Link>
                </div>
                <div>
                    <Link to='/characters' className='nav-link'>
                        Characters
                    </Link>
                </div>
                <div>
                    <Link to='/characterClasses' className='nav-link'>
                        Classes
                    </Link>
                </div>
                <div>
                    <Link to='/characterRaces' className='nav-link'>
                        Races
                    </Link>
                </div>
                <div>
                    <Link to='/addCharacter' className='nav-link'>
                        Add Character
                    </Link>
                </div>
                <div>
                    <Link to='/armorShop' className='nav-link'>
                        Armors
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
                    <Link to='/arcade' className='nav-link'>
                        Arcade
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
