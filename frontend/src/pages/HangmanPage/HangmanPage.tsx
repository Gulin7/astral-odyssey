import {useState} from 'react';

import phase0 from '../../assets/hangman/phase-0.png';
import phase1 from '../../assets/hangman/phase-1.png';
import phase2 from '../../assets/hangman/phase-2.png';
import phase3 from '../../assets/hangman/phase-3.png';
import phase4 from '../../assets/hangman/phase-4.png';
import phase5 from '../../assets/hangman/phase-5.png';
import phase6 from '../../assets/hangman/phase-6.png';

import MainLayout from '../../layouts/mainLayout/MainLayout';
import {randomWord} from '../../utils/HangmanWords/HangmanWords';

import './HangmanPage.css';

const HangmanPage = () => {
    const {maxWrong, images} = HangmanPage.defaultProps;
    const [nWrong, setNWrong] = useState(0);
    const [guessed, setGuessed] = useState(new Set());
    const [group, setGroup] = useState('random');
    const [answer, setAnswer] = useState(randomWord());
    const [gameStatus, setGameStatus] = useState('');

    const reset = () => {
        setNWrong(0);
        setGuessed(new Set());
        setAnswer(randomWord(group));
        setGameStatus('');
    };

    const guessedWord = () => {
        return answer.split('').map((ltr) => (guessed.has(ltr) ? ltr : '_'));
    };

    const handleGuess = (e: any) => {
        let ltr = e.target.value;
        const updatedSet = new Set([...guessed, ltr]);
        setGuessed(updatedSet);
        setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1));
    };

    const generateButtons = () => {
        return 'abcdefghijklmnopqrstuvwxyz '.split('').map((ltr) => (
            <button
                key={ltr}
                value={ltr}
                onClick={handleGuess}
                disabled={guessed.has(ltr) || gameStatus !== ''}
            >
                {ltr}
            </button>
        ));
    };

    const handleChange = (e: any) => {
        const {value} = e.target;
        setGroup(value);
        setAnswer(randomWord(value));
        setNWrong(0);
        setGuessed(new Set());
        setGameStatus('');
    };

    let alt = `${nWrong}/${maxWrong} guesses`;
    let isWinner = guessedWord().join('') === answer;
    let gameOver = nWrong >= maxWrong;

    if (isWinner && gameStatus === '') {
        setGameStatus('You win!');
    } else if (gameOver && gameStatus === '') {
        setGameStatus('You lose!');
    }

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Welcome to Astral Odyssey!</h2>
                    <div
                        className='main-description'
                        data-testid='home-description-test-id'
                    >
                        Win at hangman and earn some coins!
                    </div>
                    <div className='Hangman'>
                        <div className='Hangman-flex'>
                            <div className='Hangman-counter'>
                                <img
                                    src={images[nWrong]}
                                    alt={alt}
                                    style={{
                                        width: '200px',
                                        height: '400px',
                                    }}
                                />
                                <p>Guessed Wrong: {nWrong}</p>
                            </div>
                            <div>
                                <p className='Hangman-word'>
                                    {gameOver || isWinner
                                        ? answer
                                        : guessedWord()}
                                </p>
                                <div className='btns'>{generateButtons()}</div>
                            </div>
                            <div className='Hangman-reset'>
                                {gameStatus && (
                                    <div>
                                        <p>{gameStatus}</p>
                                        <button onClick={reset}>
                                            Play Again?
                                        </button>
                                    </div>
                                )}
                                <form>
                                    <label htmlFor='group'>Guess About: </label>
                                    <select
                                        name='group'
                                        id='group'
                                        value={group}
                                        onChange={handleChange}
                                        disabled={gameStatus !== ''}
                                    >
                                        <option value='random'>Random</option>
                                        <option value='colors'>Colors</option>
                                        <option value='countries'>
                                            Countries
                                        </option>
                                        <option value='animals'>Animals</option>
                                        <option value='fruit'>Fruits</option>
                                        <option value='vegetables'>
                                            Vegetables
                                        </option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

HangmanPage.defaultProps = {
    maxWrong: 6,
    images: [phase0, phase1, phase2, phase3, phase4, phase5, phase6],
};

export default HangmanPage;
