import { Fragment, useState } from "react";
import { Button, ButtonGroup, Container, Modal } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import LoremGenerate from "./LoremGenerate";

const ReactBootsrp = () => {
  const [show, setShow] = useState<boolean>(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <Fragment>
      <h2>React Bootstrap</h2>

      <Button onClick={handleShow}>Launch Modal</Button>
      <Modal show={show} onhide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>This is title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <LoremGenerate/>
          <Container>
            <Row className="justify-content-md-center">
              <Col xs lg="2">
                1 of 3
              </Col>
              <Col md="auto">Variable width content</Col>
              <Col xs lg="2">
                3 of 3
              </Col>
            </Row>
            <Row>
              <Col>1 of 3</Col>
              <Col md="auto">Variable width content</Col>
              <Col xs lg="2">
                3 of 3
              </Col>
            </Row>
          </Container>{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Close{" "}
          </Button>
          <Button onClick={handleClose}>Save</Button>
        </Modal.Footer>
      </Modal>
      {/* <ButtonGroup vertical={true}>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
      </ButtonGroup>
      <Button variant="warning">Warning</Button>{" "}
      <Button variant="danger">Danger</Button>{" "}
      <Button variant="info">Info</Button>{" "}
      <Button variant="light">Light</Button>{" "}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}
    </Fragment>
  );
};

export default ReactBootsrp;
