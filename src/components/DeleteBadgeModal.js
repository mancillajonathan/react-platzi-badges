import React from 'react';
import Modal from './Modal';

function DeleteBadgeModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className='DeleteBadgeModal'>
        <h2 className='font-weight-bold'>Are you sure?</h2>
        <p>You are about to delete this badge.</p>

        <div className=''>
          <button onClick={props.onClose} className='btn btn-link font-weight-bold'>Cancel</button>
          <button onClick={props.onDeleteBadge} className='btn btn-danger ml-4 font-weight-bold'>Delete</button>
        </div>
      </div>
    </Modal>
  );
}

export default DeleteBadgeModal;
