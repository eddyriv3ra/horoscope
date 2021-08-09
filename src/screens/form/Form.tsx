import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import TextFieldInput from '../../components/TextFieldInput';
import Button from '../../components/button';
import Header from '../../components/header';
import ProgressBar from '../../components/progressBar';
import { setFormData } from '../../store/actions/userActions';
import {
  getBirthDate,
  getEmail,
  getName,
} from '../../store/selectors/userSelectors';
import styles from './form.module.scss';

const Form = (): React.ReactElement => {
  const { goBack, push } = useHistory();
  const dispatch = useDispatch();
  const name = useSelector(getName);
  const email = useSelector(getEmail);
  const birthdate = useSelector(getBirthDate);

  const handleOnChange = (e: any) => {
    const { name: target, value } = e.target;
    dispatch(setFormData(target, value));
  };

  const handleClick = () => {
    if (name && email && birthdate) {
      push('/horoscope');
    }
  };

  return (
    <div>
      <Header title="Tus Datos" />
      <div className={styles.container}>
        <ProgressBar index={1} description="INGRESA TUs DATOS" />
        <div className={styles.inputsContainer}>
          <TextFieldInput
            name="name"
            type="text"
            onChange={handleOnChange}
            value={name}
            label="Nombre:"
          />
          <TextFieldInput
            name="email"
            type="email"
            onChange={handleOnChange}
            value={email}
            label="EMail:"
          />
          <TextFieldInput
            name="birthdate"
            type="date"
            onChange={handleOnChange}
            value={birthdate}
            label="Fecha de Nacimiento:"
            extendedClassLabel={styles.extendedClassLabel}
            extendedClassInput={styles.extendedClassInout}
          />
        </div>
        <div className={styles.buttons}>
          <Button extendedClass={styles.backButton} onClick={goBack}>
            Volver
          </Button>
          <Button
            to="/horoscope"
            disabled={!name || !email || !birthdate}
            onClick={handleClick}
          >
            Continuar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
