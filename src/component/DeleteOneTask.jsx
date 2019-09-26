import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const DeleteOneTask = ({ deleteTask, currentTask, history }) => {
  const [modal, setModal] = useState(false);
  const [task] = useState(currentTask);

  const toggle = () => {
    setModal(!modal);
  };

  const deleteTasks = (id) => {
    deleteTask(id);
    toggle();
    history.push('/');
  };

  return (
    <div>
      <Button color="primary" className="btn-sm mb-3 ml-2" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Delete task</ModalHeader>
        <ModalBody>Are you sure you want to delete this records?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => deleteTasks(task.id)}>
            Delete
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default withRouter(DeleteOneTask);
