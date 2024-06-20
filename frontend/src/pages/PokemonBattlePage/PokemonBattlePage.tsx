import {
    faPowerOff,
    faVolumeHigh,
    faVolumeMute,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {useEffect, useRef, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './PokemonBattlePage.css';

const FighterPage = () => {
    const navigate = useNavigate();

    const [powerOn, setPowerOn] = useState(true);

    const [soundOn, setSoundOn] = useState(false);

    const audioRef = useRef(new Audio('src/assets/audio/pokemon-battle.mp3')); // Reference to the audio file

    // Paths to the images
    let scenePath: string = 'src/assets/pokemon-battle/battle-scene.png';
    let computerTagPath: string = 'src/assets/pokemon-battle/computer-tag.png';
    let playerTagPath: string = 'src/assets/pokemon-battle/player-tag.png';
    let computerPath: string = 'src/assets/pokemon-battle/mewtwo-front.png';
    let playerPath: string = 'src/assets/pokemon-battle/pikachu-back.png';
    let firePath: string = 'src/assets/pokemon-battle/fire.png';
    let waterPath: string = 'src/assets/pokemon-battle/water.png';
    let grassPath: string = 'src/assets/pokemon-battle/grass.png';
    let fireTypePath: string = 'src/assets/pokemon-battle/fire-type.png';
    let waterTypePath: string = 'src/assets/pokemon-battle/water-type.png';
    let grassTypePath: string = 'src/assets/pokemon-battle/grass-type.png';

    // Game varaiables
    let isAnimating: boolean = false;
    let timer = null;
    const [isPlaying, setIsPlaying] = useState(false);
    const [isGameEnding, setIsGameEnding] = useState(false);

    const [playerChoice, setPlayerChoice] = useState('fire');
    const [computerChoice, setComputerChoice] = useState('grass');

    // Initial values
    let initPlayerScore: number = 0;
    let initComputerScore: number = 0;
    let playerScore: number = initPlayerScore;
    let computerScore: number = initComputerScore;
    let textQueue: string[] = [];
    let animateTextDoneEvent: Event = new CustomEvent('animateTextDone', {});

    // HTML References
    const pokemonViewRef = useRef(null);
    const pokemonConsoleRef = useRef(null);
    const pokemonPlayerImageRef = useRef(null);
    const pokemonComputerImageRef = useRef(null);
    const pokemonPlayerChoiceRef = useRef(null);
    const pokemonComputerChoiceRef = useRef(null);
    const pokemonPlayerScoreRenderRef = useRef(null);
    const pokemonComputerScoreRenderRef = useRef(null);

    // HTML Class Changes

    useEffect(() => {
        const token = localStorage.getItem('userToken');
        if (!token) {
            navigate('/login');
        }
    });

    // Function to handle the power button click
    const handlePowerClick = () => {
        setPowerOn(!powerOn);
        if (powerOn) {
            setIsPlaying(true);
        } else {
            setIsPlaying(false);
        }
    };

    // Function to handle the volume button click
    const handleVolumeClick = () => {
        setSoundOn(!soundOn);
        if (soundOn) {
            audioRef.current.loop = false;
            audioRef.current.pause();
        } else {
            audioRef.current.loop = true;
            audioRef.current.play();
        }
    };

    // Game Initializer
    function gameInit() {}

    function startGame() {
        textQueue.push('Welcome to Pokemon Battle Arcade! First to 5 wins!');
        textQueue.push(
            'Choose your moves wisely! (click Status to see the current score) And remember, fire beats grass, grass beats water, and water beats fire!',
        );
    }

    useEffect(() => {
        gameInit();
        startGame();
    }, [powerOn]);

    const gameEnd = () => {
        // Reset game variables
        textQueue = [];
        clearTimeout(timer!);
        playerScore = initPlayerScore;
        computerScore = initComputerScore;

        // Reset game state
        setIsGameEnding(false);
        setIsPlaying(false);
    };

    const checkGameOver = () => {
        if (playerScore >= 5 || computerScore >= 5) {
            setIsGameEnding(true);
            timer = setTimeout(() => {
                gameEnd();
            }, 5000);
            if (playerScore >= 5) {
                return `Congratulations! You won ${playerScore} to ${computerScore}!`;
            } else {
                return `Game Over! You lost ${playerScore} to ${computerScore}!`;
            }
        }
    };

    const getResult = (playerSelection: string, computerSelection: string) => {
        if (playerSelection === computerSelection) {
            return "It's a tie!";
        }
        if (
            (playerSelection === 'fire' && computerSelection === 'grass') ||
            (playerSelection === 'grass' && computerSelection === 'water') ||
            (playerSelection === 'water' && computerSelection === 'fire')
        ) {
            return `You win! ${playerSelection} beats ${computerSelection}!`;
        }
        return `You lose! ${computerSelection} beats ${playerChoice}!`;
    };

    const playRound = (playerSelection: string) => {
        if (!isGameEnding) {
            const choices = ['fire', 'water', 'grass'];
            let computerSelection: string =
                choices[Math.floor(Math.random() * 3)];

            setComputerChoice(computerSelection);
            setPlayerChoice(playerSelection);

            let result = getResult(playerSelection, computerSelection);

            if (result.includes('win')) {
                playerScore++;
            } else if (result.includes('lose')) {
                computerScore++;
            }
            renderScore();
            showMessage(result, checkGameOver());
        }
    };

    const showMessage = (...msgs: any[]) => {
        if (!isAnimating) {
            msgs.forEach((msg) => {
                if (msg !== '') {
                    textQueue.push(msg);
                }
            });
            // pokemonViewRef.current?.dispatchEvent(animateTextDoneEvent)
        }
    };

    const renderScore = () => {
        // pokemonPlayerScoreRenderRef.style.width = `${((1 - playerScore / 5) * 100).toFixed(0)}%`;
        // pokemonComputerScoreRenderRef.style.width = `${((1 - computerScore / 5) * 100).toFixed(0)}%`;
    };

    const handleFireButtonClick = () => {
        playRound('fire');
    };

    const handleWaterButtonClick = () => {
        playRound('water');
    };

    const handleGrassButtonClick = () => {
        playRound('grass');
    };

    const handleStatusButtonClick = () => {
        if (!isGameEnding) {
            showMessage(`Player: ${playerScore} Computer: ${computerScore}`);
        }
    };

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h1 className='main-title' id='pokemon-title'>
                        Pokemon Battle Arcade
                    </h1>
                    <div className='pokemon-container'>
                        <div
                            className={
                                !isPlaying
                                    ? 'pokemon-view'
                                    : 'pokemon-view init'
                            }
                            ref={pokemonViewRef}
                        >
                            <div className='pokemon-images'>
                                {/* Scene */}
                                <img
                                    className='pokemon-scene'
                                    src={scenePath}
                                ></img>
                                {/* Computer */}
                                <div className='pokemon-computer-tag-group'>
                                    <span className='pokemon-computer-tag-name'></span>
                                    <div className='pokemon-computer-tag-score-outer'>
                                        <div
                                            className='pokemon-computer-tag-score'
                                            ref={pokemonComputerScoreRenderRef}
                                        ></div>
                                    </div>
                                    <img
                                        className='pokemon-computer-tag'
                                        src={computerTagPath}
                                    ></img>
                                </div>
                                {/* Computer Pokemon + Move */}
                                <img
                                    className='pokemon-choice pokemon-computer-choice'
                                    src={
                                        computerChoice === 'fire'
                                            ? firePath
                                            : computerChoice === 'water'
                                              ? waterPath
                                              : grassPath
                                    }
                                    ref={pokemonComputerChoiceRef}
                                ></img>
                                <img
                                    className='pokemon-computer'
                                    src={computerPath}
                                    ref={pokemonComputerImageRef}
                                ></img>
                                {/* Player */}
                                <div className='pokemon-player-tag'>
                                    <span className='pokemon-player-tag-name'></span>
                                    <div className='pokemon-player-tag-score-outer'>
                                        <div
                                            className='pokemon-player-tag-score'
                                            ref={pokemonPlayerScoreRenderRef}
                                        ></div>
                                    </div>
                                    <img
                                        className='pokemon-player-tag'
                                        src={playerTagPath}
                                    ></img>
                                </div>
                                {/* Player Pokemon + Move */}
                                <img
                                    className='pokemon-choice pokemon-player-choice'
                                    src={
                                        playerChoice === 'fire'
                                            ? firePath
                                            : playerChoice === 'water'
                                              ? waterPath
                                              : grassPath
                                    }
                                    ref={pokemonPlayerChoiceRef}
                                ></img>
                                <img
                                    className='pokemon-player'
                                    src={playerPath}
                                    ref={pokemonPlayerImageRef}
                                ></img>
                                {/* Action Bar */}
                                <div className='pokemon-action-bar'>
                                    <div
                                        className='pokemon-console'
                                        ref={pokemonConsoleRef}
                                    ></div>
                                    <div className='pokemon-choices'>
                                        <button
                                            className='fire-btn'
                                            onClick={handleFireButtonClick}
                                        >
                                            Flamethrower
                                        </button>
                                        <button
                                            className='water-btn'
                                            onClick={handleWaterButtonClick}
                                        >
                                            Water Pulse
                                        </button>
                                        <button
                                            className='grass-btn'
                                            onClick={handleGrassButtonClick}
                                        >
                                            Leaf Blade
                                        </button>
                                        <button
                                            className='status-btn'
                                            onClick={handleStatusButtonClick}
                                        >
                                            Battle Status
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pokemon-controller'>
                            <div className='pokemon-control-btns'>
                                <button
                                    id='volume-btn'
                                    className='pokemon-control-btn'
                                    onClick={handleVolumeClick}
                                >
                                    <FontAwesomeIcon
                                        icon={
                                            soundOn
                                                ? faVolumeHigh
                                                : faVolumeMute
                                        }
                                    />
                                </button>
                                <button
                                    id='power-btn'
                                    className='pokemon-control-btn'
                                    onClick={handlePowerClick}
                                >
                                    <FontAwesomeIcon icon={faPowerOff} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default FighterPage;
