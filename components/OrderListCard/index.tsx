import React, { useState } from "react";
import Modal from "../Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OrderListCard({ item, index }: any) {
  const notify = () => toast("Your Product Is Successfully Updated");

  return (
    <div
      key={index}
      className="bg-slate-900  justify-between flex-row px-[20px] flex items-center py-[8px] w-[430px] h-auto text-[18px] text-white"
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
      <div className="w-[300px]">
        <h1 className="text-[24px] font-semibold">{item.name}</h1>
        <h1 className="text-[15px] mt-2 font-medium">Email: {item.email}</h1>
        <h1 className="text-[15px] font-medium">Phone: {item.phone}</h1>
        {item.orders.map((item: any, index: any) => (
          <section className="mt-6">
            <h1 className="text-[24px] font-semibold">{item.order_date}</h1>
            <h1 className="text-[15px] mt-2 font-medium">
              Total: {item.total}
            </h1>
            <h1 className="text-[15px] font-medium">
              Delivery: {item.delivery_method}
            </h1>
            <button
              // onClick={() => setShow(true)}
              className="text-[16px] text-red-600"
            >
              Delivered
            </button>
          </section>
        ))}
        {/* <h1 className="text-[15px] font-medium">Category: {item.category}</h1> */}
      </div>

      <ToastContainer />
    </div>
  );
}

export default OrderListCard;
