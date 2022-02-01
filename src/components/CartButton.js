import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const CartButton = (props) => {
  const cartCount = useSelector(state => state.cart)
  return (
    <>
      <NavLink to="/cart" className="btn btn-outline-primary">
        <span className="fa fa-shopping-cart me-1"></span> Cart ({cartCount.length})
      </NavLink>
    </>
  );
};

export default CartButton;
