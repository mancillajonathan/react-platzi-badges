import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confLogo from '../images/logo-conf.svg';
import './styles/BadgeDetails.css';
import Badge from '../components/Badge';
import DeleteBadgeModal from '../components/DeleteBadgeModal';

function useIncreaseCount(max) {
  const [count, setCount] = useState(0);

  if (count > max) {
    setCount(0);
  }
  return [count, setCount];
}

function BadgeDetails(props) {
  // const [state, setstate] = useState(initialState)
  const [count, setCount] = useIncreaseCount(5);
  const badge = props.badge;
  return (
    <div>
      <div className='BadgeDetails__hero'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 d-flex justify-content-center'>
              <img src={confLogo} alt='logo conferencia' />
            </div>
            <div className='col-6 d-flex align-items-center'>
              <div className='BadgeDetails__hero-attendant-name'>
                <h1>
                  {badge.firstName} {badge.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          <div className='col'>
            <Badge
              firstName={badge.firstName}
              lastName={badge.lastName}
              email={badge.email}
              jobTitle={badge.jobTitle}
              github={badge.twitter}
            />
          </div>
          <div className='col'>
            <h2 className='font-weight-bold'>Actions</h2>
            <div className=''>
              <div className='mb-3'>
                <button
                  onClick={() => {
                    setCount(count + 1);
                  }}
                  className='btn btn-primary mr-4'
                >
                  Counter: {count}
                </button>
                <Link
                  className='btn btn-primary font-weight-bold'
                  to={`/badges/${badge.id} /edit`}
                >
                  Edit
                </Link>
              </div>
              <div className=''>
                <button
                  onClick={props.onOpenModal}
                  className='btn btn-danger font-weight-bold'
                >
                  Delete
                </button>
                <DeleteBadgeModal
                  isOpen={props.modalIsOpen}
                  onClose={props.onCloseModal}
                  onDeleteBadge={props.onDeleteBadge}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BadgeDetails;
