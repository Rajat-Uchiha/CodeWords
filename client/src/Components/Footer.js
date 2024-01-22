import React from "react";
import { useLocation, Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import myLogo from "./myLogo.png";

const Footer = () => {
  const location = useLocation();

  const [cookie] = useCookies(["auth_Token"]);

  return (
    <footer className="bg-black text-yellow-400 font-Kanit px-20 flex border-t-2 border-white py-8">
      <div className="w-1/4">
        <ul className=" text-xl font-normal space-y-6">
          <h3 className="font-semibold">RESOURCES</h3>
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className={` ${
                location.pathname === "/" ? "underline underline-offset-4" : ""
              } hover:underline hover:underline-offset-4 hover:cursor-pointer`}
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className={` ${
                location.pathname === "/about"
                  ? "underline underline-offset-4"
                  : ""
              } hover:underline hover:underline-offset-4 hover:cursor-pointer`}
            >
              About
            </Link>
          </div>
        </ul>
      </div>
      {!cookie.auth_Token ? (
        <div className="w-1/4">
          <ul className=" text-xl font-normal space-y-6">
            <h3 className="font-semibold">AUTHETICATION</h3>
            <div className="flex flex-col space-y-4">
              <Link
                to="/login"
                className={` ${
                  location.pathname === "/login"
                    ? "underline underline-offset-4"
                    : ""
                } hover:underline hover:underline-offset-4 hover:cursor-pointer`}
              >
                Login
              </Link>
              <Link
                to="/signup"
                className={` ${
                  location.pathname === "/signup"
                    ? "underline underline-offset-4"
                    : ""
                } hover:underline hover:underline-offset-4 hover:cursor-pointer`}
              >
                Signup
              </Link>
            </div>
          </ul>
        </div>
      ) : (
        <div className="w-1/4">
          <ul className=" text-xl font-normal space-y-6">
            <h3 className="font-semibold">PERSONAL</h3>
            <div className="flex flex-col space-y-4">
              <Link
                to="/myblogs"
                className={` ${
                  location.pathname === "/myblogs"
                    ? "underline underline-offset-4"
                    : ""
                } hover:underline hover:underline-offset-4 hover:cursor-pointer`}
              >
                My Blogs
              </Link>
              <Link
                to="/addblog"
                className={` ${
                  location.pathname === "/addblog"
                    ? "underline underline-offset-4"
                    : ""
                } hover:underline hover:underline-offset-4 hover:cursor-pointer`}
              >
                Add Blog
              </Link>
            </div>
          </ul>
        </div>
      )}

      <div className="flex justify-evenly items-center w-full ">
        <div>
          <p className="text-xl">
            &#169; codewords.netlify.app. All Rights Reserved.
          </p>
        </div>
        <div>
          <img
            className="invert w-20"
            src={myLogo}
            alt="work-with-rajat_logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
