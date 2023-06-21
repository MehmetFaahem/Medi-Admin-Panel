import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductListCard from "../../components/ProductListCard";

function ProductListSection() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
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
    <section className="flex-1 flex-col w-full">
      <input
        placeholder="Search a product"
        onChange={(e) => setSearch(e.target.value)}
        className="w-[850px] p-[20px] border-solid border-2 border-black my-6 mx-5 bg-white"
      />
      <h1 className="mx-5 my-3 font-bold text-[20px]">
        Total Products: {products.length}
      </h1>
      <div className="grid grid-cols-2 grid-flow-row gap-4 mx-5">
        {products
          .filter((value: any) => {
            if (search == "") {
              return value;
            } else if (
              value.product_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item, index) => (
            <ProductListCard item={item} index={index} />
          ))}
      </div>
    </section>
  );
}

export default ProductListSection;
