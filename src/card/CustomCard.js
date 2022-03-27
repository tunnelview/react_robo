import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = ({ imgUrl }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://robohash.org/66.249.70.84.png" />
      <Card.Body>
        <Card.Title>Shibin</Card.Title>
        <Card.Text>This is my first React API project</Card.Text>
        <Button variant="primary">Add to the list</Button>
      </Card.Body>
    </Card>
  );
};
