import React from "react";
import { Button, Card } from "react-bootstrap";
import "../App.css";
import { AiFillStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { addtocart, removeCart } from "../store/cartSlice";
const Single = ({ ele }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.products);
  return (
    <Card className="m-4" style={{ width: "18rem" }}>
      <Card.Img loading="lazy" variant="top" src={ele.image} />
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
        <Card.Text>Remaining : {ele.inStock}</Card.Text>
        {ele.inStock === 0 ? (
          <Button variant="danger" disabled>
            Out of Stock
          </Button>
        ) : products.some((e) => e.id === ele.id) ? (
          <Button
            value={ele.id}
            onClick={() => {
              dispatch(removeCart(ele));
            }}
            variant="danger"
          >
            Remove from Cart
          </Button>
        ) : (
          <Button
            variant="primary"
            value={ele.id}
            onClick={() => {
              dispatch(addtocart(ele));
            }}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default Single;
