import React, { useState } from "react";
import Modal from "../Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function DeliveredListCard({ item, index }: any) {
  const notify = () => toast("Order Successfully Deleted");
  const notifytodeliver = () => toast("Order Successfully Delivered");

  const DeleteOrders = async (id: any) => {
    await axios
      .delete(`http://localhost:3003/api/users/orders/${id}`)
      .then((response: any) => {
        console.log(`Deleted post with ID ${id}`, response);
        notify();
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  const [show, setShow] = useState(false);

  const DeliverOrders = async (item: any) => {
    await axios
      .put(`http://localhost:3003/api/users/orders/${item.order_id}`, {
        total: item.total,
        delivery_method: item.delivery_method,
        order_id: item.order_id,
        order_date: item.order_date,
        delivered: true,
      })
      .then((response: any) => {
        console.log(`Delivered post with ID ${item.order_id}`, response);
        notifytodeliver();
      })
      .catch((error: any) => {
        console.error(error);
      });
  };

  if (
    item.orders.filter((value: any) => {
      if (value.delivered == true) {
        return value;
      }
    }).length < 1
  ) {
    return null;
  }

  return (
    <div
      key={index}
      className="bg-slate-900 justify-between flex-row px-[40px] flex items-center py-[20px] w-auto h-auto text-[18px] text-white"
    >
      {/* <Modal show={show} onClose={() => setShow(false)}>
        <div>
          <h1 className="text-white font-bold">Product Name</h1>
          <input
            value={details.product_name}
            onChange={(e) =>
              setDetails({ ...details, product_name: e.target.value })
            }
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Company Name</h1>
          <input
            value={details.company_name}
            onChange={(e) =>
              setDetails({ ...details, company_name: e.target.value })
            }
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Price (BDT)</h1>
          <input
            value={details.price}
            min={1}
            onChange={(e) => setDetails({ ...details, price: e.target.value })}
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Type</h1>
          <input
            value={details.category}
            onChange={(e) =>
              setDetails({ ...details, category: e.target.value })
            }
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Pharmacology</h1>
          <textarea
            value={details.pharmacology}
            onChange={(e) =>
              setDetails({ ...details, pharmacology: e.target.value })
            }
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[300px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Indication</h1>
          <textarea
            value={details.indication}
            onChange={(e) =>
              setDetails({ ...details, indication: e.target.value })
            }
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[300px] bg-white px-[10px]"
          />
        </div>
        <button
          className="my-2 p-2 bg-white self-end mt-6 rounded-xl text-black font-[18px]"
          onClick={() => Update(item._id)}
        >
          Delivered
        </button>
      </Modal> */}
      <div className="w-[700px]">
        <h1 className="text-[24px] font-semibold">{item.name}</h1>
        <h1 className="text-[15px] mt-2 font-medium">Email: {item.email}</h1>
        <h1 className="text-[15px] font-medium">Phone: {item.phone}</h1>
        <div className="grid grid-cols-3 grid-flow-row gap-[50px]">
          {item.orders
            .filter((value: any) => {
              if (value.delivered == true) {
                return value;
              }
            })
            .map((item: any, index: any) => (
              <section className="mt-6" key={index}>
                <h1 className="text-[24px] font-semibold">{item.order_date}</h1>
                <h1 className="text-[15px] mt-2 font-medium">
                  Total: {item.total}
                </h1>
                <h1 className="text-[15px] font-medium">
                  Delivery: {item.delivery_method}
                </h1>
                <button
                  className="my-3 text-yellow-200"
                  onClick={() => setShow(!show)}
                >
                  {!show ? "Click to See Orders" : "Shrink List"}
                </button>
                {show
                  ? item.ordered.map((ord: any, index: any) => (
                      <div
                        key={index}
                        className="bg-slate-800 text-[14px] mt-[15px] p-[10px] rounded-lg w-[200px] h-[150px]"
                      >
                        <p>Name: {ord.name}</p>
                        <p>Quantity: {ord.quantity}</p>
                        <p>Category: {ord.category}</p>
                        <p>Comapny: {ord.company}</p>
                        <p>Price: {ord.price}</p>
                      </div>
                    ))
                  : null}
                <div className="flex my-4 space-x-4">
                  {/* <button
                    onClick={() => DeliverOrders(item)}
                    className="text-[16px] rounded-lg text-black p-1 bg-slate-300"
                  >
                    Set as Delivered
                  </button> */}
                  <button
                    onClick={() => DeleteOrders(item.order_id)}
                    className="text-[16px] p-1 bg-red-700 rounded-lg text-white"
                  >
                    Delete
                  </button>
                </div>
              </section>
            ))}
        </div>

        {/* <h1 className="text-[15px] font-medium">Category: {item.category}</h1> */}
      </div>

      <ToastContainer />
    </div>
  );
}

export default DeliveredListCard;
