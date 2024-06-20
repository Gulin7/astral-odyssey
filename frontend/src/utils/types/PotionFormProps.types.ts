import React from 'react';
import Potion from '../../models/Potion';

export type PotionFormType = {
    itemNameInput: React.RefObject<HTMLInputElement>;
    primaryStatInput: React.RefObject<HTMLInputElement>;
    itemRarityInput: React.RefObject<HTMLInputElement>;
    classesInput: React.RefObject<HTMLInputElement>;
    itemDescriptionInput: React.RefObject<HTMLInputElement>;
    itemPriceInput: React.RefObject<HTMLInputElement>;
    skinURLInput: React.RefObject<HTMLInputElement>;
    givenPotion?: Potion;
};
