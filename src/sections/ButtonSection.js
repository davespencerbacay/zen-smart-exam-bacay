import React from "react";
import Button from "../library/buttons";
import { Row, Col, DropdownButton, Dropdown } from "react-bootstrap";

const ButtonSection = () => {
  return (
    <div className="custom-container">
      <h4>BUTTONS</h4>
      <Row>
        <Col md={7}>
          <h5 className="mt-3">LARGE BUTTONS</h5>
          <Button size="lg" variant="primary">
            Close Shipment
          </Button>
          <Button size="lg" variant="primary">
            Close Shipment
          </Button>
          <Button size="lg" variant="primary" disabled>
            Close Shipment
          </Button>
        </Col>
        <Col md={5}>
          <h5 className="mt-3">SMALL BUTTONS</h5>
          <div>
            <Button size="sm" variant="primary">
              Batch Now
            </Button>
            <Button size="sm" variant="primary">
              Batch Now
            </Button>
            <Button size="sm" variant="primary" disabled>
              Batch Now
            </Button>
          </div>
          <div>
            <Button size="sm" variant="danger">
              Delete
            </Button>
            <Button size="sm" variant="danger">
              Delete
            </Button>
            <Button size="sm" variant="danger" disabled>
              Delete
            </Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={7}>
          <h5 className="mt-3">GHOST BUTTONS</h5>
          <div>
            <Button size="sm" variant="outline-primary">
              Edit
            </Button>
            <Button size="sm" variant="outline-primary">
              Edit
            </Button>
            <Button size="sm" variant="outline-primary" disabled>
              Edit
            </Button>
          </div>
          <div>
            <Button size="sm" variant="outline-danger">
              Delete
            </Button>
            <Button size="sm" variant="outline-danger">
              Delete
            </Button>
            <Button size="sm" variant="outline-danger" disabled>
              Delete
            </Button>
          </div>
        </Col>
        <Col md={5}>
          <h5 className="mt-3">DROP DOWN BUTTONS</h5>
          <div>
            <DropdownButton variant="primary" title="Send" drop="down">
              <Dropdown.Item eventKey="1" active>
                Indigo 7500-1
              </Dropdown.Item>
              <Dropdown.Item eventKey="2">Indigo 7500-2</Dropdown.Item>
              <Dropdown.Item eventKey="3">Indigo 7500-3</Dropdown.Item>
              <Dropdown.Item eventKey="4">Indigo 7500-4</Dropdown.Item>
              <Dropdown.Item eventKey="5">Indigo 7500-5</Dropdown.Item>
              <Dropdown.Item eventKey="6">Indigo 7500-6</Dropdown.Item>
            </DropdownButton>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ButtonSection;
