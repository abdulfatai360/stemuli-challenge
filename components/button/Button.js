import './Button.css';

function Button({
    children,
    className = '',
    type = 'button',
    disabled,
    onClick,
}) {
    return (
        <button
            className={['button', className].join(' ')}
            type={type}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

export default Button;
