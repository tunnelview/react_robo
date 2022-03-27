import React, { useState } from "react";
import { Col, Form, Row, Button } from "react-bootstrap";
import { CustomCard } from "../../card/CustomCard";

export const SearchForm = () => {
  const [name, setName] = useState("");
  const [robot, setRobot] = useState();

  const handleChange = (event) => {
    const { value } = event.target;
    // console.log(value);
    setName(value);
  };

  // const handleOnSubmit = async (e) => { // event and e are the same
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log(name);
    setRobot(name);
    setName("");

    // console.log(name);

    // Call the fun to call the api

    // const { data } = await fetchRobot(name);
    // console.log(data);
  };
  console.log(robot);
  return (
    <div>
      <Form action="" onSubmit={handleOnSubmit}>
        {/* <input type="text" name="search" onChange={handleChange} />
        <input type="submit" value="Submit" /> */}
        <Row>
          <Col>
            <Form.Control
              placeholder="Search ..."
              value={name}
              onChange={handleChange}
              required
            />
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
          <CustomCard name={robot} />
          {/* // we need to pass that robot as a props in line 54 and name has
          has to be passed to CustomCard.js */}
        </Col>
      </Row>
    </div>
  );
};
