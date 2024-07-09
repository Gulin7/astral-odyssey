import React from 'react';
import {mineColor} from '../../utils/Minesweeper/MinesweeperColor';
import Circle from '../MinesweeperCircle/MinesweeperCircle';

interface CellProps {
    details: {
        revealed: boolean;
        value: number | string;
        x: number;
        y: number;
        flagged: boolean;
    };
    updateFlag: (
        e: React.MouseEvent<HTMLDivElement>,
        x: number,
        y: number,
    ) => void;
    revealCell: (x: number, y: number) => void;
    allNonMinesRevealed: boolean;
}

const Cell: React.FC<CellProps> = ({
    details,
    updateFlag,
    revealCell,
    allNonMinesRevealed,
}) => {
    const cellstyle: React.CSSProperties = {
        background: details.revealed
            ? details.value === 'X'
                ? mineColor()
                : bombChexPattern(details.x, details.y)
            : chexPattern(details.x, details.y),
        color: numColorCode(details.value),
    };

    const handleClick = () => {
        if (!details.revealed && !details.flagged) {
            revealCell(details.x, details.y);
        }
    };

    return (
        <div
            onContextMenu={(e) => {
                e.preventDefault();
                updateFlag(e, details.x, details.y);
            }}
            onClick={handleClick}
            style={cellstyle}
            className='cellStyle'
        >
            {!details.revealed && details.flagged ? (
                '🚩'
            ) : details.revealed && details.value !== 0 ? (
                details.value === 'X' ? (
                    <Circle />
                ) : (
                    details.value
                )
            ) : (
                ''
            )}

            {allNonMinesRevealed &&
                !details.revealed &&
                details.value !== 'X' && (
                    <div className='youWonMessage'>You've won!</div>
                )}
        </div>
    );
};

const bombChexPattern = (x: number, y: number): string => {
    return (x + y) % 2 === 0 ? '#e5c29f' : '#d7b899';
};

const chexPattern = (x: number, y: number): string => {
    return (x + y) % 2 === 0 ? '#aad751' : '#a2d249';
};

const numColorCode = (num: number | string): string => {
    switch (num) {
        case 1:
            return '#1976d2';
        case 2:
            return '#388d3c';
        case 3:
            return '#d33030';
        case 4:
            return '#7c21a2';
        case 5:
        case 6:
            return '#1976d2';
        default:
            return 'white';
    }
};

export default Cell;
