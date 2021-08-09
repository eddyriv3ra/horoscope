import React from 'react';

import styles from './textFieldInput.module.scss';

interface TextFieldInputProps {
  name: string;
  label: string;
  value: string;
  type: string;
  extendedClassLabel?: string;
  extendedClassInput?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldInput = ({
  name,
  label,
  value,
  type,
  extendedClassLabel,
  extendedClassInput,
  onChange,
}: TextFieldInputProps): React.ReactElement => {
  const a = 'lala';
  return (
    <div className={styles.container}>
      <span className={`${styles.label} ${extendedClassLabel}`}>{label}</span>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${extendedClassInput}`}
      />
    </div>
  );
};

export default TextFieldInput;
