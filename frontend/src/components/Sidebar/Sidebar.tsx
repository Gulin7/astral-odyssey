import Conversations from '../Conversations/Conversations';
import SearchInput from '../SearchInput/SearchInput';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
            <SearchInput />
            <div className='divider px-3'></div>
            <Conversations />
        </div>
    );
};

export default Sidebar;
