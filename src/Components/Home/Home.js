import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import HomeChild from "./HomeChild";
import "./Home.css";

const Home = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 min-h-screen bg-[#37accc] px-2 md:px-3 lg:px-10 pt-2 lg:pt-3">
        {product.map((product) => (
          <HomeChild key={product.id} product={product}></HomeChild>
        ))}
      </div>
    </div>
  );
};

export default Home;
