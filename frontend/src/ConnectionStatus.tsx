/* eslint-disable no-unused-vars */
import {Alert} from '@mui/material';
import {useEffect, useState} from 'react';

function ConnectionStatus() {
    const [isOnline, setIsOnline] = useState(true);
    const [isServerDown, setIsServerDown] = useState(false);

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
                //const URL = 'http://localhost:5000';
                const URL = 'http://3.79.63.224:5000';

                await fetch(URL);
                setIsServerDown(false);
            } catch (error) {
                setIsServerDown(true);
            }
        };

        checkServerStatus();

        const interval = setInterval(checkServerStatus, 5000);

        return () => clearInterval(interval);
    }, []);

    if (!isOnline) {
        return <Alert severity='warning'>No internet connection!</Alert>;
    }

    if (isServerDown) {
        return <Alert severity='warning'>Server is down!</Alert>;
    }

    return null;
}

export default ConnectionStatus;
