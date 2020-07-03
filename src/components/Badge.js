import React from 'react';
import './styles/Badge.css';
import confLogo from '../images/badge-header.svg';

class Badge extends React.Component {
  render() {
    return (
      <div className='Badge'>
        <div className='Badge__header'>
          <img src={confLogo} alt='Logo' />
        </div>

        <div className='Badge__section-name'>
          <img
            className='Badge__avatar'
            src='https://www.gravatar.com/avatar/ec358c02b5152e576d503f79d72f5312=identicon'
            alt='Avatar'
          />
          <h1>
            Jair <br /> Mancilla
          </h1>
        </div>

        <div className='Badge__section-info'>
          <h3>Front-end developer</h3>
          <div>@mancillajonathan</div>
        </div>

        <div className='Badge__footer'>#platziconf</div>
      </div>
    );
  }
}

export default Badge;
