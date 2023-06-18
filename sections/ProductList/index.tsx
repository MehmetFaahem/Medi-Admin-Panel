import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductListCard from "../../components/ProductListCard";

function ProductListSection() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://medi-backend.vercel.app/api/products")
      .then(function (response: any) {
        // handle success
        console.log(products);
        setProducts(response.data.data);
      })
      .catch(function (error: any) {
        // handle error
        console.log(error);
      });
  }, [products.length]);

  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      {products.map((item, index) => (
        <ProductListCard item={item} index={index} />
      ))}
    </div>
  );
}

export default ProductListSection;
