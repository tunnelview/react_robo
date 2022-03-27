import React from "react";
import { Button, Card } from "react-bootstrap";

const apiUrl = "https://robohash.org/";

export const CustomCard = ({ name }) => {
  return name ? (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={apiUrl + name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>This is my first React API project</Card.Text>
        <Button variant="primary">Add to the list</Button>
      </Card.Body>
    </Card>
  ) : (
    ""
  );
};
