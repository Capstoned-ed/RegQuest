import React from 'react';

const Button = ({ children, onClick, className, style, disabled, type = 'button' }) => {
    return (
        <button 
            type={type}
            className={className} 
            onClick={onClick} 
            style={style}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
