import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import styles from './button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  extendedClass?: string;
  to?: string;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  extendedClass = '',
  disabled,
  to = '',
}: ButtonProps): ReactElement => {
  const customStyles = extendedClass || styles.button;

  const handleClick = disabled
    ? (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void =>
      event.preventDefault()
    : onClick;

  return (
    <Link to={to} onClick={handleClick} className={customStyles}>
      {children}
    </Link>
  );
};

export default Button;
