import axios from 'axios';
import axiosRetry from 'axios-retry';
import {useContext, useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {PlayersContext} from '../../contexts/PlayersContext';
import {PlayerForm} from '../../features/CRUD/PlayerForm/PlayerForm';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import {Player} from '../../models/Player';
import './AddPlayerPage.css';

function handleOnClick(
    // idInput: React.RefObject<HTMLInputElement>,
    // userIdInput: React.RefObject<HTMLInputElement>,
    nicknameInput: React.RefObject<HTMLInputElement>,
    urlInput: React.RefObject<HTMLInputElement>,
): {nickname: string; pictureURL: string} {
    if (
        // !idInput.current ||
        // !userIdInput.current ||
        !nicknameInput.current ||
        !urlInput.current
    ) {
        throw new Error('Null references');
    }

    if (
        // !idInput.current!.value ||
        // !userIdInput.current!.value ||
        !nicknameInput.current!.value ||
        !urlInput.current!.value
    ) {
        throw new Error('All fields are required');
    }

    // const playerId: number = parseInt(idInput.current!.value);
    // const playeruserId: string = userIdInput.current!.value;
    const playerNickname: string = nicknameInput.current?.value || '';
    const playerUrl: string = urlInput.current?.value || '';

    const inputFields = {
        // userId: playeruserId,
        nickname: playerNickname,
        pictureURL: playerUrl,
    };

    return inputFields;
}

const AddPlayerPage = () => {
    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    axiosRetry(axios, {retries: 3});

    const navigate = useNavigate();

    document.title = 'Astral Odyssey | Add Player';

    // const idInput = useRef<HTMLInputElement>(null);
    // const userIdInput = useRef<HTMLInputElement>(null);
    const nicknameInput = useRef<HTMLInputElement>(null);
    const urlInput = useRef<HTMLInputElement>(null);

    const playersContext = useContext(PlayersContext)!;

    const handleOnClickWrapper = () => {
        try {
            const inputFields = handleOnClick(
                // idInput,
                // userIdInput,
                nicknameInput,
                urlInput,
            );
            const userId: number = parseInt(
                localStorage.getItem('userId') ?? '0',
            );

            console.log(inputFields);
            try {
                const URL = `http://localhost:5000/api/players/addPlayer`;
                // const URL = `http://3.79.63.224:5000/api/players/addPlayer`;

                const postBody = {
                    userId: userId,
                    nickname: inputFields.nickname,
                    pictureURL: inputFields.pictureURL,
                };

                axios({
                    method: 'POST',
                    url: URL,
                    data: postBody,
                }).then((response) => {
                    console.log(response.data);
                    playersContext.addPlayer(
                        new Player(
                            response.data.id,
                            response.data.userId,
                            response.data.nickname,
                            response.data.pictureURL,
                        ),
                    );
                });
            } catch (error) {
                console.log('Error in POST request');
            }
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
                        // userIdInput={userIdInput}
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
