import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Home.css';
import astronautas from '../images/astronautas.svg';
import logoConf from '../images/logo-conf.svg';

function Home() {
  return (
    <React.Fragment>
      <div className='Home__container'>
        <div className='row m-0'>
          <div className='col-5 d-flex flex-column justify-content-center align-items-center'>
            <img className='Home__logoConf' src={logoConf} alt='logo' />
            <h1 className='mt-3'>PRINT YOUR BADGES</h1>
            <p>The easiest way to manage your conference</p>
            <Link to='/badges/new' className='btn btn-primary'>Start now</Link>
          </div>
          <div className='col-7 d-flex justify-content-start'>
            <img className='Home__image' src={astronautas} alt='astronautas' />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;
