import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';

const Delete = ({ handleDelete }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const deleteTasks = () => {
    handleDelete();
    toggle();
  };

  return (
    <div>
      <Button color="primary" className="mb-3 ml-2" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete task</ModalHeader>
        <ModalBody>Are you sure you want to delete this records?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteTasks}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

Delete.propTypes = { handleDelete: PropTypes.func.isRequired };

export default Delete;
