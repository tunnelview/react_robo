import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { CustomCard } from "../../card/CustomCard";

export const SearchForm = () => {
  const [name, setName] = useState("");
  const [fetchRobot, setRobot] = useState();

  const handleChange = (e) => {
    const { value } = e.target;
    console.log(value);
    setName(value);
  };

  // const handleOnSubmit = async (e) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    // console.log(name);

    // Call the fun to call the api

    // const { data } = await fetchRobot(name);
    // console.log(data);
  };

  return (
    <div>
      <Form action="" onSubmit={handleOnSubmit}>
        {/* <input type="text" name="search" onChange={handleChange} />
        <input type="submit" value="Submit" /> */}
        <Row>
          <Col>
            <Form.Control placeholder="First name" onChange={handleChange} />
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
