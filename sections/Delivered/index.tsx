import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductListCard from "../../components/ProductListCard";
import OrderListCard from "../../components/OrderListCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";
import DeliveredListCard from "../../components/DeliveredListCard";

function DeliveredListSection() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  const dispatch = useDispatch<any>();
  const users = useSelector((state: any) => state.users);
  const filtered = users.filter(({ orders }: any) => orders.length > 0);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [filtered]);

  return (
    <section className="flex-1 flex-col w-full">
      {/* <input
        placeholder="Search a product"
        onChange={(e) => setSearch(e.target.value)}
        className="w-[850px] p-[20px] border-solid border-2 border-black my-6 mx-5 bg-white"
      /> */}

      <div className="flex flex-col mx-5 w-full">
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
            <div key={index} className="mt-6">
              <DeliveredListCard item={item} index={index} />
            </div>
          ))}
      </div>
    </section>
  );
}

export default DeliveredListSection;
