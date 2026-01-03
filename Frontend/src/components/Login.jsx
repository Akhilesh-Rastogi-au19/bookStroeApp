import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useAuth } from "../context/AuthProvider.jsx";



function Login() {
  const [, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
  
    try {
      const res = await axios.post(
        "http://localhost:4001/user/login",
        userInfo
      );
  
      if (res.data) {
        alert("Logged in successfully");
  
        // ✅ save user
        localStorage.setItem(
          "Users",
          JSON.stringify(res.data.user)
        );
  
        // ✅ update auth context
        setAuthUser(res.data.user);
  
        // ✅ close modal
        document.getElementById("my_modal_3").close();
      }
    } catch (err) {
      if (err.response) {
        alert("Error: " + err.response.data.message);
      }
    }
  };
  

  return (
   
     
    <div>
    
      <button
        className=" bg-black text-white  px-4 py-2  ml-10 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
        onClick={() => document.getElementById("my_modal_3").showModal()} >
        Login</button>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={() => document.getElementById("my_modal_3").close()}
            >
              ✕
            </Link>

             {/* login */}

            <h3 className="font-bold text-lg">Login</h3>

            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-hite rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                Login
              </button>
              <p>
                Not registered? {/* signup */}
                <Link
                  to="/Signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>{" "}
              </p>
            </div>
          </form>

          {/* Email */}

          {/* Password */}

          {/* Button */}
        </div>
      </dialog>
    </div>
  );
}

export default Login;
