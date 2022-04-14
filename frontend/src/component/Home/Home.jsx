import React, { useEffect } from "react";
import "./home.css";
import { CgMouse } from "react-icons/cg";
import Product from "./Product";
import MetaData from "../layout/MetaData";
import { getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";

// const product = {
//   name: "Tshirt",
//   price: "3000",
//   _id: "aniket",
//   images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
// };

const Home = () => {
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log(products);
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
        {products.map((product) => (
          <Product product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
