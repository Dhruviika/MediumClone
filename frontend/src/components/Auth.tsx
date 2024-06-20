import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axios from "axios";

interface InputBoxProps {
  label: string;
  onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  eyeIcon?: boolean;
}

export const InputBox = ({ label, onchange, type, eyeIcon }: InputBoxProps) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-72">
      <div className="relative w-full min-w-[200px] h-10" onChange={onchange}>
        <input
          className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-gray-200 focus:border-gray-900 shadow-lg"
          placeholder=" "
          type={showPassword ? "text" : type || "text"}
        />
        {eyeIcon && (
          <div
            className="absolute right-3 top-3"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <IoEyeOutline className="text-gray-500" />
            ) : (
              <IoEyeOffOutline className="text-gray-500" />
            )}
          </div>
        )}
        <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
          {label}
        </label>
      </div>
    </div>
  );
};

export const AuthComponent = ({ type }: { type: "signup" | "signin" }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmitSignup = async () => {
    try {
      const res = await axios.post(
        "https://backend.cornstar.workers.dev/api/v1/user/signup",
        {
          name: name,
          email: email,
          password: password,
        }
      );

      if (res) {
        const jwt = res.data.token;
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      }
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmitLogin = async () => {
    try {
      const res = await axios.post(
        "https://backend.cornstar.workers.dev/api/v1/user/signin",
        {
          email: email,
          password: password,
        }
      );

      if (res) {
        const jwt = res.data.token;
        localStorage.setItem("token", jwt);
        navigate("/blogs");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center px-16">
      <div className="font-bold text-3xl text-center">Create an account</div>
      <div className="flex flex-row justify-center">
        <div className="text-sm font-thin">
          {type == "signup" ? "Already have an account?" : "New User?"}
        </div>

        <Link
          className="text-sm font-thin ml-1 underline"
          to={type == "signup" ? "/signin" : "/"}
        >
          {type == "signup" ? "Login" : "Signup"}
        </Link>
      </div>
      <div className="mt-10  grid gap-8 grid-rows-2">
        {type == "signup" && (
          <InputBox label="Name" onchange={(e) => setName(e.target.value)} />
        )}
        <InputBox label="Email" onchange={(e) => setEmail(e.target.value)} />
        <InputBox
          label="Password"
          type="password"
          eyeIcon={true}
          onchange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="button"
        onClick={type == "signup" ? handleSubmitSignup : handleSubmitLogin}
        className="transform bg-orange-400 text-sm px-20 py-2.5 me-2 mb-2 mt-8 rounded-full text-white hover:bg-orange-600 transition duration-700 hover:scale-125 flex justify-center items-center "
      >
        {type == "signup" ? "Sign Up" : "Login"}
      </button>
    </div>
  );
};
