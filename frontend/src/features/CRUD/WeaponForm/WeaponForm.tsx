import Weapon from '../../../models/Weapon';
import {FormEntryProps} from '../../../utils/types/FormEntryProps.types';
import {WeaponFormType} from '../../../utils/types/WeaponFormProps.types';
import {WeaponFormEntry} from '../WeaponFormEntry/WeaponFormEntry';
import './WeaponForm.css';

function setWeaponFormEntriesForWeapon(
    formEntries: FormEntryProps[],
    givenWeapon: Weapon | undefined,
) {
    if (givenWeapon !== undefined) {
        formEntries[0].defaultValue = givenWeapon.getItemName();
        formEntries[1].defaultValue = givenWeapon.getPrimaryStat().toString();
        formEntries[2].defaultValue = givenWeapon.getItemRarity();
        formEntries[3].defaultValue = givenWeapon.getItemDescription();
        formEntries[4].defaultValue = givenWeapon.getItemPrice().toString();
    }

    return formEntries;
}

function createFormEntries(props: WeaponFormType) {
    let formEntries = [
        {
            label: 'Weapon Name',
            placeHolder: 'Enter name',
            defaultValue: '',
            ref: props.itemNameInput,
            disabled: false,
        },
        {
            label: 'Weapon Defense',
            placeHolder: 'Enter Defense',
            defaultValue: '',
            ref: props.primaryStatInput,
            disabled: false,
        },
        {
            label: 'Weapon Rarity',
            placeHolder: 'Enter rarity',
            defaultValue: '',
            ref: props.itemRarityInput,
            disabled: false,
        },
        {
            label: 'Weapon Description',
            placeHolder: 'Enter description',
            defaultValue: '',
            ref: props.itemDescriptionInput,
            disabled: false,
        },
        {
            label: 'Weapon Price',
            placeHolder: 'Enter price',
            defaultValue: '',
            ref: props.itemPriceInput,
            disabled: false,
        },
    ];

    formEntries = setWeaponFormEntriesForWeapon(formEntries, props.givenWeapon);

    return formEntries;
}

export function WeaponForm(props: WeaponFormType) {
    const formEntries = createFormEntries(props);

    return (
        <div className='weapon-form-div' data-testid='weapon-form-test-id'>
            <form className='weapon-form'>
                {formEntries.map((entry, index) => (
                    <WeaponFormEntry
                        key={index}
                        label={entry.label}
                        placeHolder={entry.placeHolder}
                        defaultValue={entry.defaultValue}
                        disabled={entry.disabled}
                        ref={entry.ref}
                    />
                ))}
            </form>
        </div>
    );
}
