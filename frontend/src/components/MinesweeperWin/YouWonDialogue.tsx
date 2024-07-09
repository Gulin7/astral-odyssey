import {Button, Dialog, DialogContent, DialogTitle} from '@mui/material';
import React from 'react';

interface YouWonDialogProps {
    open: boolean;
    onClose: () => void;
}

const YouWonDialog: React.FC<YouWonDialogProps> = ({open, onClose}) => {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>You've Won!</DialogTitle>
            <DialogContent>
                <p>
                    Congratulations! You've successfully uncovered all non-bomb
                    cells.
                </p>
                <Button onClick={onClose} color='primary' variant='contained'>
                    Close
                </Button>
            </DialogContent>
        </Dialog>
    );
};

export default YouWonDialog;
