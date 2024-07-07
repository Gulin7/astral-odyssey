const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image chat-avatar'>
                <img src='' alt=''></img>
            </div>
            <div className='chat-bubble text-white bg-blue500'></div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'></div>
        </div>
    );
};

export default Message;
