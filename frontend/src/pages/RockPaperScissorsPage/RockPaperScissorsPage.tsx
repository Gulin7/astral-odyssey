import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './RockPaperScissorsPage.css';

// Import images
import PaperImage from '../../assets/rps/paper.png';
import RockImage from '../../assets/rps/rock.png';
import ScissorsImage from '../../assets/rps/scissors.png';

const choices = ['Rock', 'Paper', 'Scissors'];

const choiceImages: {[key: string]: string} = {
    Rock: RockImage,
    Paper: PaperImage,
    Scissors: ScissorsImage,
};
const RockPaperScissorsPage = () => {
    const navigate = useNavigate();
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);
    const [roundWinner, setRoundWinner] = useState('');
    const [targetScore, setTargetScore] = useState(3);
    const [gameStarted, setGameStarted] = useState(false);
    const [playerChoice, setPlayerChoice] = useState('');
    const [computerChoice, setComputerChoice] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    const handleChoiceClick = (choice: string) => {
        const computerChoice = getRandomChoice();
        setPlayerChoice(choice);
        setComputerChoice(computerChoice);

        const winner = determineWinner(choice, computerChoice);

        if (winner === 'Player') {
            setPlayerScore(playerScore + 1);
        } else if (winner === 'Computer') {
            setComputerScore(computerScore + 1);
        }

        setRoundWinner(
            winner === 'Draw' ? "It's a Draw!" : `${winner} wins the round!`,
        );
    };

    const handleTargetScoreClick = (score: number) => {
        setTargetScore(score);
        setGameStarted(true);
        setPlayerScore(0);
        setComputerScore(0);
        setRoundWinner('');
        setPlayerChoice('');
        setComputerChoice('');
    };

    const getRandomChoice = () => {
        return choices[Math.floor(Math.random() * choices.length)];
    };

    const determineWinner = (playerChoice: string, computerChoice: string) => {
        if (playerChoice === computerChoice) return 'Draw';
        if (
            (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
            (playerChoice === 'Paper' && computerChoice === 'Rock') ||
            (playerChoice === 'Scissors' && computerChoice === 'Paper')
        ) {
            return 'Player';
        } else {
            return 'Computer';
        }
    };

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Welcome to Astral Odyssey!</h2>
                    <div
                        className='main-description'
                        data-testid='home-description-test-id'
                    >
                        This is a game where you can create your own character
                        and explore the world of Astral Odyssey.
                    </div>
                    <div className='rps-game'>
                        {!gameStarted ? (
                            <div className='rps-target-score'>
                                <h3>Choose target score to start the game:</h3>
                                <div className='rps-circle-arrows'>
                                    <div className='rps-circle-arrow'>
                                        <img
                                            src={ScissorsImage}
                                            className='rps-scissors-image'
                                            alt='Scissors'
                                        />
                                        <div className='arrow-up-left'></div>
                                    </div>
                                    <div className='rps-circle-arrow'>
                                        <img
                                            className='rps-paper-image'
                                            src={PaperImage}
                                            alt='Paper'
                                        />
                                        <div className='arrow-down-right'></div>
                                    </div>
                                    <div className='rps-circle-arrow'>
                                        <img
                                            className='rps-rock-image'
                                            src={RockImage}
                                            alt='Rock'
                                        />
                                        <div className='arrow-left'></div>
                                    </div>
                                </div>
                                <button
                                    className='button button-dark'
                                    onClick={() => handleTargetScoreClick(3)}
                                >
                                    First to 3
                                </button>
                                <button
                                    className='button button-dark'
                                    onClick={() => handleTargetScoreClick(5)}
                                >
                                    First to 5
                                </button>
                                <button
                                    className='button button-dark'
                                    onClick={() => handleTargetScoreClick(7)}
                                >
                                    First to 7
                                </button>
                            </div>
                        ) : (
                            <>
                                {/* <div className='rps-scoreboard'>
                                    <p>Player Score: {playerScore}</p>
                                    <p>Computer Score: {computerScore}</p>
                                </div> */}
                                <div className='rps-round-winner'>
                                    {roundWinner}
                                </div>
                                <div className='rps-game-container'>
                                    <div className='rps-player'>
                                        <p>Player Score: {playerScore}</p>
                                        <h4>Player's Choice</h4>
                                        <img
                                            src={choiceImages[playerChoice]}
                                            alt={playerChoice}
                                            className='rps-choice-image'
                                        />
                                    </div>
                                    <div className='rps-choices'>
                                        {choices.map((choice) => (
                                            <button
                                                key={choice}
                                                className='button button-dark'
                                                onClick={() =>
                                                    handleChoiceClick(choice)
                                                }
                                                disabled={
                                                    playerScore >=
                                                        targetScore ||
                                                    computerScore >= targetScore
                                                }
                                            >
                                                {choice}
                                            </button>
                                        ))}
                                    </div>
                                    <div className='rps-computer'>
                                        <p>Computer Score: {computerScore}</p>
                                        <h4>Computer's Choice</h4>
                                        <img
                                            src={choiceImages[computerChoice]}
                                            alt={computerChoice}
                                            className='rps-choice-image'
                                        />
                                    </div>
                                </div>
                                {playerScore >= targetScore ||
                                computerScore >= targetScore ? (
                                    <div className='rps-game-over'>
                                        <h3>
                                            {playerScore >= targetScore
                                                ? 'Player wins the game!'
                                                : 'Computer wins the game!'}
                                        </h3>
                                        <button
                                            className='button button-dark'
                                            onClick={() =>
                                                setGameStarted(false)
                                            }
                                        >
                                            Play Again
                                        </button>
                                    </div>
                                ) : null}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default RockPaperScissorsPage;
