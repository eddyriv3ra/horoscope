import React from 'react';

import Header from '../../components/header';
import ProgressBar from '../../components/progressBar';

const GenderScreen = (): React.ReactElement => (
  <div>
    <Header title="Tu Género" />
    <ProgressBar index={0} description="INGRESA TU GÉNERO" />
  </div>
);

export default GenderScreen;
