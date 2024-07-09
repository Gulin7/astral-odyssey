import TryAgainLogo from '../../assets/TwoZeroFourEight/try-again.gif';
import {Board} from '../../utils/TwoZeroFourEight/TwoZeroFourEight';

const GameOverlay = ({
    onRestart,
    board,
}: {
    onRestart: () => void;
    board: Board;
}) => {
    if (board.hasWon()) {
        return <div className='tile2048'></div>;
    } else if (board.hasLost()) {
        return (
            <div className='gameOver' onClick={onRestart}>
                <img
                    src={TryAgainLogo}
                    alt='Try Again'
                    style={{
                        width: '100%',
                        height: '100%',
                        cursor: 'pointer',
                    }}
                ></img>
            </div>
        );
    }
    return null;
};

export default GameOverlay;
