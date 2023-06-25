import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../redux/userSlice";
import CustomerListCard from "../../components/CustomerListCard";

function CustomersListSection() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch<any>();
  const users = useSelector((state: any) => state.users);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [users.length]);
  return (
    <div>
      <input
        placeholder="Search a User By name"
        onChange={(e) => setSearch(e.target.value)}
        className="w-[900px] p-[20px] border-solid border-2 border-black my-6 bg-white"
      />
      {users
        .filter((value: any) => {
          if (search == "") {
            return value;
          } else if (value.name.toLowerCase().includes(search.toLowerCase())) {
            return value;
          }
        })
        .map((item: any, index: any) => (
          <div key={index}>
            <CustomerListCard item={item} index={index} />
          </div>
        ))}
    </div>
  );
}

export default CustomersListSection;
