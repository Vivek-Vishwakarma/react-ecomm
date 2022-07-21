import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { searchByQuery } from "../store/filterSlice";
const Mynavbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const loc = location.pathname.split("/")[1];
  const query = useSelector((state)=> state.filter.searchQuery)
  const quantity = useSelector((state) => state.cart.quantity);
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Ecommerce App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Form className="d-flex mx-2 my-1">
              <FormControl
              value={query}
                onChange={(e) => {
                  dispatch(searchByQuery(e.target.value));
                }}
                type="search"
                placeholder="Search ..."
                aria-label="Search"
              />
            </Form>
          </Nav>
          {loc === "cart" ? (
            <Button className="mx-2 my-1" as={Link} to="/" variant="primary">
              Go Back
            </Button>
          ) : (
            <Button
              className="mx-2 my-1"
              as={Link}
              to="/cart"
              variant="success"
            >
              Go To Cart
            </Button>
          )}

          <DropdownButton
            className="mx-2 my-1"
            as={ButtonGroup}
            id="dropdown-button-drop-start"
            drop={"start"}
            variant="primary"
            title={
              <BsCartFill fontSize="25px" style={{ marginRight: "5px" }} />
            }
          >
            {products &&
              products.map((element) => {
                return (
                  <Dropdown.Item as={Link} to="/cart" key={element.id}>
                    {element.name} - {element.price} $
                  </Dropdown.Item>
                );
              })}
            <hr />
            <Dropdown.Item as={Link} to="/cart">
              Total : {total} $
            </Dropdown.Item>
          </DropdownButton>
          <p style={{ color: "white", fontSize: "25px", paddingTop: "5px" }}>
            {quantity}
          </p>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Mynavbar;
