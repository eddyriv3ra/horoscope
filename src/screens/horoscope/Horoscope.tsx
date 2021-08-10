import { differenceInCalendarDays } from 'date-fns';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/button';
import Header from '../../components/header';
import { fetchHoroscope } from '../../store/actions/userActions';
import {
  getBirthDate,
  getHoroscope,
  getName,
} from '../../store/selectors/userSelectors';
import {
  aries,
  tauro,
  geminis,
  cancer,
  leo,
  virgo,
  libra,
  escorpio,
  sagitario,
  capricornio,
  acuario,
  piscis,
} from '../../utils/imgs';
import { getZodiacSign } from '../../utils/zodiac';
import styles from './horoscope.module.scss';

const zodiacImages: any = {
  aries,
  tauro,
  geminis,
  cancer,
  leo,
  virgo,
  libra,
  escorpio,
  sagitario,
  capricornio,
  acuario,
  piscis,
};

const Horoscope = (): React.ReactElement => {
  const birthdate = useSelector(getBirthDate);
  const horoscope = useSelector(getHoroscope);
  const name = useSelector(getName);
  const dispatch = useDispatch();

  const [_, day, month] = birthdate.split('-');
  const zodiacSign: any = getZodiacSign(Number(month), Number(day));

  const days = differenceInCalendarDays(new Date(birthdate), new Date());

  const zodiacImage = zodiacImages[zodiacSign];

  React.useEffect(() => {
    dispatch(fetchHoroscope());
  }, [dispatch]);

  return (
    <div>
      <Header title="Tus Horóscopo" />
      <img src={zodiacImage} alt="zodiac" />
      <div className={styles.container}>
        <div className={styles.textcontainer}>
          <p>{`Hola ${name}`}</p>

          <p>
            {`Tu horóscopo para hoy dice que ${horoscope[zodiacSign]?.amor} ${horoscope[zodiacSign]?.dinero} ${horoscope[zodiacSign]?.salud}`}
          </p>

          <p>{`Faltan ${days} dias para tu cumpleaños`}</p>
        </div>
        <div className={styles.button}>
          <Button to="/">CONTINUAR</Button>
        </div>
      </div>
    </div>
  );
};

export default Horoscope;
