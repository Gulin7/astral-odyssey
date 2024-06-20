import Armor from '../../../models/Armor';
import {ArmorFormType} from '../../../utils/types/ArmorFormProps.types';
import {FormEntryProps} from '../../../utils/types/FormEntryProps.types';
import {ArmorFormEntry} from '../ArmorFormEntry/ArmorFormEntry';
import './ArmorForm.css';

function setArmorFormEntriesForArmor(
    formEntries: FormEntryProps[],
    givenArmor: Armor | undefined,
) {
    if (givenArmor !== undefined) {
        formEntries[0].defaultValue = givenArmor.getItemName();
        formEntries[1].defaultValue = givenArmor.getPrimaryStat().toString();
        formEntries[2].defaultValue = givenArmor.getItemRarity();
        formEntries[3].defaultValue = givenArmor.getItemDescription();
        formEntries[4].defaultValue = givenArmor.getItemPrice().toString();
    }

    return formEntries;
}

function createFormEntries(props: ArmorFormType) {
    let formEntries = [
        {
            label: 'Armor Name',
            placeHolder: 'Enter name',
            defaultValue: '',
            ref: props.itemNameInput,
            disabled: false,
        },
        {
            label: 'Armor Defense',
            placeHolder: 'Enter Defense',
            defaultValue: '',
            ref: props.primaryStatInput,
            disabled: false,
        },
        {
            label: 'Armor Rarity',
            placeHolder: 'Enter rarity',
            defaultValue: '',
            ref: props.itemRarityInput,
            disabled: false,
        },
        {
            label: 'Armor Description',
            placeHolder: 'Enter description',
            defaultValue: '',
            ref: props.itemDescriptionInput,
            disabled: false,
        },
        {
            label: 'Armor Price',
            placeHolder: 'Enter price',
            defaultValue: '',
            ref: props.itemPriceInput,
            disabled: false,
        },
    ];

    formEntries = setArmorFormEntriesForArmor(formEntries, props.givenArmor);

    return formEntries;
}

export function ArmorForm(props: ArmorFormType) {
    const formEntries = createFormEntries(props);

    return (
        <div className='armor-form-div' data-testid='armor-form-test-id'>
            <form className='armor-form'>
                {formEntries.map((entry, index) => (
                    <ArmorFormEntry
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
