import React from 'react';
import Weapon from '../../models/Weapon';

export type WeaponFormType = {
    itemNameInput: React.RefObject<HTMLInputElement>;
    primaryStatInput: React.RefObject<HTMLInputElement>;
    itemRarityInput: React.RefObject<HTMLInputElement>;
    classesInput: React.RefObject<HTMLInputElement>;
    itemDescriptionInput: React.RefObject<HTMLInputElement>;
    itemPriceInput: React.RefObject<HTMLInputElement>;
    skinURLInput: React.RefObject<HTMLInputElement>;
    givenWeapon?: Weapon;
};
