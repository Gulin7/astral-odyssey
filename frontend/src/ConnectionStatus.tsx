/* eslint-disable no-unused-vars */
import {Alert, Dialog, DialogTitle} from '@mui/material';
import {useEffect, useState} from 'react';

function ConnectionStatus() {
    const [isOnline, setIsOnline] = useState(true);
    const [isServerDown, setIsServerDown] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handleOnline = () => setIsOnline(true);
        const handleOffline = () => setIsOnline(false);

        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);

        return () => {
            window.removeEventListener('online', handleOnline);
            window.removeEventListener('offline', handleOffline);
        };
    }, []);

    useEffect(() => {
        const checkServerStatus = async () => {
            try {
                const URL = 'http://localhost:5000/checkConnection';
                // const URL = 'http://3.79.63.224:5000/api/characters';

                await fetch(URL);
                setIsServerDown(false);
            } catch (error) {
                setIsServerDown(true);
            }
        };

        checkServerStatus();

        const interval = setInterval(checkServerStatus, 10000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (!isOnline || isServerDown) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [isOnline, isServerDown]);

    return (
        <Dialog open={open} onClose={() => setOpen(false)}>
            <DialogTitle>
                {!isOnline ? 'No internet connection!' : 'Server is down!'}
            </DialogTitle>
            <Alert severity='warning'>
                {!isOnline ? 'No internet connection!' : 'Server is down!'}
            </Alert>
        </Dialog>
    );
}

export default ConnectionStatus;
