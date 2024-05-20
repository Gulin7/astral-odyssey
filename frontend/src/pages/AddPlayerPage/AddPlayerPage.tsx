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
    const playerNickname: string = nicknameInput.current!.value;
    const playerUrl: string = urlInput.current!.value;

    const inputFields = {
        // userId: playeruserId,
        nickname: playerNickname,
        pictureURL: playerUrl,
    };

    return inputFields;
}

const AddPlayerPage = () => {
    useEffect(() => {
        const token = sessionStorage.getItem('userToken');
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

            console.log(inputFields);
            try {
                playersContext.addPlayer(
                    new Player(
                        4000,
                        1,
                        inputFields.nickname,
                        inputFields.pictureURL,
                    ),
                );
                axios({
                    method: 'POST',
                    url: `http://localhost:5000/api/players/addPlayer`,
                    data: inputFields,
                })
                    // .post(
                    //     'http://localhost:5000/api/players/addPlayer',
                    //     inputFields,
                    // )
                    .then((response) => {
                        console.log(response.data);
                        // playersContext.addPlayer(
                        //     new Player(
                        //         response.data.id,
                        //         response.data.userId,
                        //         response.data.nickname,
                        //         response.data.pictureURL,
                        //     ),
                        // );
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
