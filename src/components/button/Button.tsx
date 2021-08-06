import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  extendedClass?: string;
  to: string;
}

const Button = ({
  children,
  onClick,
  extendedClass = '',
  to = '',
}: ButtonProps): ReactElement => {
  const customStyles = extendedClass || styles.button;
  return (
    <Link to={to} onClick={onClick} className={customStyles}>
      {children}
    </Link>
  );
};

export default Button;
