import React, {useContext} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Button from '../../components/Button/Button';
import {PlayersContext} from '../../contexts/PlayersContext';
import {PlayerForm} from '../../features/CRUD/PlayerForm/PlayerForm';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import {Player} from '../../models/Player';
import './EditPlayerPage.css';

function handleOnClick(
    idInput: React.RefObject<HTMLInputElement>,
    usernameInput: React.RefObject<HTMLInputElement>,
    nicknameInput: React.RefObject<HTMLInputElement>,
    pictureUrlInput: React.RefObject<HTMLInputElement>,
) {
    if (
        !idInput.current ||
        !usernameInput.current ||
        !nicknameInput.current ||
        !pictureUrlInput.current
    ) {
        throw new Error('Inputs references are null');
    }

    if (
        !idInput.current.value ||
        !usernameInput.current.value ||
        !nicknameInput.current.value ||
        !pictureUrlInput.current.value
    ) {
        throw new Error('You must provide values for each field');
    }

    const playerId: number = parseInt(idInput.current.value);
    const playerUsername: string = usernameInput.current.value;
    const playerNickname: string = nicknameInput.current.value;
    const playerPictureUrl: string = pictureUrlInput.current.value;

    return new Player(
        playerId,
        playerUsername,
        playerNickname,
        playerPictureUrl,
    );
}

const EditPlayerPage = () => {
    document.title = 'Astral Odyssey | Player Profile';

    const idInput = React.createRef<HTMLInputElement>();
    const usernameInput = React.createRef<HTMLInputElement>();
    const nicknameInput = React.createRef<HTMLInputElement>();
    const pictureUrlInput = React.createRef<HTMLInputElement>();

    const navigate = useNavigate();
    const playersContext = useContext(PlayersContext)!;

    const {playerId} = useParams();
    if (!playerId) {
        navigate('/players');
        return;
    }

    const givenPlayer = playersContext.players.find(
        (player: Player) => player.getId() === parseInt(playerId),
    );

    const handleOnClickWrapper = () => {
        try {
            const newPlayer = handleOnClick(
                idInput,
                usernameInput,
                nicknameInput,
                pictureUrlInput,
            );
            playersContext.removePlayer(newPlayer.getId());
            playersContext.addPlayer(newPlayer);

            navigate('/players');
        } catch (error) {
            alert(error);
        }
    };

    const layoutTitle: string = 'Player Profile';

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>{layoutTitle}</h2>
                    <PlayerForm
                        idInput={idInput}
                        usernameInput={usernameInput}
                        nicknameInput={nicknameInput}
                        urlInput={pictureUrlInput}
                        givenPlayer={givenPlayer}
                    />

                    <Button
                        type='submit'
                        buttonText='Edit Player'
                        onClick={handleOnClickWrapper}
                        className='button-dark'
                    />
                </div>
            </div>
        </MainLayout>
    );
};

export default EditPlayerPage;
