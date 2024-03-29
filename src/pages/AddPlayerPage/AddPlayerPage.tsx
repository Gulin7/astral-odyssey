import {useContext, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {PlayersContext} from '../../contexts/PlayersContext';
import {PlayerForm} from '../../features/CRUD/PlayerForm/PlayerForm';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import {Player} from '../../models/Player';
import './AddPlayerPage.css';

function handleOnClick(
    idInput: React.RefObject<HTMLInputElement>,
    usernameInput: React.RefObject<HTMLInputElement>,
    nicknameInput: React.RefObject<HTMLInputElement>,
    urlInput: React.RefObject<HTMLInputElement>,
): Player {
    if (
        !idInput.current!.value ||
        !usernameInput.current!.value ||
        !nicknameInput.current!.value ||
        !urlInput.current!.value
    ) {
        throw new Error('All fields are required');
    }

    const playerId: number = parseInt(idInput.current!.value);
    const playerUsername: string = usernameInput.current!.value;
    const playerNickname: string = nicknameInput.current!.value;
    const playerUrl: string = urlInput.current!.value;

    return new Player(playerId, playerUsername, playerNickname, playerUrl);
}

const AddPlayerPage = () => {
    document.title = 'Astral Odyssey | Add Player';

    const idInput = useRef<HTMLInputElement>(null);
    const usernameInput = useRef<HTMLInputElement>(null);
    const nicknameInput = useRef<HTMLInputElement>(null);
    const urlInput = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();
    const playersContext = useContext(PlayersContext)!;

    const handleOnClickWrapper = () => {
        try {
            const inputPlayer = handleOnClick(
                idInput,
                usernameInput,
                nicknameInput,
                urlInput,
            );
            playersContext.addPlayer(inputPlayer);
            navigate('/players');
        } catch (error) {
            alert(error);
        }
    };

    const layoutTitle: string = 'Add Player';

    return (
        <MainLayout>
            <div className='main-page' data-testid='main-page-id'>
                <div className='main-page-container'>
                    <div className='main-title'>{layoutTitle}</div>
                    <PlayerForm
                        idInput={idInput}
                        usernameInput={usernameInput}
                        nicknameInput={nicknameInput}
                        urlInput={urlInput}
                        data-testid='player-form-id'
                    />
                    <Button
                        type='submit'
                        buttonText='Add Player'
                        onClick={handleOnClickWrapper}
                        data-testid='add-player-button-id'
                        className='button-dark'
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default AddPlayerPage;
