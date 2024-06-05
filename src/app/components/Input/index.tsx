import React from "react";
import styles from "./styles.module.css";

type Props = {
  label: string;
  type: string;
  name: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  isForLogin?: boolean;
  className?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string
};

const Input: React.FC<Props> = ({
  label = "",
  type,
  name,
  id,
  onChange,
  value = "",
  isForLogin = false,
  className = "",
  onBlur,
}) => {
  return (
    <>
      <div className={styles.inputContainer}>
        {isForLogin ? (
          <label className={styles.labelStyle} htmlFor={label}>
            {label}
          </label>
        ) : (
          ""
        )}
        <input
          onChange={onChange}
          onBlur={onBlur}
          className={`${styles.inputStyle} ${className}`}
          placeholder={isForLogin ? "" : label}
          type={type}
          value={value}
          name={name}
          id={id}
        />
      </div>
    </>
  );
};

export default Input;
