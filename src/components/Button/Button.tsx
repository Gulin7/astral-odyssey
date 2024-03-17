import PropTypes from 'prop-types'
import './Button.css'

const Button = (
    {text}: {text: string},
    {onClickFunction}: {onClickFunction?: () => void},
) => {
    return (
        <div>
            <button className='btn' onClick={onClickFunction}>
                {text}
            </button>
        </div>
    )
}

Button.defaultProps = {
    text: 'Button',
    onClickFunction: () => console.log('Click'),
}

Button.prototype = {
    text: PropTypes.string,
    onClickFunction: PropTypes.func,
}

export default Button
