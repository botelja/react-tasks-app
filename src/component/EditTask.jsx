import React, { useState, useEffect } from 'react';
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

const EditTask = ({ currentTask, editRow, updateTask }) => {
  const [task, setTask] = useState(currentTask);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setTask(currentTask);
  }, [currentTask]);

  const toggle = () => {
    setModal(!modal);
  };

  const handleUpdate = (task) => {
    editRow(task);
    toggle();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  return (
    <div>
      <Button color="warning btn-sm" onClick={() => handleUpdate(task)}>
        Edit
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit task</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(event) => {
              event.preventDefault();

              updateTask(task.id, task);
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
