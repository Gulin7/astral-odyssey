import {useEffect, useState} from 'react';
import createBoard from '../../utils/Minesweeper/CreateMinesweeperBoard';
import {revealed} from '../../utils/Minesweeper/MinesweeperReveal';
import Cell from '../MinesweeperCell/MinesweeperCell';
import Modal from '../MinesweeperModal/MinesweeperModal';
import Timer from '../MinesweeperTime/MinesweeperTimer';

const Board = () => {
    const [grid, setGrid] = useState<any[][]>([]);
    const [nonMineCount, setNonMineCount] = useState(0);
    const [mineLocations, setMineLocations] = useState<number[][]>([]);
    const [gameOver, setGameOver] = useState(false);
    const [allNonMinesRevealed, setAllNonMinesRevealed] = useState(false);

    // ComponentDidMount
    useEffect(() => {
        freshBoard();
    }, []);

    const freshBoard = () => {
        const newBoard = createBoard(10, 15, 15);
        setNonMineCount(10 * 15 - 15);
        setMineLocations(newBoard.mineLocation);
        setGrid(newBoard.board);
        setAllNonMinesRevealed(false);
        setGameOver(false);
    };

    const restartGame = () => {
        freshBoard();
    };

    const handleGameWon = () => {
        setAllNonMinesRevealed(true);
    };

    const updateFlag = (
        e: {preventDefault: () => void},
        x: string | number,
        y: string | number,
    ) => {
        e.preventDefault();
        let newGrid = JSON.parse(JSON.stringify(grid));
        newGrid[x][y].flagged = true;
        setGrid(newGrid);
    };

    const revealCell = (x: number, y: number) => {
        if (grid[x][y].revealed || gameOver) {
            return;
        }
        let newGrid = JSON.parse(JSON.stringify(grid));
        if (newGrid[x][y].value === 'X') {
            for (let i = 0; i < mineLocations.length; i++) {
                newGrid[mineLocations[i][0]][mineLocations[i][1]].revealed =
                    true;
            }
            setGrid(newGrid);
            setGameOver(true);
        } else {
            let newRevealedBoard = revealed(newGrid, x, y, nonMineCount);
            if (newRevealedBoard) {
                setGrid(newRevealedBoard.arr);
                setNonMineCount(newRevealedBoard.newNonMinesCount);
            }
            if (newRevealedBoard && newRevealedBoard.newNonMinesCount === 0) {
                setGameOver(true);
                handleGameWon(); // Trigger game won condition
            }
        }
    };

    return (
        <div>
            <p>Minesweeper</p>
            <Timer />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                }}
            >
                {gameOver && <Modal restartGame={restartGame} />}
                {grid.map((singleRow, index1) => {
                    return (
                        <div style={{display: 'flex'}} key={index1}>
                            {singleRow.map((singleBlock, index2) => {
                                return (
                                    <Cell
                                        key={`${index1}-${index2}`}
                                        details={singleBlock}
                                        updateFlag={updateFlag}
                                        revealCell={revealCell}
                                        allNonMinesRevealed={
                                            allNonMinesRevealed
                                        }
                                    />
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Board;
