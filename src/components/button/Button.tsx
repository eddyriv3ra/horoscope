import React, { ReactElement } from 'react';

import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  extendedClass?: string;
}

const Button = ({
  children,
  onClick,
  extendedClass = '',
}: ButtonProps): ReactElement => {
  const customStyles = extendedClass || styles.button;
  return (
    <button type="button" onClick={onClick} className={customStyles}>
      {children}
    </button>
  );
};

export default Button;
