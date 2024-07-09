import {useState} from 'react';
import useEventTZFE from '../../hooks/useEventTZFE';
import {Board} from '../../utils/TwoZeroFourEight/TwoZeroFourEight';
import CellComponent from '../CellComponent/CellComponent';
import GameOverlay from '../GameOverlay/GameOverlay';
import TileComponent from '../TileComponent/TileComponent';

const BoardView = () => {
    const [board, setBoard] = useState(new Board());

    const handleKeyDown = (event: {keyCode: number}) => {
        if (board.hasWon()) {
            return;
        }
        if (event.keyCode >= 37 && event.keyCode <= 40) {
            let direction = event.keyCode - 37;
            let boardClone = Object.assign(
                Object.create(Object.getPrototypeOf(board)),
                board,
            );
            let newBoard = boardClone.move(direction);
            setBoard(newBoard);
        }
    };

    useEventTZFE('keydown', handleKeyDown);

    const cells = board.cells.map((row, rowIndex) => {
        return (
            <div key={rowIndex}>
                {row.map((col, colIndex) => {
                    return (
                        <CellComponent key={rowIndex * board.size + colIndex} />
                    );
                })}
            </div>
        );
    });

    const tiles = board.tiles
        .filter((tile) => tile.value !== 0)
        .map((tile, index) => {
            return <TileComponent tile={tile} key={index} />;
        });

    const resetGame = () => {
        setBoard(new Board());
    };

    return (
        <div>
            <div className='details-box'>
                <div className='resetButton' onClick={resetGame}>
                    New Game
                </div>
                <div className='score-box'>
                    <div className='score-header'>SCORE</div>
                    <div> {board.score}</div>
                </div>
            </div>
            <div className='board'>
                {cells}
                {tiles}
                <GameOverlay onRestart={resetGame} board={board} />
            </div>
        </div>
    );
};

export default BoardView;
