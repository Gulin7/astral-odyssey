import Weapon from '../../models/Weapon';

export type WeaponCardPropsType = {
    givenWeapon: Weapon;
    removeWeapon: (WeaponId: string) => void;
};
