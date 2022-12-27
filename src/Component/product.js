import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = props => {
  return (
    <>
      <Card >
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title >{props.data.imagename}</Card.Title>
          <Card.Text style={{color:"black"}}>{props.data.about}</Card.Text>
       
        </Card.Body>
      </Card>
    </>
  );
};

export default ProductCard;