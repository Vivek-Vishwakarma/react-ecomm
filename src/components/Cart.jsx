import { useSelector } from "react-redux";
import Single from "./Single";
import React from "react";
import { ProSidebar } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import "../App.css";
// import { loadFromLocal } from "../store/cartSlice";

const Cart = () => {
  // const quantity = useSelector((state) => state.quantity);
  const products = useSelector((state) => state.cart.products);
  const total = useSelector((state) => state.cart.total);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadFromLocal())
  // }, []);
  return (
    <section className="section">
      <div className="container d-flex flex-wrap">
        {products &&
          products.map((ele) => {
            return <Single ele={ele} key={ele.id} />;
          })}
      </div>
      <ProSidebar
        style={{ position: "sticky", top: "80px" }}
        width="400px"
        className="m-4"
      >
        <h3 className="text-center m-2">Order Summary</h3>
        <hr />
        <h4>Total : {total} $</h4>
        <h4>Shipping Charges : 5 $</h4>
        <h4>Discount : 5 $</h4>
        <hr />
        <h4>Grand Total : {total} $</h4>
      </ProSidebar>
    </section>
  );
};

export default Cart;
