import React from 'react'
import styles from "./styles.module.css"

type Props = {
    label: string,
    type: string,
    name: string,
    id: string,
    onChange: () => void,
    value: string | number
}

const Input: React.FC<Props> = ({label, type, name,  id, onChange, value=""}) => {
  return (
    <>
        <div className={styles.inputContainer}>
            <label className={styles.labelStyle} htmlFor={label}>{label}</label>
            <input onChange={onChange} className={styles.inputStyle} type={type} value={value} name={name} id={id} />
        </div>
    </>

  )
}

export default Input
