import React from "react";
import { addToCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { image, title, price, id } = props.obj;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id) => navigate(`/product-details/${id}`);

  return (
    <div
      className="card"
      style={{ width: "18rem", margin: "10px", display: "flex" }}
    >
      <div className="card-header card-img-top" id="header">
        <img onClick={() => handleClick(id)} src={image} alt="snap" />
      </div>
      <div className="card-content card-body">
        <h3 className="card-title card-text">{title}</h3>
      </div>
      <div
        className="card-body"
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <p
          className="card-price text-justify text-center"
          style={{ marginTop: "20px" }}
        >
          Rs. {price}
        </p>
        <button
          onClick={() => dispatch(addToCart(props.obj))}
          className="btn btn-primary"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
