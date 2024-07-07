import { ReactNode } from 'react';
import Weapon from '../../models/Weapon';

export type WeaponsContextType = {
    weapons: Weapon[];
    addWeapon: (weapons: Weapon) => void;
    removeWeapon: (weaponId: string) => void;
};

export type ProviderType = {
    weaponContext: WeaponsContextType;
    children: ReactNode;
};
