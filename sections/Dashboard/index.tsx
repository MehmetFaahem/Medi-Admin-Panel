import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import {
  faDollarSign,
  faCartShopping,
  faCartFlatbed,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import Chart from "../../components/Chart";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";

function Dashboard() {
  const [products, setProducts] = useState([]);

  const [ordersNumber, setOrdersNumber] = useState(0);
  const users = useSelector((state: any) => state.users);
  const dispatch = useDispatch<any>();
  //<any[]>([]);
  const States = [
    {
      title: "Total Sales",
      number: "৳ 0",
      icon: faDollarSign,
    },
    {
      title: "Total Orders",
      number: ordersNumber,
      icon: faCartShopping,
    },
    {
      title: "Total Products",
      number: products.length,
      icon: faCartFlatbed,
    },
    {
      title: "Total Reviews",
      number: "0",
      icon: faReceipt,
    },
  ];
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

  let ordersdefined: any = [];
  let sum: number = 0;
  useEffect(() => {
    dispatch(fetchUsers());
    users.forEach((element: any) => {
      ordersdefined.push(element.orders.length);
    });
    ordersdefined.forEach((item: any) => {
      sum += item;
      setOrdersNumber(sum);
    });
  }, [users.length]);

  return (
    <div className="flex flex-col">
      <h1 className="font-[800] text-[40px]">Dashboard</h1>
      <div className="grid grid-cols-2 gap-[25px] mt-[20px]">
        {States.map((item, index) => (
          <Card item={item} index={index} />
        ))}
      </div>
      <h1 className="mt-[40px] font-[800] text-[40px]">Sell Statistics</h1>
      <div className="mt-[40px]">
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
