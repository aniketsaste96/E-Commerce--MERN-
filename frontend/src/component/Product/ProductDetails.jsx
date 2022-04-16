import React, { useEffect } from "react";
import "./ProductDetails.css";
import Carousel from "react-material-ui-carousel";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../../actions/productAction";
import { useParams } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductDetails = ({ match }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    value: product.ratings,
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 25,
  };
  //id in frontend req.params.id in backend
  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);
  //
  return (
    <>
      <div className="ProductDetails">
        <div>
          <Carousel>
            {product.images &&
              product.images.map((item, i) => (
                <img
                  src={item.url}
                  className="CarouselImage"
                  key={item.url}
                  alt={`${i} Slide`}
                />
              ))}
          </Carousel>
        </div>
        <div>
          <div className="detailsBlock-1">
            <h1>{product.name} </h1>
            <p>Product # {product._id} </p>
          </div>
          <div className="detailsBlock-2">
            <ReactStars {...options} />
            <span>({product.numOfReviews} Reviews) </span>
          </div>
          <div className="detailsBlock-3">
            <h1> {`₹${product.price}`} </h1>
            <div className="detailsBlock-3-1">
              <div className="detailsBlock-3-1-1">
                <button>-</button>
                <input type="number" value="1" />
                <button>+</button>
              </div>
              <button>Add To Cart</button>
            </div>
            <p>
              Status:{" "}
              <b className={product.stock < 1 ? "redColor" : "greenColor"}>
                {product.stock < 1 ? "OutOfStock" : "InStock"}
              </b>
            </p>
          </div>
          <div className="detailsBlock-4">
            Description : <p>{product.description}</p>
          </div>
          <button className="SubmitReview">Submit Review</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
