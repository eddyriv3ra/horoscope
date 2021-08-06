import React from 'react';
import { useHistory } from 'react-router-dom';

import { backBtn } from '../../utils/imgs';
import styles from './header.module.scss';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps): React.ReactElement => {
  const { goBack } = useHistory();
  return (
    <div className={styles.header}>
      <input
        src={backBtn}
        type="image"
        alt="back button"
        className={styles.backBtn}
        onClick={goBack}
      />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
};

export default Header;
