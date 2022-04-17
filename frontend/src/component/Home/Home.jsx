import React, { useEffect } from "react";
import "./home.css";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard";
import MetaData from "../layout/MetaData";
import { ClearErrors, getProduct } from "../../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../layout/loader/Loader";
import { useAlert } from "react-alert";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(ClearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, alert, error]);
  console.log(products);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
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
            {products?.map((product) => (
              <ProductCard product={product} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Home;
