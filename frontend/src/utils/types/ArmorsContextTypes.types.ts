import {ReactNode} from 'react';
import Armor from '../../models/Armor';

export type ArmorsContextType = {
    armors: Armor[];
    addArmor: (armors: Armor) => void;
    removeArmor: (armorId: number) => void;
};

export type ProviderType = {
    armorContext: ArmorsContextType;
    children: ReactNode;
};
