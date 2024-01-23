import React, { useState } from "react";
import LoginImage from "./LoginImage.svg";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";

import axios from "axios";
const Login = () => {
  const { setNav_username } = useContext(AppContext);
  const navigate = useNavigate();

  const [_, setCookie] = useCookies(["auth_Token"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUsername = (e) => {
    setUsername(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const loginBtn = async () => {
    console.log("Logging in");
    try {
      const response = await axios.post("http://localhost:3001/user/login", {
        username,
        password,
      });
      console.log(response);

      setCookie("auth_Token", response.data.token);
      window.localStorage.setItem("userID", response.data.userID);
      window.localStorage.setItem("username", response.data.username);
      setNav_username(response.data.username);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="px-4 md:px-20 min-h-screen bg-black ">
      <div className=" pt-10">
        <h1 className=" text-3xl md:text-8xl font-Kanit font-bold ">
          <span className="text-transparent font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
            Hey! 👋🏻 Welcome Back
          </span>
          <br />
        </h1>
      </div>

      <div className=" md:flex justify-center items-start ">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={LoginImage} alt="newImage" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center  ">
          <div className="font-Kanit space-y-14  w-3/4 my-10">
            <div className=" space-y-4 flex flex-col items-start justify-center ">
              <label htmlFor="">
                <span className=" font-Kanit text-2xl md:text-4xl font-semibold  text-white">
                  Username
                </span>
              </label>
              <input
                onChange={getUsername}
                className=" p-1 md:p-2 w-full  md:text-2xl text-white bg-black/30 border-2 border-white"
                type="text"
              />
            </div>
            <div className=" space-y-4 flex flex-col items-start justify-center">
              <label htmlFor="">
                <span className="font-Kanit text-2xl md:text-4xl font-semibold  text-white">
                  Password
                </span>
              </label>
              <input
                onChange={getPassword}
                className=" w-full p-1 md:p-2 md:text-2xl text-white bg-black/30 border-2 border-white"
                type="password"
              />
            </div>
            <div className="flex justify-between items-end">
              <button
                onClick={loginBtn}
                className="my-2 hover:scale-110 transition-all md:hover:text-2xl text-lg md:text-xl font-bold font-Kanit text-white bg-yellow-500 py-1 md:py-2 px-12"
              >
                LOGIN
              </button>
              <Link
                to="/signup"
                className="my-2 underline underline-offset-2 hover:underline hover:underline-offset-4 transition-all  text-xl font-Kanit text-white py-2 px-12"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
