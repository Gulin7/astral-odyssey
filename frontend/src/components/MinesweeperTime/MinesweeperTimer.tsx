import {useEffect, useState} from 'react';

let timeIntervalId: NodeJS.Timeout;

const Timer = () => {
    const [time, setTime] = useState<number>(0);

    useEffect(() => {
        const incrementTime = () => {
            timeIntervalId = setTimeout(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        };

        incrementTime();
    }, [time]);

    console.log(timeIntervalId);

    return (
        <div style={{color: 'white', fontSize: 20, background: 'maroon'}}>
            <span role='img' aria-label='clock' style={{paddingRight: 10}}>
                ⏰
            </span>
            {time}
        </div>
    );
};

export default Timer;
