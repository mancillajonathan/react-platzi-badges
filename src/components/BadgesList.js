import React, { useState } from 'react';
import './styles/BadgesList.css';
import { Link } from 'react-router-dom';
import Gravatar from './Gravatar';

function useSearchBadges(badges) {
  const [query, setQuery] = useState('');
  const [filteredBadges, setfilteredBadges] = useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });
    setfilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className='form-group'>
          <label className='font-weight-bold'>Filger Badges</label>
          <input
            className='form-control'
            type='text'
            value={query}
            onChange={(event) => {
              setQuery(event.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className='btn btn-primary' to='/badges/new'>
          Create new badge
        </Link>
      </div>
    );
  }
  return (
    <React.Fragment>
      <div className='form-group'>
        <label className='font-weight-bold'>Filger Badges</label>
        <input
          className='form-control'
          type='text'
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
      </div>
      <ul className='list-unstyled'>
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className='BadgesList__list'>
              <Link
                className='text-reset text-decoration-none'
                to={`/badges/${badge.id}`}
              >
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
                        {badge.firstName}
                        <span> </span>
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
    </React.Fragment>
  );
}

export default BadgesList;
