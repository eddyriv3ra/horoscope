import React from 'react';

import styles from './progressBar.module.scss';

interface ProgressBarProps {
  index: number;
  description?: string;
}

const ProgressBar = ({
  index,
  description = '',
}: ProgressBarProps): React.ReactElement => {
  const screens = ['gender', 'data', 'zodiac'];
  return (
    <div className={styles.container}>
      <div className={styles.progressBarContainer}>
        <div className={styles.horizontalLine} />
        {screens.map((_, i) => {
          const classes =
            index < i
              ? styles.progressBar
              : `${styles.progressBar} ${styles.fill}`;
          return <div className={classes} />;
        })}
      </div>
      <h3 className={styles.description}>{description}</h3>
    </div>
  );
};

export default ProgressBar;
