import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../components/button';
import { fetchUser } from '../../store/actions/userActions';
import { PENDING } from '../../store/constants';
import { getUserImg, getUserStatus } from '../../store/selectors/userSelectors';
import styles from './home.module.scss';

const Home = (): React.ReactElement => {
  const dispatch = useDispatch();
  const userImg = useSelector(getUserImg);
  const userStatus = useSelector(getUserStatus);

  React.useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  if (userStatus === PENDING) {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <img src={userImg} alt="profile pic" className={styles.pic} />
        <Button to="/gender">INGRESAR</Button>
      </div>
    </div>
  );
};

export default Home;
