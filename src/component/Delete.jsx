import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

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
        <ModalHeader toggle={toggle}>Add task</ModalHeader>
        <ModalBody>Are you sure</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={deleteTasks}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Delete;
