import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';

const EditTask = ({ currentTask, editRow }) => {
  const [task, setTask] = useState(currentTask);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  const handleUpdate = (task) => {
    editRow(task);
    toggle();
  };

  return (
    <div>
      <Button color="warning btn-sm" onClick={() => handleUpdate(task)}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add task</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              if (!task.name || !task.description) return;

              toggle();
            }}
          >
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                value={task.name}
                onChange={handleInputChange}
                placeholder="Task name"
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                value={task.description}
                onChange={handleInputChange}
                placeholder="Task description"
              />
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default EditTask;
