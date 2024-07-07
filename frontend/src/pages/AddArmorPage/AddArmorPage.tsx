import MainLayout from '../../layouts/mainLayout/MainLayout';

const AddArmorPage = () => {
    const layoutTitle = 'Add Armor';
    return (
        <MainLayout title={layoutTitle}>
            <div className='main-page' data-testid='main-page-id'>
                <div className='main-page-container'>
                    <div className='item-form-container'>
                        <form>
                            <div className='item-form-entry'>
                                <label className='item-form-label'>
                                    Armor name
                                </label>
                                <input
                                    className='item-form-input'
                                    type='text'
                                    placeholder='Enter armor name'
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
                                />
                            </div>
                            <div className='item-form-entry'>
                                <label className='item-form-label'>
                                    Rarity
                                </label>
                                <select className='item-form-input'>
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
                                <select className='item-form-input' multiple>
                                    <option value='warrior'>Warrior</option>
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
                                />
                            </div>
                            <div className='item-form-entry'>
                                <label className='item-form-label'>Price</label>
                                <input
                                    className='item-form-input'
                                    type='text'
                                    placeholder='Enter armor price'
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
