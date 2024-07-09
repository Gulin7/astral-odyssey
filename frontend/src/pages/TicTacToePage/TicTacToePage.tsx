import {useEffect, useState} from 'react';
import TicTacToeCell from '../../components/TicTacToeCell/TicTacToeCell';
import MainLayout from '../../layouts/mainLayout/MainLayout';
import './TicTacToePage.css';

const initialBoard: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

const TicTacToePage = () => {
    const [board, setBoard] = useState(initialBoard);
    const [turn, setTurn] = useState('X');
    const [winningText, setWinningText] = useState('');

    useEffect(() => {
        if (turn === 'O' && !winningText) {
            makeComputerMove();
        }
    }, [turn, board, winningText]);

    const makeComputerMove = () => {
        const winningMove = findWinningMove(board, 'O');
        if (winningMove) {
            const [row, col] = winningMove;
            setTimeout(() => changeTurn(row, col), 500);
            return;
        }

        const emptyCells: [number, number][] = [];
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    emptyCells.push([i, j]);
                }
            }
        }

        if (emptyCells.length > 0) {
            const [row, col] =
                emptyCells[Math.floor(Math.random() * emptyCells.length)];
            setTimeout(() => changeTurn(row, col), 500);
        }
    };

    const findWinningMove = (
        board: string[][],
        player: string,
    ): [number, number] | null => {
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (board[i][j] === '') {
                    board[i][j] = player;
                    if (checkForWin(board)) {
                        board[i][j] = '';
                        return [i, j];
                    }
                    board[i][j] = '';
                }
            }
        }
        return null;
    };

    const changeTurn = (row: number, col: number) => {
        if (board[row][col] !== '' || winningText) return;

        const newBoard = board.map((r, i) =>
            r.map((c, j) => (i === row && j === col ? turn : c)),
        );
        setBoard(newBoard);

        if (checkForWin(newBoard)) {
            if (turn === 'X') setWinningText(`Player wins!`);
            else setWinningText(`Computer wins!`);
        } else if (checkForDraw(newBoard)) {
            setWinningText(`It's a draw!`);
        } else {
            setTurn(turn === 'X' ? 'O' : 'X');
        }
    };

    const checkForDraw = (board: string[][]) => {
        return board.flat().every((cell) => cell !== '');
    };

    const checkForWin = (board: string[][]) => {
        for (let i = 0; i < 3; i++) {
            if (
                board[i][0] === board[i][1] &&
                board[i][1] === board[i][2] &&
                board[i][0] !== ''
            ) {
                return true;
            }
            if (
                board[0][i] === board[1][i] &&
                board[1][i] === board[2][i] &&
                board[0][i] !== ''
            ) {
                return true;
            }
        }
        if (
            board[0][0] === board[1][1] &&
            board[1][1] === board[2][2] &&
            board[0][0] !== ''
        ) {
            return true;
        }
        if (
            board[0][2] === board[1][1] &&
            board[1][1] === board[2][0] &&
            board[0][2] !== ''
        ) {
            return true;
        }
        return false;
    };

    const restartGame = () => {
        setBoard(initialBoard);
        setTurn('X');
        setWinningText('');
    };

    return (
        <MainLayout>
            <div className='main-page'>
                <div className='main-page-container'>
                    <h2 className='main-title'>Tic Tac Toe</h2>
                    <div className='winning-text'>{winningText}</div>
                    <div className='ticTacToe-board'>
                        {board.map((row, rowIndex) => (
                            <div key={rowIndex} className='ticTacToe-row'>
                                {row.map((cell, colIndex) => (
                                    <TicTacToeCell
                                        key={colIndex}
                                        row={rowIndex}
                                        col={colIndex}
                                        currentState={cell}
                                        changeTurn={changeTurn}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={restartGame}
                        className='button button-dark'
                    >
                        Restart
                    </button>
                </div>
            </div>
        </MainLayout>
    );
};

export default TicTacToePage;
