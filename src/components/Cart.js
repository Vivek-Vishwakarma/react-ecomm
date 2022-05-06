import React, { useContext, useEffect, useState } from "react";
import Cartitems from "../context/Cart";
import Sidebar from "./Sidebar";
import Single from "./Single";

const Cart = () => {
  const cartitem = useContext(Cartitems);
  const { item } = cartitem
  return (
    <section className="section">
      <Sidebar />
      <div className="container d-flex flex-wrap">
      {
        item && item.map((ele)=>{
          return <Single ele={ele} key={ele.id} />
        })
      }
      </div>
    </section>
  )
}

export default Cart