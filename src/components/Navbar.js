import React from 'react';
import logo from '../images/logo.svg';
import '../components/styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='container-fluid'>
          <a className="Navbar__brand" href='https://github.com/mancillajonathan'>
            <img className="Navbar__brand-logo" src={logo} alt='logo' />
            <span className='font-weight-light'>Platzi</span>
            <span className='font-weight-bold'>Badges</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Navbar;
