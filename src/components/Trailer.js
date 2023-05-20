import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import YouTube from "react-youtube";

const Trailer = ({ videoKey }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [lgShow, setLgShow] = useState(false);

  return (
    <div>
      <a variant="link" className="trailer-but" onClick={() => setLgShow(true)}>Watch Trailer</a>
      <Container>
        <Row>
          <Col lg={12}>
            <Modal
              size="xl"
              show={lgShow}
              onHide={() => setLgShow(false)}
              centered
              aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
              </Modal.Header>
              <Modal.Body>
                <YouTube videoId={videoKey} className="video"  />
                </Modal.Body>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trailer;
