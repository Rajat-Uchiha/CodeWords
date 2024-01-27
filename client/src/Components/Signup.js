import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Hide_icon from "./Hide_icon.png";
import Show_icon from "./Show_icon.png";
const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

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
    // <section className="px-4 md:px-20 min-h-screen bg-black ">
    //   <div className=" pt-10">
    //     <h1 className="text-3xl md:text-8xl font-Kanit font-bold  ">
    //       <span className="text-transparent font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
    //         Join with other Like Minded CODERS - PROGRAMMERS Now!
    //       </span>
    //     </h1>
    //   </div>
    //   <div className="md:flex justify-center items-start ">
    //     <div className="w-full md:w-1/2 flex justify-center">
    //       <img src={SignupToday} alt="newImage" />
    //     </div>
    //     <div className="w-full md:w-1/2 flex justify-center items-center ">
    //       <div className="font-Kanit space-y-14  w-3/4 my-10">
    //         <div className=" space-y-4 flex flex-col items-start justify-center ">
    //           <label htmlFor="">
    //             <span className=" font-Kanit text-2xl md:text-4xl font-semibold  text-white">
    //               Username
    //             </span>
    //           </label>
    //           <input
    //             onChange={getUsername}
    //             className=" p-1 md:p-2 w-full  md:text-2xl text-white bg-black/30 border-2 border-white"
    //             type="text"
    //           />
    //         </div>
    //         <div className=" space-y-4 flex flex-col items-start justify-center">
    //           <label htmlFor="">
    //             <span className="font-Kanit text-2xl md:text-4xl font-semibold  text-white">
    //               Password
    //             </span>
    //           </label>
    //           <input
    //             onChange={getPassword}
    //             className="  p-1 md:p-2 w-full  md:text-2xl text-white bg-black/30 border-2 border-white"
    //             type="password"
    //           />
    //         </div>
    //         <div className="flex justify-between items-end">
    //           <button
    //             onClick={signupBtn}
    //             className="my-2 hover:scale-110 transition-all md:hover:text-2xl text-lg md:text-xl font-bold font-Kanit text-white bg-yellow-500 py-1 md:py-2 px-12"
    //           >
    //             SIGNUP
    //           </button>
    //           <Link
    //             to="/login"
    //             className="my-2 underline underline-offset-2 hover:underline hover:underline-offset-4 transition-all  text-xl font-Kanit text-white py-2 px-12"
    //           >
    //             Login
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className=" min-h-screen flex">
      {/* <div className=" w-1/2 bg-black flex space-y-4 flex-col justify-center items-center">
        <h1 className="text-4xl md:text-8xl">
          <span className="text-transparent font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-blue-700 to-pink-800">
            CodeWords
          </span>
          <br />
        </h1>
        <p className="text-white font-Kanit underline underline-offset-8 text-4xl">
          Let's Go on a Journey!
        </p>
      </div> */}
      <div className=" w-full bg-gradient-to-bl from-blue-600 to-pink-700 flex justify-center items-center flex-col ">
        <div className="w-full md:px-0 md:w-1/3 flex justify-center items-start flex-col h-1/5  space-y-4 px-10 pt-6 ">
          <h4 className="text-4xl underline underline-offset-4 font-Kanit text-white">
            Create Account
          </h4>
          <p className="font-Kanit text-white text-lg ">
            Your Contributions will definitely make a difference.
          </p>
        </div>
        <div className="w-full md:px-0 md:w-1/3  h-3/6 flex items-start flex-col space-y-10 px-10 py-2   ">
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
                onClick={() => {
                  setHidePassword(!hidePassword);
                }}
                className="w-10 h-9  hover:cursor-pointer transition-all border-b-2 border-white"
              />
            </div>
          </form>
          <button
            onClick={signupBtn}
            className="border-2 border-white px-6 text-lg font-Kanit py-1 text-white hover:bg-black hover:border-black transition-all hover:scale-110"
          >
            Signup
          </button>
          <div className="font-Kanit text-white space-y-4">
            <p className="text-md">
              Don't have CodeWords account?
              <Link
                to="/login"
                className="underline underline-offset-4 hover:underline-offset-8 transition-all px-2 "
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
