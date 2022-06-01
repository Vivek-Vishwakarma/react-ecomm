import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import "../App.css";
import { AiFillStar } from "react-icons/ai";
import Cart from "../context/Cart";

const Single = ({ ele, isCart }) => {
  const cartitem = useContext(Cart);
  const { addtocart, rerender, setRerender } = cartitem;
  return (
    <Card className="m-4" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={ele.image} />
      <Card.Body>
        <Card.Title>{ele.name}</Card.Title>
        <Card.Text style={{ fontWeight: "bold" }}>
          Price : {ele.price.split(".")[0]} $
        </Card.Text>
        <Card.Text>
          Rating :{" "}
          {[...Array(ele.ratings)].map((e, i) => (
            <AiFillStar key={i} />
          ))}
        </Card.Text>
        <Card.Text>
          Express Delivery : {ele.fastDelivery ? "Available" : "Not Available"}
        </Card.Text>
        <Card.Text>
          Remaining : {ele.inStock}
        </Card.Text>
        {ele.inStock === 0 ? (
          <Button variant="danger" disabled>
            Out of Stock
          </Button>
        ) : isCart === false ? (
          <Button
            variant="primary"
            value={ele.id}
            onClick={(e) => {
              addtocart(e.target.value);
              // setRerender(!rerender);
            }}
          >
            Add to Cart
          </Button>
        ) : (
          <Button
            variant="danger"
          >
            Remove from Cart
          </Button>
        ) }
      </Card.Body>
    </Card>
  );
};

export default Single;
