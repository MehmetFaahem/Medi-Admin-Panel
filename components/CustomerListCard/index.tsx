import React, { useEffect, useState } from "react";
import Modal from "../Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { fetchUsers } from "../../redux/userSlice";

export default function CustomerListCard({ item, index }: any) {
  const [show, setShow] = useState(false);
  const [details, setDetails]: any = useState({
    address: item.address,
    discount: item.discount,
    name: item.name,
    email: item.email,
    phone: item.phone,
    dateofbirth: item.dateofbirth,
    gender: item.gender,
  });

  useEffect(() => {
    fetchUsers();
  }, [details]);

  const notify = () => toast("User Is Successfully Updated");

  const Update = async ({ id }: any) => {
    // await fetch(`http://localhost:3003/api/users/${item._id}`, {
    //   method: "PUT",
    //   body: JSON.stringify(details),
    // })
    //   .then((response) => {
    //     response.json();
    //     if (response.status == 201) {
    //       notify();
    //       setShow(false);
    //     }
    //   })
    //   .then((data) => console.log(data));

    axios
      .put(`http://localhost:3003/api/users/${item._id}`, details)
      .then(function (response) {
        if (response.status == 200) {
          notify();
          setShow(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div
      key={index}
      className="bg-slate-900 mt-6 justify-between flex-row px-[40px] flex items-center py-[20px] w-auto h-auto text-[18px] text-white"
    >
      <Modal show={show} onClose={() => setShow(false)}>
        <div>
          <h1 className="text-white font-bold">Name</h1>
          <input
            value={details.name}
            onChange={(e) => setDetails({ ...details, name: e.target.value })}
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Email</h1>
          <input
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Phone</h1>
          <input
            value={details.phone}
            min={1}
            onChange={(e) => setDetails({ ...details, phone: e.target.value })}
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Discount</h1>
          <input
            value={details.discount}
            onChange={(e) => {
              setDetails({ ...details, discount: e.target.value });
            }}
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Address</h1>
          <input
            value={details.address}
            onChange={(e) =>
              setDetails({ ...details, address: e.target.value })
            }
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Date Of Birth</h1>
          <input
            value={details.dateofbirth}
            onChange={(e) =>
              setDetails({ ...details, dateofbirth: e.target.value })
            }
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <div className="mt-3">
          <h1 className="text-white font-bold">Gender</h1>
          <input
            value={details.gender}
            onChange={(e) => setDetails({ ...details, gender: e.target.value })}
            className="w-[400px] border-black border-2 border-solid mt-[10px] h-[70px] bg-white px-[10px]"
          />
        </div>
        <button
          className="my-2 p-2 bg-white self-end mt-6 rounded-xl text-black font-[18px]"
          onClick={() => Update(item._id)}
        >
          Update
        </button>
      </Modal>
      <div className="w-[700px]">
        <h1 className="text-[24px] font-semibold">{item.name}</h1>
        <h1 className="text-[15px] font-medium">ID: {item._id}</h1>
        <h1 className="text-[15px] mt-2 font-medium">Email: {item.email}</h1>
        <h1 className="text-[15px] font-medium">Phone: {item.phone}</h1>
        <h1 className="text-[15px] font-medium">Gender: {item.gender}</h1>
        <h1 className="text-[15px] font-medium">Address: {item.address}</h1>
        <h1 className="text-[15px] font-medium">
          Date Of Birth: {item.dateofbirth}
        </h1>
        <h1 className="text-[15px] font-medium">
          Provided Discount: {item.discount} %
        </h1>
        {/* <div className="grid grid-cols-3 grid-flow-row gap-[50px]">
          
             
        </div> */}
        <button
          onClick={() => setShow(true)}
          className="text-[18px] bg-slate-500 p-2 rounded-lg place-self-end mt-3 text-white"
        >
          Edit
        </button>
        <ToastContainer />
      </div>
    </div>
  );
}
