import React from "react";
import Layout from "../../components/Layout";
import AddProduct from "../../sections/AddProduct";
import OrderListSection from "../../sections/Orders";

function Orders() {
  return (
    <Layout pageTitle="Orders">
      <OrderListSection />
    </Layout>
  );
}

export default Orders;
