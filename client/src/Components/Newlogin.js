import React from "react";

const Newlogin = () => {
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
              className=" font-Kanit text-white text-xl bg-transparent border-white border-b-2 py-2 focus:outline-none  placeholder:text-white"
              type="text"
              placeholder="Username"
            />
            <input
              className=" font-Kanit text-white text-xl bg-transparent border-white border-b-2 py-2 focus:outline-none  placeholder:text-white"
              type="password"
              placeholder="Password"
            />
          </form>
          <button className="border-2 border-white px-6 text-lg font-Kanit py-1 text-white hover:bg-black hover:border-black transition-all hover:scale-110">
            Login
          </button>
          <div className="font-Kanit text-white space-y-4">
            <p className="text-md">
              Don't have CodeWords account?
              <button className="underline underline-offset-4 hover:underline-offset-8 transition-all px-2 ">
                Signup
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newlogin;
