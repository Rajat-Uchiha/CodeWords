import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
import Hide_icon from "./Hide_icon.png";
import Show_icon from "./Show_icon.png";
import axios from "axios";

const Login = () => {
  const { setNav_username } = useContext(AppContext);
  const navigate = useNavigate();

  const [_, setCookie] = useCookies(["auth_Token"]);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const getUsername = (e) => {
    setUsername(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const loginBtn = async () => {
    console.log("Logging in");
    try {
      const response = await axios.post(
        "https://codewords-web-service.onrender.com/user/login",
        {
          username,
          password,
        }
      );
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
    <section className="border-2 border-black min-h-screen flex">
      <div className=" w-1/2 bg-black flex space-y-4 flex-col justify-center items-center">
        <h1 className="text-4xl md:text-8xl">
          <span className="text-transparent font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-blue-700 to-pink-800">
            CodeWords
          </span>
          <br />
        </h1>
        <p className="text-white font-Kanit underline underline-offset-8 text-4xl">
          Welcome Back!
        </p>
      </div>
      <div className=" w-1/2 bg-gradient-to-bl from-blue-600 to-pink-700 flex justify-center items-center flex-col ">
        <div className=" w-1/2 flex justify-start items-start flex-col h-1/6 space-y-4">
          <h4 className="text-4xl underline underline-offset-4 font-Kanit text-white">
            Login
          </h4>
          <p className="font-Kanit text-white text-lg ">
            Login your CodeWords account
          </p>
        </div>
        <div className="h-3/6 w-1/2 flex items-start flex-col space-y-10 ">
          <form className="space-y-4 flex flex-col w-full">
            <input
              onChange={getUsername}
              className=" font-Kanit text-white text-xl bg-transparent border-white border-b-2 py-2 focus:outline-none  placeholder:text-white"
              type="text"
              placeholder="Username"
            />
            <div className="flex justify-center items-end">
              <input
                onChange={getPassword}
                className=" w-full font-Kanit text-white text-xl bg-transparent border-white border-b-2 py-2 focus:outline-none  placeholder:text-white"
                type={hidePassword ? "password" : "text"}
                placeholder="Password"
              />
              <img
                src={hidePassword ? Hide_icon : Show_icon}
                alt="hiddenIcon"
                onClick={() => {
                  setHidePassword(!hidePassword);
                }}
                className="w-10 h-9  hover:cursor-pointer transition-all border-b-2 border-white"
              />
            </div>
          </form>
          <button
            onClick={loginBtn}
            className="border-2 border-white px-6 text-lg font-Kanit py-1 text-white hover:bg-black hover:border-black transition-all hover:scale-110"
          >
            Login
          </button>
          <div className="font-Kanit text-white space-y-4">
            <p className="text-md">
              Don't have CodeWords account?
              <Link
                to="/signup"
                className="underline underline-offset-4 hover:underline-offset-8 transition-all px-2 "
              >
                Signup
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
