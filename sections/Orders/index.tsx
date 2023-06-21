import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductListCard from "../../components/ProductListCard";
import OrderListCard from "../../components/OrderListCard";
import { useSelector } from "react-redux";

function OrderListSection() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const users = useSelector((state: any) => state.users);
  const filtered = users.filter(({ orders }: any) => orders.length > 0);

  return (
    <section className="flex-1 flex-col w-full">
      <input
        placeholder="Search a product"
        onChange={(e) => setSearch(e.target.value)}
        className="w-[850px] p-[20px] border-solid border-2 border-black my-6 mx-5 bg-white"
      />
      <div className="grid grid-cols-2 grid-flow-row gap-4 mx-5">
        {filtered
          .filter((value: any) => {
            if (search == "") {
              return value;
            } else if (
              value.product_name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((item: any, index: any) => (
            <div key={index}>
              <OrderListCard item={item} index={index} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default OrderListSection;
