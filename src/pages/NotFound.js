import React from 'react';
import './styles/NotFound.css';
import NotFoundImage from '../images/img404.png';

function NotFound() {
  return (
    <React.Fragment>
      <div className='NotFound__container'>
        <div className='NotFound__errorContainer'>
          <img className='NotFound__image' src={NotFoundImage} alt='404notfound' />
          <h1>404</h1>
          <h4>There's a bunch of space here 🚀</h4>
        </div>
      </div>
    </React.Fragment>
  );
}

export default NotFound;
