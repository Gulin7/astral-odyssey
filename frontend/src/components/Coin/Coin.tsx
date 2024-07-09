import './Coin.css';

const Coin = (props: any) => {
    return <img className='coin-img' src={props.face} alt={`${props.face}`} />;
};

export default Coin;
