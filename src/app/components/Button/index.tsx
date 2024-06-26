'use client'
import React from 'react'
import styles from './styles.module.css'

type ButtonProps = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: 'primary' | 'secondary';
    text?: string;
    id?: string;
  }

  const Button: React.FC<ButtonProps> = ({ onClick, variant, text, id}) => {

    return (
      <button type='button' onClick= {onClick} id={id} className={variant === "secondary" ?  styles.secondary : styles.primary }>
        {text}
      </button >
    );
  };
  
  export default Button