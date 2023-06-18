import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faShoppingBasket,
  faUserAlt,
  faMoneyBill,
  faPoll,
  faBagShopping,
  faTruckPlane,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faIdBadge } from "@fortawesome/free-regular-svg-icons";

const Sections = [
  {
    title: "Dashboard",
    link: "/",
    icon: faDashboard,
  },
  {
    title: "Products",
    link: "/products",
    icon: faShoppingBasket,
  },
  {
    title: "Product List",
    link: "/product-list",
    icon: faShoppingBag,
  },
  {
    title: "Orders",
    link: "/orders",
    icon: faIdBadge,
  },
  {
    title: "Customers",
    link: "/customers",
    icon: faUserAlt,
  },
  {
    title: "Reviews",
    link: "/reviews",
    icon: faPoll,
  },
  {
    title: "Transactions",
    link: "/transactions",
    icon: faMoneyBill,
  },
  {
    title: "Stock",
    link: "/stock",
    icon: faBagShopping,
  },
  {
    title: "Suppliers",
    link: "/transactions",
    icon: faTruckPlane,
  },
];

function Sidebar({ className }: any) {
  return (
    <aside className="bg-slate-800 fixed">
      {Sections.map((section, index) => (
        <Link
          className="bg-slate-800 hover:bg-slate-600 py-[13px] px-[15px] mb-[10px]"
          href={section.link}
          key={index}
        >
          <FontAwesomeIcon
            icon={section.icon}
            height="20"
            width="20"
            className="px-[12px]"
          />
          {section.title}
        </Link>
      ))}
    </aside>
  );
}

export default Sidebar;
