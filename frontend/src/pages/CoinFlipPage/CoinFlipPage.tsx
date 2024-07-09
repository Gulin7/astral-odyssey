import {Component} from 'react';
import './CoinFlipPage.css';

import tailsImage from '../../assets/coin-tail.png';
import headsImage from '../../assets/coin.png';
import Coin from '../../components/Coin/Coin';
import MainLayout from '../../layouts/mainLayout/MainLayout';

interface State {
    toss: 'heads' | 'tails' | null;
    heads: number;
    tails: number;
    guess: 'heads' | 'tails' | null;
    message: string | null;
    flipAnimation: boolean;
}

class CoinToss extends Component<{}, State> {
    state: State = {
        toss: null,
        heads: 0,
        tails: 0,
        guess: null,
        message: null,
        flipAnimation: false,
    };

    onClickToss = (guess: 'heads' | 'tails') => {
        const tossResult = Math.floor(Math.random() * 2);
        const result = tossResult === 0 ? 'heads' : 'tails';

        this.setState({toss: result, guess, flipAnimation: true});

        setTimeout(() => {
            if (guess === result) {
                this.setState((prevState) => ({
                    ...prevState,
                    [result]: prevState[result] + 1,
                    message: 'You guessed correctly!',
                }));
            } else {
                this.setState({message: 'Sorry, wrong guess!'});
            }
            this.setState({flipAnimation: false});
        }, 1000);
    };

    render() {
        const {toss, heads, tails, message, flipAnimation} = this.state;
        const total = heads + tails;

        return (
            <MainLayout>
                <div className='main-page'>
                    <div className='main-page-container'>
                        <h1 className='main-title'>Coin flip</h1>
                        <div className='main-descriptionr'>
                            Flip the coin you gambling addict
                        </div>
                        <div className='coinflip-container'>
                            <div className='coin-image-container'>
                                <div
                                    className={`flip-coin ${flipAnimation ? 'flip-animation' : ''}`}
                                >
                                    <div className='flip-coin-inner'>
                                        <div className='flip-coin-front'>
                                            <Coin
                                                face={headsImage}
                                                className='coin-image'
                                                alt='heads'
                                            />
                                        </div>
                                        <div className='flip-coin-back'>
                                            <Coin
                                                face={
                                                    toss === 'tails'
                                                        ? tailsImage
                                                        : headsImage
                                                }
                                                className='coin-image'
                                                alt='tails'
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='coinflip-score-container'>
                                <div className='coinflip-score-row'>
                                    <div className='coinflip-score'>{`Total: ${total}`}</div>
                                    <div className='coinflip-score'>{`Heads: ${heads}`}</div>
                                    <div className='coinflip-score'>{`Tails: ${tails}`}</div>
                                </div>
                            </div>
                            <div className='button-container'>
                                <button
                                    className={`button button-light button-${toss === 'heads' ? 'selected' : 'normal'}`}
                                    onClick={() => this.onClickToss('heads')}
                                    disabled={flipAnimation}
                                >
                                    Heads
                                </button>
                                <button
                                    className={`button button-light button-${toss === 'tails' ? 'selected' : 'normal'}`}
                                    onClick={() => this.onClickToss('tails')}
                                    disabled={flipAnimation}
                                >
                                    Tails
                                </button>
                            </div>
                            {message && <p>{message}</p>}
                        </div>
                    </div>
                </div>
            </MainLayout>
        );
    }
}

export default CoinToss;
