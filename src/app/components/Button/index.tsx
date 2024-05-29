'use client'
import React from 'react'
import styles from './styles.module.css'

type ButtonProps = {
    onClick: () => void;
    variant?: 'primary' | 'secondary';
    text?: string;
    id?: string;
  }

  const Button: React.FC<ButtonProps> = ({ onClick, variant, text}) => {

    return (
      <button onClick= {onClick} id='button' className={variant === "secondary" ?  styles.secondary : styles.primary }>
        {text}
      </button >
    );
  };
  
  export default Button