import React from "react";
import { Button, Card } from "react-bootstrap";

export const CustomCard = () => {
  return (
    <Card style={{ width: "imgurl" }}>
      <Card.Img variant="top" src="{https://robohash.org/66.249.70.84.png}" />
      <Card.Body>
        <Card.Title>Shibin</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};
