import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { CustomCard } from "../../card/CustomCard";

export const SearchForm = () => {
  const [name, setname] = useState("");

  return (
    <div>
      <Form>
        <Row>
          <Col>
            <Form.Control placeholder="First name" />
          </Col>
          <Col>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <Row className="mt-5">
        <Col>
          <CustomCard />
        </Col>
      </Row>
    </div>
  );
};
