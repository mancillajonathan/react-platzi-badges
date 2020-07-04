import React from 'react';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import '../components/styles/BadgeNew.css';
import confHeader from '../images/badge-header.svg';

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className='BadgeNew__hero'>
          <img className='img-fluid' src={confHeader} alt='logo' />
        </div>

        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <Badge
                firstName='Jhonny'
                lastName='Bravo'
                jobTitle='Web Designer'
                github='mancillajonathan'
                avatar='http://2.gravatar.com/avatar/ec358c02b5152e576d503f79d72f5312'
              />
            </div>
            <div className="col-6">
                <BadgeForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
