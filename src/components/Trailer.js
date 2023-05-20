import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import YouTube from 'react-youtube';


const Trailer = ({videKey}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        }
    }
      
  return (
    <div>
         <Button variant="primary" onClick={handleShow}>
         Watch Trailer
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <YouTube videoId={videKey} opts={opts} />;
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </div>
  )
  
}

export default Trailer
