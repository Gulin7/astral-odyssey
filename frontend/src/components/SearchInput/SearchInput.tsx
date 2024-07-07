import {FaSearch} from 'react-icons/fa';

const SearchInput = () => {
    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='Search...'
                    className='input input-bordered rounded-full'
                />
                <button type='submit' className='btn btn-circle'>
                    <FaSearch className='' />
                </button>
            </form>
        </div>
    );
};

export default SearchInput;
