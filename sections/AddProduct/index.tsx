import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function AddProduct() {
  const [image, setImage] = useState();
  const [details, setDetails]: any = useState({
    product_name: "",
    company_name: "",
    price: 0,
    category: "",
    indication: "",
    pharmacology: "",
  });

  const notify = () => toast("Your Product Is Successfully Added");

  const Addtodatabase = async () => {
    const formData = new FormData();

    for (const name in details) {
      formData.append(name, details[name]);
    }

    console.log(formData);

    await fetch("https://medi-backend.vercel.app/api/products", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        response.json();
        if (response.status == 201) {
          notify();
        }
      })
      .then((data) => console.log(data));
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex justify-between space-x-10 items-center">
        <div>
          <div>
            <h1 className="text-black font-bold text-[20px]">Product Name</h1>
            <input
              className="w-[400px] border-black border-2 border-solid mt-[20px] h-[70px] bg-white px-[10px]"
              placeholder="Product Name"
              value={details.product_name}
              onChange={(e) =>
                setDetails({ ...details, product_name: e.target.value })
              }
            />
          </div>
          <div className="mt-[30px]">
            <h1 className="text-black font-bold text-[20px]">
              Product Price in BDT
            </h1>
            <input
              className="w-[400px] border-black border-2 border-solid mt-[20px] h-[70px] bg-white px-[10px]"
              placeholder="Product Price"
              type="number"
              value={details.price}
              onChange={(e) =>
                setDetails({ ...details, price: e.target.value })
              }
              min={1}
            />
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-black font-bold text-[20px]">Comapny Name</h1>
            <input
              value={details.company_name}
              onChange={(e) =>
                setDetails({ ...details, company_name: e.target.value })
              }
              className="w-[400px] border-black border-2 border-solid mt-[20px] h-[70px] bg-white px-[10px]"
              placeholder="Company Name"
            />
          </div>
          <div className="mt-[30px]">
            <h1 className="text-black font-bold text-[20px]">Category</h1>
            <input
              value={details.category}
              onChange={(e) =>
                setDetails({ ...details, category: e.target.value })
              }
              className="w-[400px] border-black border-2 border-solid mt-[20px] h-[70px] bg-white px-[10px]"
              placeholder="Category"
            />
          </div>
        </div>
      </div>
      <div className="mt-[30px]">
        <h1 className="text-black font-bold text-[20px]">Indication</h1>
        <textarea
          value={details.indication}
          onChange={(e) =>
            setDetails({ ...details, indication: e.target.value })
          }
          className="w-[100%] py-[15px] border-black border-2 border-solid mt-[20px] h-[200px] bg-white px-[10px]"
          placeholder="Indication"
        />
      </div>
      <div className="mt-[30px]">
        <h1 className="text-black font-bold text-[20px]">Pharmacology</h1>
        <textarea
          value={details.pharmacology}
          onChange={(e) =>
            setDetails({ ...details, pharmacology: e.target.value })
          }
          className="w-[100%] py-[15px] border-black border-2 border-solid mt-[20px] h-[200px] bg-white px-[10px]"
          placeholder="Pharmacology"
        />
      </div>
      {/* <div>
        <label
          htmlFor="image"
          className="text-white cursor-pointer flex bg-slate-900 p-3 space-x-2 place-items-center rounded-lg mt-4 "
        >
          <FontAwesomeIcon
            icon={faCamera}
            height="30px"
            width="30px"
            color="white"
          />
          <h1>Upload Image</h1>
        </label>
        <input
          onChange={(e: any) => {
            setImage(e.target.files[0]);
          }}
          type="file"
          id="image"
          name="image"
          required
          hidden
        />
      </div> */}
      <div className="flex place-content-center items-center place-items-center">
        <button
          onClick={() => Addtodatabase()}
          className="text-white text-center cursor-pointer flex bg-slate-900 p-3 space-x-2 place-items-center rounded-lg mt-4 "
        >
          Add to Database
        </button>
      </div>
      <ToastContainer />
    </div>
  );
}

export default AddProduct;
