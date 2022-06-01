import React , {useContext}from "react";
import Sidebar from "./Sidebar";
import Single from "./Single";
import "../App.css";
import Cart from "../context/Cart";
const Home = () => {
  const context = useContext(Cart);
  const { products } = context
  console.log(products)
  return (
    <section className="section">
      <Sidebar />
      <div className="container d-flex flex-wrap">
      {
        products.map((ele)=>{
          return <Single isCart={false} ele={ele} key={ele.id} />
        })
      }
      </div>
    </section>
  );
};

export default Home;
