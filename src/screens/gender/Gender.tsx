import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Button from '../../components/button';
import Header from '../../components/header';
import ProgressBar from '../../components/progressBar';
import { setGender } from '../../store/actions/userActions';
import { getGender } from '../../store/selectors/userSelectors';
import { male, female, unknown } from '../../utils/imgs';
import styles from './gender.module.scss';

const GenderScreen = (): React.ReactElement => {
  const [canContinue, setCanContinue] = React.useState(false);
  const history = useHistory();
  const gender = useSelector(getGender);
  const dispatch = useDispatch();

  const handleSelect = (e: any) => {
    dispatch(setGender(e.target.name));
    setCanContinue(true);
  };

  const handleSubmit = () => {
    if (gender) {
      history.push('/form');
    }
  };

  return (
    <div>
      <Header title="Tu Género" />
      <div className={styles.container}>
        <ProgressBar index={0} description="INGRESA TU GÉNERO" />
        <div className={styles.iconsContainer}>
          <input
            type="image"
            name="male"
            src={male}
            alt="male"
            className={
              gender === 'male'
                ? `${styles.genderIcons} ${styles.selected}`
                : styles.genderIcons
            }
            onClick={handleSelect}
          />
          <input
            type="image"
            name="unknown"
            src={unknown}
            alt="unknown"
            className={
              gender === 'unknown'
                ? `${styles.genderIcons} ${styles.selected}`
                : styles.genderIcons
            }
            onClick={handleSelect}
          />
          <input
            type="image"
            name="female"
            src={female}
            alt="female"
            className={
              gender === 'female'
                ? `${styles.genderIcons} ${styles.selected}`
                : styles.genderIcons
            }
            onClick={handleSelect}
          />
        </div>
        <Button disabled={!canContinue} onClick={handleSubmit} to="/form">
          INGRESAR
        </Button>
      </div>
    </div>
  );
};

export default GenderScreen;
