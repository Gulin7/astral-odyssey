import {useState} from 'react';
import MainLayout from '../../layouts/mainLayout/MainLayout';

const AddArmorPage = () => {
    const layoutTitle = 'Add Armor';

    const [inputs, setInputs] = useState({
        itemName: '',
        primaryStat: 0,
        itemRarity: '',
        classes: ['warrior'],
        itemDescription: '',
        itemPrice: 0,
        skinURL: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(inputs);
    };

    return (
        <MainLayout title={layoutTitle}>
            <div className='main-page' data-testid='main-page-id'>
                <div className='main-page-container'>
                    <div className='item-form-container'>
                        <form onSubmit={handleSubmit}>
                            <div className='item-form-entry'>
                                <label className='item-form-label'>
                                    Armor name
                                </label>
                                <input
                                    className='item-form-input'
                                    type='text'
                                    placeholder='Enter armor name'
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            itemName: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className='item-form-entry'>
                                <label className='item-form-label'>
                                    Defense
                                </label>
                                <input
                                    className='item-form-input'
                                    type='number'
                                    placeholder='Enter defense'
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            primaryStat: parseInt(
                                                e.target.value,
                                            ),
                                        })
                                    }
                                />
                            </div>
                            <div className='item-form-entry'>
                                <label className='item-form-label'>
                                    Rarity
                                </label>
                                <select
                                    className='item-form-input'
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            itemRarity: e.target.value,
                                        })
                                    }
                                >
                                    <option value='common'>Common</option>
                                    <option value='uncommon'>Uncommon</option>
                                    <option value='rare'>Rare</option>
                                    <option value='epic'>Epic</option>
                                    <option value='legendary'>Legendary</option>
                                </select>
                            </div>
                            <div className='item-form-entry'>
                                <label className='item-form-label'>
                                    Classes
                                </label>
                                <select
                                    className='item-form-input'
                                    multiple
                                    onChange={(e) => {
                                        const selectedOptions = Array.from(
                                            e.target.selectedOptions,
                                            (option) => option.value,
                                        );
                                        setInputs({
                                            ...inputs,
                                            classes: selectedOptions,
                                        });
                                    }}
                                >
                                    <option value='warrior' defaultChecked>
                                        Warrior
                                    </option>
                                    <option value='ranger'>Ranger</option>
                                    <option value='mage'>Mage</option>
                                    <option value='fighter'>Fighter</option>
                                </select>
                            </div>
                            <div className='item-form-entry'>
                                <label className='item-form-label'>
                                    Description
                                </label>
                                <input
                                    className='item-form-input'
                                    type='text'
                                    placeholder='Enter armor description'
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            itemDescription: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className='item-form-entry'>
                                <label className='item-form-label'>Price</label>
                                <input
                                    className='item-form-input'
                                    type='text'
                                    placeholder='Enter armor price'
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            itemPrice: parseInt(e.target.value),
                                        })
                                    }
                                />
                            </div>
                            <div className='item-form-entry'>
                                <label className='item-form-label'>
                                    Armor skin
                                </label>
                                <input
                                    className='item-form-input'
                                    type='text'
                                    placeholder='Enter armor skin'
                                    onChange={(e) =>
                                        setInputs({
                                            ...inputs,
                                            skinURL: e.target.value,
                                        })
                                    }
                                />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default AddArmorPage;
