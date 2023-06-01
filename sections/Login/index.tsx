import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setStatus } from "../../redux/userSlice";

function Login() {
  const [details, setDetails] = useState({
    username: "",
    password: "",
  });

  const dispatch = useDispatch();

  const Login = () => {
    if ((details.username == "admin", details.password == "admin987654321")) {
      dispatch(setStatus(true));
    } else {
      alert("Please Provide right Username and Password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center place-content-center place-items-center">
      <h1 className="mt-[50px] text-black text-[40px] font-bold">Login</h1>
      <div className="mt-[30px]">
        <div>
          <h1 className="text-black font-bold text-[20px]">Username</h1>
          <input
            value={details.username}
            onChange={(e) =>
              setDetails({ ...details, username: e.target.value })
            }
            className="w-[400px] border-black border-2 border-solid mt-[3px] h-[70px] bg-white px-[10px]"
            placeholder="Username"
          />
        </div>
        <div className="mt-[20px]">
          <h1 className="text-black font-bold text-[20px]">Password</h1>
          <input
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            className="w-[400px] border-black border-2 border-solid mt-[3px] h-[70px] bg-white px-[10px]"
            placeholder="Password"
            type="password"
          />
        </div>
        <button
          onClick={() => Login()}
          className="w-[400px] text-[20px] bg-black border-2 border-solid mt-[20px] h-[70px] text-white px-[10px]"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
