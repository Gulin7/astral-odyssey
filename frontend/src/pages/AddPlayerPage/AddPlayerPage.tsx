import axios from 'axios';
import {useContext, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {PlayersContext} from '../../contexts/PlayersContext';
import {PlayerForm} from '../../features/CRUD/PlayerForm/PlayerForm';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import {Player} from '../../models/Player';
import './AddPlayerPage.css';

function handleOnClick(
    // idInput: React.RefObject<HTMLInputElement>,
    usernameInput: React.RefObject<HTMLInputElement>,
    nicknameInput: React.RefObject<HTMLInputElement>,
    urlInput: React.RefObject<HTMLSelectElement>,
): string[] {
    if (
        // !idInput.current ||
        !usernameInput.current ||
        !nicknameInput.current ||
        !urlInput.current
    ) {
        throw new Error('Null references');
    }

    if (
        // !idInput.current!.value ||
        !usernameInput.current!.value ||
        !nicknameInput.current!.value ||
        !urlInput.current!.value
    ) {
        throw new Error('All fields are required');
    }

    // const playerId: number = parseInt(idInput.current!.value);
    const playerUsername: string = usernameInput.current!.value;
    const playerNickname: string = nicknameInput.current!.value;
    const playerUrl: string = urlInput.current!.value;

    const inputFields = [playerUsername, playerNickname, playerUrl];

    return inputFields;
}

const AddPlayerPage = () => {
    document.title = 'Astral Odyssey | Add Player';

    // const idInput = useRef<HTMLInputElement>(null);
    const usernameInput = useRef<HTMLInputElement>(null);
    const nicknameInput = useRef<HTMLInputElement>(null);
    const urlInput = useRef<HTMLSelectElement>(null);

    const navigate = useNavigate();
    const playersContext = useContext(PlayersContext)!;

    const handleOnClickWrapper = () => {
        try {
            const inputFields = handleOnClick(
                // idInput,
                usernameInput,
                nicknameInput,
                urlInput,
            );
            const inputPlayer = {
                username: inputFields[0],
                nickname: inputFields[1],
                url: inputFields[2],
            };

            axios
                .post('http://localhost:5000/api/addPlayer', inputPlayer)
                .then((response) => {
                    console.log(response);
                    let fetchedPlayer: Player;
                    axios
                        .get(
                            `http://localhost:5000/api/devices/${inputFields[0]}`,
                        )
                        .then((response) => {
                            fetchedPlayer = response.data.map(
                                (player: any) =>
                                    new Player(
                                        player.id,
                                        player.username,
                                        player.nickname,
                                        player.pictureURL,
                                    ),
                            );
                            playersContext.addPlayer(fetchedPlayer);
                            console.log('My data is: ');
                            console.log(response.data);
                        })
                        .catch((error) => {
                            console.error('Error fetching players: ', error);
                        });
                });
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
                        // idInput={idInput}
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
