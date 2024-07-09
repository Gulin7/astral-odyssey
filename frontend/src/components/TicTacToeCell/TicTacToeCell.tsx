import {useEffect, useState} from 'react';
import './TicTacToeCell.css';

interface TicTacToeCellProps {
    row: number;
    col: number;
    currentState: string;
    changeTurn: (row: number, col: number) => void;
}

const TicTacToeCell: React.FC<TicTacToeCellProps> = ({
    row,
    col,
    currentState,
    changeTurn,
}) => {
    const [cell, setCell] = useState(currentState);

    useEffect(() => {
        setCell(currentState);
    }, [currentState]);

    const handleClick = () => {
        if (cell === '') {
            changeTurn(row, col);
        }
    };

    return (
        <div
            className={`ticTacToe-cell ${cell === 'X' ? 'player' : cell === 'O' ? 'computer' : ''}`}
            onClick={handleClick}
        >
            {cell}
        </div>
    );
};

export default TicTacToeCell;
