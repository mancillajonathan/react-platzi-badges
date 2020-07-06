import React from 'react';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';

class BadgesList extends React.Component {
  render() {
    if (this.props.badges.length === 0) {
      return(
        <div>
          <h3>No badges were found</h3>
          <Link className='btn btn-primary' to='/badges/new'>
            Create new badge
          </Link>
        </div>
      )
    }
    return (
      <ul className='list-unstyled'>
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className='BadgesList__list'>
              <div className='container pt-2'>
                <div className='row'>
                  <div className='col-2'>
                    <img className="BadgesList__image" src={badge.avatarUrl} alt='pic' />
                  </div>
                  <div className='col-10'>
                    <p className="font-weight-bold mb-0">
                      {badge.firstName}
                      {badge.lastName}
                    </p>
                    <a href='https://github.com'>@{badge.twitter}</a>
                    <p>{badge.jobTitle}</p>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
