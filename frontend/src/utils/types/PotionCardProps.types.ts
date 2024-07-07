import Potion from '../../models/Potion';

export type PotionCardPropsType = {
    givenPotion: Potion;
    removePotion: (PotionId: string) => void;
};
