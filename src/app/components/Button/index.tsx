import React from 'react'

interface ButtonProps {
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    text?: string;
    id?: string;
  
  }

  const Button: React.FC<ButtonProps> = ({ onClick, variant = 'primary', text, id}) => {

    return (
      <button id={id} onClick={onClick} className={`button  ${variant}`}>
        {text}
      </button >
    );
  };
  
  export default Button