import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";
import { RxCross1 } from "react-icons/rx";
import { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  const { nav_username, setNav_username } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [cookie, _, removeCookie] = useCookies(["auth_Token"]);
  const [isBurgerClicked, setIsBurgerClicked] = useState(false);

  const logout = () => {
    removeCookie("auth_Token");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("username");
    setNav_username("");
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-black text-white py-4 min-w-full ">
        <ul className="flex justify-between items-center space-x-10 mx-2 md:ml-20 font-Kanit text-2xl md:mx-10 ">
          <div>
            <span className="text-transparent font-Kanit text-md md:text-3xl font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
              CodeWords
            </span>
          </div>
          <div className="md:hidden flex justify-center items-center">
            <button
              onClick={() => {
                setIsBurgerClicked(!isBurgerClicked);
              }}
            >
              {!isBurgerClicked ? <GiHamburgerMenu /> : <RxCross1 />}
            </button>
          </div>

          {/* FOR BIG SCREENS */}

          <div className="hidden space-x-10 md:flex">
            <li
              className={`cursor-pointer ${
                location.pathname === "/" ? " text-yellow-400" : ""
              } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
            >
              <Link to="/">Blogs</Link>
            </li>
            <li
              className={`cursor-pointer ${
                location.pathname === "/about" ? " text-yellow-400" : ""
              } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
            >
              <Link to="/about">About</Link>
            </li>
            {!cookie.auth_Token ? (
              <>
                <li
                  className={`cursor-pointer ${
                    location.pathname === "/login" ? " text-yellow-400" : ""
                  } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
                >
                  <Link to="/login">Login</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    location.pathname === "/signup" ? " text-yellow-400" : ""
                  } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
                >
                  <Link to="/signup">SignUp</Link>
                </li>
              </>
            ) : (
              <div className="flex items-center justify-end space-x-6 w-full">
                <li
                  className={`cursor-pointer ${
                    location.pathname === "/myblogs" ? " text-yellow-400" : ""
                  } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
                >
                  <Link to="/myblogs/">My Blogs</Link>
                </li>
                <li
                  className={`cursor-pointer ${
                    location.pathname === "/addblog" ? " text-yellow-400" : ""
                  } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
                >
                  <Link to="/addblog">Add Blog</Link>
                </li>
                <div className="flex space-x-4  ">
                  <h3 className="text-xl underline underline-offset-4">
                    Hi👋🏻 {nav_username}
                  </h3>
                  <button
                    onClick={logout}
                    className="text-xl border-2 border-red-600 bg-red-600 px-4 hover:scale-110 transition-all "
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </ul>
      </nav>

      {/* For small screen */}
      <div
        className={`px-2 pb-10 transition-all bg-black/95 absolute z-100 w-full ${
          isBurgerClicked ? "flex  min-h-60 " : " hidden h-0"
        } items-center md:hidden`}
      >
        <ul className="text-white flex justify-start items-start flex-col font-Kanit text-xl space-y-4 ">
          <li
            className={`cursor-pointer ${
              location.pathname === "/" ? " text-yellow-400" : ""
            } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
          >
            <Link to="/">Blogs</Link>
          </li>
          <li
            className={`cursor-pointer ${
              location.pathname === "/about" ? " text-yellow-400" : ""
            } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
          >
            <Link to="/about">About</Link>
          </li>
          {!cookie.auth_Token ? (
            <>
              <li
                className={`cursor-pointer ${
                  location.pathname === "/login" ? " text-yellow-400" : ""
                } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
              >
                <Link to="/login">Login</Link>
              </li>
              <li
                className={`cursor-pointer ${
                  location.pathname === "/signup" ? " text-yellow-400" : ""
                } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
              >
                <Link to="/signup">SignUp</Link>
              </li>
            </>
          ) : (
            <div className=" flex-col space-y-2 md:space-y-0 md:flex md:flex-row items-center justify-end md:space-x-6 w-full ">
              <li
                className={`cursor-pointer ${
                  location.pathname === "/myblogs" ? " text-yellow-400" : ""
                } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
              >
                <Link to="/myblogs/">My Blogs</Link>
              </li>
              <li
                className={`cursor-pointer ${
                  location.pathname === "/addblog" ? " text-yellow-400" : ""
                } hover:text-yellow-400 hover:underline hover:underline-offset-4`}
              >
                <Link to="/addblog">Add Blog</Link>
              </li>
              <div className=" flex flex-col space-y-4 md:space-y-0 justify-start items-start  md:flex-row md:flex md:space-x-4  ">
                <h3 className="text-xl underline underline-offset-4">
                  Hi👋🏻 {nav_username}
                </h3>
                <button
                  onClick={logout}
                  className="text-xl border-2 border-red-600 bg-red-600 px-4 hover:scale-110 transition-all "
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </ul>
      </div>
      <hr />
    </>
  );
};

export default Navbar;
