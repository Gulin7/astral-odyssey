import Armor from '../../models/Armor';

export type ArmorCardPropsType = {
    givenArmor: Armor;
    removeArmor: (ArmorId: number) => void;
};
