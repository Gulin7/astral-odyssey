import React, {useEffect, useState} from 'react';

interface ModalProps {
    restartGame: () => void;
}

const Modal: React.FC<ModalProps> = ({restartGame}) => {
    const [render, setRender] = useState<boolean>(false);

    useEffect(() => {
        setTimeout(() => {
            setRender(true);
        }, 1000);
    }, []);

    return (
        <div
            style={{
                opacity: render ? 1 : 0,
                height: '100%',
                width: '100%',
                position: 'absolute',
                background: 'rgba(0,0,0,0.3)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div>
                <div id='gameOverImage'></div>
                <div
                    className='tryAgain'
                    onClick={() => restartGame()}
                    style={{
                        cursor: 'pointer',
                        background: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        marginTop: '10px',
                        textAlign: 'center',
                    }}
                >
                    Try Again
                </div>
            </div>
        </div>
    );
};

export default Modal;
