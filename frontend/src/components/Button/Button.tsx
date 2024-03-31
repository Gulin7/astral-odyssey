import {ButtonProps} from '../../utils/types/ButtonProps.types';
import './Button.css';

const Button = (props: ButtonProps) => {
    return (
        <div>
            <button
                type={props.type}
                className={'button ' + (props.className ? props.className : '')}
                onClick={props.onClick}
                data-testid='button-test-id'
            >
                {props.buttonText}
            </button>
        </div>
    );
};

Button.defaultProps = {
    text: 'Button',
    onClickFunction: () => console.log('Click'),
};

export default Button;
