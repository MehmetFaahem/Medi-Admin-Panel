import React, { useState } from "react";
import Modal from "../Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function ProductListCard({ item, index }: any) {
  const [show, setShow] = useState(false);
  const [details, setDetails]: any = useState({
    product_name: item.product_name,
    company_name: item.company_name,
    price: item.price,
    category: item.category,
    indication: item.indication,
    pharmacology: item.pharmacology,
  });

  const notify = () => toast("Your Product Is Successfully Updated");

  const Update = async ({ id }: any) => {
    const formData = new FormData();

    for (const name in details) {
      formData.append(name, details[name]);
    }

    console.log(formData);

    await fetch(`https://medi-backend.vercel.app/api/products/${item._id}`, {
      method: "PUT",
      body: formData,
    })
      .then((response) => {
        response.json();
        if (response.status == 201) {
          notify();
          setShow(false);
        }
      })
      .then((data) => console.log(data));

    // axios
    //   .put(
    //     `https://medi-backend.vercel.app/api/products/${item._id}`,
    //     formData,
    //     {
    //       withCredentials: true,
    //     }
    //   )
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  return (
    <div
      key={index}
      className="bg-slate-900  justify-between flex-row px-[20px] flex items-center py-[8px] w-[430px] h-[150px] text-[18px] text-white"
    >
      <Modal show={show} onClose={() => setShow(false)}>
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
          Update
        </button>
      </Modal>
      <div className="w-[300px]">
        <h1 className="text-[24px] font-semibold">{item.product_name}</h1>
        <h1 className="text-[15px] mt-2 font-medium">by {item.company_name}</h1>
        <h1 className="text-[15px] font-medium">Price: ৳ {item.price}</h1>
        <h1 className="text-[15px] font-medium">Category: {item.category}</h1>
      </div>
      <button
        onClick={() => setShow(true)}
        className="text-[18px] mx-1 text-white"
      >
        Edit
      </button>
      <ToastContainer />
    </div>
  );
}

export default ProductListCard;
