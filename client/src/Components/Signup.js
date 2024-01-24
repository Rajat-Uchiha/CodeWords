import { useState } from "react";
import SignupToday from "./SignupToday.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const getUsername = (e) => {
    setUsername(e.target.value);
  };
  const getPassword = (e) => {
    setPassword(e.target.value);
  };

  const signupBtn = async () => {
    try {
      const response = await axios.post(
        "https://codewords-web-service.onrender.com/user/signup",
        {
          username,
          password,
        }
      );

      window.localStorage.setItem("userID", response.data.userID);
      window.localStorage.setItem("username", response.data.username);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="px-4 md:px-20 min-h-screen bg-black ">
      <div className=" pt-10">
        <h1 className="text-3xl md:text-8xl font-Kanit font-bold  ">
          <span className="text-transparent font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
            Join with other Like Minded CODERS - PROGRAMMERS Now!
          </span>
        </h1>
      </div>
      <div className="md:flex justify-center items-start ">
        <div className="w-full md:w-1/2 flex justify-center">
          <img src={SignupToday} alt="newImage" />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center ">
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
                className="  p-1 md:p-2 w-full  md:text-2xl text-white bg-black/30 border-2 border-white"
                type="password"
              />
            </div>
            <div className="flex justify-between items-end">
              <button
                onClick={signupBtn}
                className="my-2 hover:scale-110 transition-all md:hover:text-2xl text-lg md:text-xl font-bold font-Kanit text-white bg-yellow-500 py-1 md:py-2 px-12"
              >
                SIGNUP
              </button>
              <Link
                to="/login"
                className="my-2 underline underline-offset-2 hover:underline hover:underline-offset-4 transition-all  text-xl font-Kanit text-white py-2 px-12"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
