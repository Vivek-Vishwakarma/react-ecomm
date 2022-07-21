import React from "react";
import Sidebar from "./Sidebar";
import "../App.css";
import Single from "./Single";
import { products } from "../data";
import { useSelector } from "react-redux";

const Home = () => {
  const { sort, byRating, byStock, byFastDelivery, searchQuery } = useSelector(
    (state) => state.filter
  );
  const filtered = () => {
    let sorted = products;
    if (sort) {
      sorted = sorted.sort((a, b) =>
        sort === "ascending" ? a.price - b.price : b.price - a.price
      );
    }
    if (byRating) {
      sorted = sorted.filter((prod) => prod.ratings >= byRating);
    }
    if (byStock) {
      sorted = sorted.filter((prod) => prod.inStock);
    }
    if (byFastDelivery) {
      sorted = sorted.filter((prod) => prod.fastDelivery);
    }
    if (searchQuery) {
      sorted = sorted.filter((prod) =>
        prod.name.toLowerCase().includes(searchQuery)
      );
    }
    return sorted;
  };
  return (
    <section className="section">
      <Sidebar />
      <div className="container d-flex flex-wrap">
        {filtered().map((ele) => {
          return <Single isCart={false} ele={ele} key={ele.id} />;
        })}
      </div>
    </section>
  );
};

export default Home;
