import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const Product = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await fetch("https://fakestoreapi.com/products/")
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
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "center",
          alignItems: data.length < 0 ? "center" : "",
        }}
      >
        {data.length <= 0 ? (
          <div>Loading...</div>
        ) : (
          data.map((product) => <Card key={product.id} obj={product} />)
        )}
      </div>
    </>
  );
};

export default Product;
