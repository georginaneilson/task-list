import React from 'react';
import { Modal,} from 'react-bootstrap'

const TicketModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create a task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {props.children &&
          <div>{props.children}</div>
        }
      </Modal.Body>
    </Modal>
  );
}


export default TicketModal;
