import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { removeFromCart } from "../redux/actions/cartActions";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.length <= 0 ? (
        <div style={{
          textAlign: "center",
          marginTop: "40px"
        }}>
          <i className="fa fa-shopping-cart fa-2x " aria-hidden="true"></i>
          <div>No items in the cart</div>
        </div>
      ) : (
        cartItems.map((item) => {
          return (
            <div className="card-containerr" key={item.id}>
              <div className="containerr">
                <div className="image-container">
                  <img
                    src={item.image}
                    alt="item"
                    className="product-image"
                    height="200px"
                    width="100px"
                  />
                </div>
                <div className="col-md-4">
                  <h4>{item.title}</h4>
                  <p className="fw-bold">Rs: {item.price}</p>
                </div>
                <button
                  onClick={() => dispatch(removeFromCart(item))}
                  className="btn-close float-end"
                ></button>
              </div>
            </div>
          );
        })
      )}
    </>
  );
};

export default Cart;
