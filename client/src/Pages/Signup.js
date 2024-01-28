import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Hide_icon from "../Static/Hide_icon.png";
import Show_icon from "../Static/Show_icon.png";
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
    <section className=" min-h-screen flex">
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
                alt="Show_Hide_password"
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
