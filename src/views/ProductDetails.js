import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartActions";
import { useSelector, } from "react-redux";
const ProductDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = params;
  const [data, setData] = useState(null);
  const [added, setAdded] = useState(false);
  const prevState = useSelector((state) => state.cart);

  useEffect(() => {
    if (prevState.length == 0) return false;
    prevState.map((item) => {
      console.log(item.id);
      console.log(id);
      if (item.id == data.id) {
        setAdded(true);
      } else {
        setAdded(false);
      }
    });
  });

  const getData = async () => {
    await fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      {!data ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="loading"
            style={{
              textAlign: "center",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            loading...
          </div>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexFlow: "row wrap",
            justifyContent: "space-evenly",
          }}
        >
          <div
            className="image-container-pd"
            style={{ margin: "20px", flex: 1 }}
          >
            <img src={data.image} height="220px" width="200px" />
          </div>
          <div
            style={{
              margin: "20px",
              backgroundColor: "azure",
              flex: 2,
              padding: "20px",
            }}
          >
            <div>
              <h3>{data.title}</h3>
              <p>
                {data.rating.rate} <i className="fa fa-star"></i>
              </p>
              <p className="fw-bold">Price: {data.price}</p>
              <div className="product-desc">
                <p>
                  <u>Product description</u>
                </p>
                <p>{data.description}</p>
              </div>
              <div className="buttons-cont">
                <button
                  onClick={() => added ? navigate("/cart") : dispatch(addToCart(data)) }
                  className="btn-primary w-100 my-2"
                >
                  {added ? "Go to Cart" : "Add To Cart"}
                </button>
                <button className="btn-success w-100 my-2">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
