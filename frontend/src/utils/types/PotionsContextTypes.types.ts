import {ReactNode} from 'react';
import Potion from '../../models/Potion';

export type PotionsContextType = {
    potions: Potion[];
    addPotion: (potions: Potion) => void;
    removePotion: (potionId: string) => void;
};

export type ProviderType = {
    potionContext: PotionsContextType;
    children: ReactNode;
};
