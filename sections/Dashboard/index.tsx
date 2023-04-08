import React from "react";
import Card from "../../components/Card";
import {
  faDollarSign,
  faCartShopping,
  faCartFlatbed,
  faReceipt,
} from "@fortawesome/free-solid-svg-icons";
import Chart from "../../components/Chart";

const States = [
  {
    title: "Total Sales",
    number: "৳ ১৯,২২,৪৫৬",
    icon: faDollarSign,
  },
  {
    title: "Total Orders",
    number: "৩৪,২৩১",
    icon: faCartShopping,
  },
  {
    title: "Total Products",
    number: "৩,৫৩,৪৫২",
    icon: faCartFlatbed,
  },
  {
    title: "Total Reviews",
    number: "২১০৬",
    icon: faReceipt,
  },
];

function Dashboard() {
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
