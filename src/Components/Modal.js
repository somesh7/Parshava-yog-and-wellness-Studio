import React from 'react';
// import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap'
import styled from 'styled-components';

function MyVerticallyCenteredModal(props) {

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title className="ms-auto" id="contained-modal-title-vcenter">
          <h5> Contact Us </h5>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
         <input type="email" value="Madhavijain@gmail.com" />
         <input type="number" value="9740676839" />

        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Done</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default MyVerticallyCenteredModal;
const Button = styled.button`
border: none;
width: 5rem;
height: 2.5rem;
background: #22c55e;
text-transform: uppercase;
outline: none;
color: #fff;
border-radius: .5rem !important;
box-shadow: 7px 6px 28px 2px rgba(0, 0, 0, 0.24);
transition: 0.2s all;
:hover {
  outline: none;
  text-decoration: none;
}
`