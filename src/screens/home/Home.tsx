import React from 'react';

const Home = (): React.ReactElement => {
  React.useEffect(() => {
    const getData = async () => {
      const data = await fetch('https://randomuser.me/api/');
      const lala = await data.json();
      console.log(lala);
      return lala;
    };
    getData();
  });

  return <div>Hola</div>;
};

export default Home;
