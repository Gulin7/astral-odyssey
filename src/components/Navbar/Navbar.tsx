import './Navbar.css';

import Button from '../Button/Button';

const Navbar = () => {
    const goToCharacters = () => {};
    const goToArmorShop = () => {};
    const goToWeaponShop = () => {};
    const goToPotionShop = () => {};
    return (
        <div className='navbar'>
            <h3>Astral Odyssey</h3>
            <br />
            <ul className='nav-links'>
                <li>Home</li>
                <li>
                    <Button
                        text='Characters'
                        onClickFunction={goToCharacters}
                    />
                </li>
                <li>
                    <Button text='Armor Shop' onClickFunction={goToArmorShop} />
                </li>
                <li>
                    <Button
                        text='Weapon Shop'
                        onClickFunction={goToWeaponShop}
                    />
                </li>
                <li>
                    <Button
                        text='Potion Shop'
                        onClickFunction={goToPotionShop}
                    />
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
