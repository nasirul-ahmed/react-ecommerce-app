import React from 'react';
import { useParams } from 'react-router-dom';
const ProductDetails = () => {
  const params = useParams();
  const {id} = params;

  return <div>
    <div>
      <img />
    </div>
  </div>;
};

export default ProductDetails;
