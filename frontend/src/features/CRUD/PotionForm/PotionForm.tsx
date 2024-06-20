import Potion from '../../../models/Potion';
import {FormEntryProps} from '../../../utils/types/FormEntryProps.types';
import {PotionFormType} from '../../../utils/types/PotionFormProps.types';
import {PotionFormEntry} from '../PotionFormEntry/PotionFormEntry';
import './PotionForm.css';

function setPotionFormEntriesForPotion(
    formEntries: FormEntryProps[],
    givenPotion: Potion | undefined,
) {
    if (givenPotion !== undefined) {
        formEntries[0].defaultValue = givenPotion.getItemName();
        formEntries[1].defaultValue = givenPotion.getItemRarity();
        formEntries[2].defaultValue = givenPotion.getItemDescription();
        formEntries[3].defaultValue = givenPotion.getItemPrice().toString();
    }

    return formEntries;
}

function createFormEntries(props: PotionFormType) {
    let formEntries = [
        {
            label: 'Potion Name',
            placeHolder: 'Enter name',
            ref: props.itemNameInput,
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Potion Rarity',
            placeHolder: 'Enter rarity',
            ref: props.itemRarityInput,
            defaultValue: '',
            disabled: false,
        },
        {
            label: 'Potion Price',
            placeHolder: 'Enter price',
            ref: props.itemPriceInput,
            defaultValue: '',
            disabled: false,
        },
    ];

    formEntries = setPotionFormEntriesForPotion(formEntries, props.givenPotion);

    return formEntries;
}

export function PotionForm(props: PotionFormType) {
    const formEntries = createFormEntries(props);

    return (
        <div className='Potion-form-div' data-testid='Potion-form-test-id'>
            <form className='Potion-form'>
                {formEntries.map((entry, index) => (
                    <PotionFormEntry
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
