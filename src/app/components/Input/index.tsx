import React from 'react'
import styles from "./styles.module.css"

type Props = {
    label: string,
    type: string,
    name: string,
    id: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    value: string | number,
    isForLogin?: boolean,
    className?: string,
}

const Input: React.FC<Props> = ({label="", type, name,  id, onChange, value="", isForLogin=false, className=""}) => {
  return (
    <>
        <div className={styles.inputContainer}>
            {isForLogin ? (<label className={styles.labelStyle} htmlFor={label}>{label}</label>
            ): ""}
            <input onChange={onChange} className={`${styles.inputStyle} ${className}`} placeholder={isForLogin ? "" : label} type={type} value={value} name={name} id={id} />
        </div>
    </>

  )
}

export default Input
