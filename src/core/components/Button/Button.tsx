import React from 'react';

interface ButtonProps {
    text: string; 
    onClick?: () => void; 
    type?: 'button' | 'submit' | 'reset'; 
    className?: string; 
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, type = 'button', className, disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`text-white text-center font-inter text-base font-medium leading-[28px] tracking-[-0.4px] bg-app-black rounded-lg w-full px-10 py-[10px] ${className}`}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

export default Button;
