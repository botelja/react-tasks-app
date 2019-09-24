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

const AddTask = ({ addTask }) => {
  const initialFormState = {
    id: null,
    name: '',
    description: '',
    created: null
  };

  const [task, setTask] = useState(initialFormState);
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setTask({ ...task, [name]: value });
  };

  return (
    <div>
      <Button color="primary btn-block" onClick={toggle}>
        Add Task
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add task</ModalHeader>
        <ModalBody>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              if (!task.name || !task.description) return;

              addTask(task);
              setTask(initialFormState);
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

export default AddTask;
