import React from "react";
import "./home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product";
import MetaData from "../layout/MetaData";
const product = {
  name: "Tshirt",
  price: "3000",
  _id: "aniket",
  images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
};

const Home = () => {
  return (
    <>
      <MetaData title="E-Commerce" />
      <div className="banner">
        <p>Welcome to e-Commerce</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>
            Scroll <CgMouse />
          </button>
        </a>
      </div>
      <h2 className="homeHeading">Featured Products</h2>
      <div className="container" id="container">
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
        <Product product={product} />
      </div>
    </>
  );
};

export default Home;
