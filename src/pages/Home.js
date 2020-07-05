import React from 'react';
import './styles/Home.css';
import astronautas from '../images/astronautas.svg';
import logoConf from '../images/logo-conf.svg';

function Home() {
  return (
    <React.Fragment>
      <div className='Home__container'>
        <div className='row m-0'>
          <div className='col-6'>
          <img
              className='logoConf'
              src={logoConf}
              alt='astronautas'
            />
          </div>
          <div className='col-6'>
            <img
              className='Home__image'
              src={astronautas}
              alt='astronautas'
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
