import React, { useContext, useEffect, useState } from "react";
import Cart from "../context/Cart";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
  Button,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
const Mynavbar = () => {
  const [cartadd, setCartadd] = useState();
  const cartitem = useContext(Cart);
  const { item } = cartitem;
  const getItems = () => {
    setCartadd(item);
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Ecommerce App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex mx-2 my-1">
              <FormControl
                type="search"
                placeholder="Search ..."
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Button className="mx-2 my-1" as={Link} to="/cart" variant="success">
            Go To Cart
          </Button>
          <Dropdown>
            <Dropdown.Toggle className="mx-2 my-1" id="dropdown-basic">
              <BsCartFill fontSize="25px" />
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Iphone</Dropdown.Item>
              {cartadd &&
                cartadd.map((element) => {
                  return (
                    <Dropdown.Item key={element.id}>
                      {element.name}
                    </Dropdown.Item>
                  );
                })}
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};


export default Mynavbar;
