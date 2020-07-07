import React from 'react';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className='btn btn-primary' to='/badges/new'>
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className='list-unstyled'>
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className='BadgesList__list'>
              <Link className='text-reset text-decoration-none' to={`/badges/${badge.id}`}>
              <div className='container pt-2'>
                <div className='row'>
                  <div className='col-2'>
                    <Gravatar
                      className='BadgesList__image'
                      email={badge.email}
                      alt='Avatar'
                    />
                  </div>
                  <div className='col-10'>
                    <p className='font-weight-bold mb-0'>
                      {badge.firstName}<span> </span>
                      {badge.lastName}
                    </p>
                    <p>@{badge.twitter}</p>
                    <p>{badge.jobTitle}</p>
                  </div>
                </div>
              </div>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
