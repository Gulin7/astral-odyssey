import React from 'react';
import Armor from '../../models/Armor';

export type ArmorFormType = {
    itemNameInput: React.RefObject<HTMLInputElement>;
    primaryStatInput: React.RefObject<HTMLInputElement>;
    itemRarityInput: React.RefObject<HTMLInputElement>;
    classesInput: React.RefObject<HTMLInputElement>;
    itemDescriptionInput: React.RefObject<HTMLInputElement>;
    itemPriceInput: React.RefObject<HTMLInputElement>;
    skinURLInput: React.RefObject<HTMLInputElement>;
    givenArmor?: Armor;
};
