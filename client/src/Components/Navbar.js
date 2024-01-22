import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { AppContext } from "../App";
import { useContext } from "react";
const Navbar = () => {
  const { nav_username, setNav_username } = useContext(AppContext);

  const navigate = useNavigate();
  const location = useLocation();

  const [cookie, removeCookie] = useCookies(["auth_Token"]);

  const logout = () => {
    removeCookie("auth_Token");
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("username");
    setNav_username("");
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-black text-white py-4">
        <ul className="flex justify-between items-center space-x-10 ml-20 font-Kanit text-2xl mx-10 ">
          <div>
            <span className="text-transparent font-Kanit text-3xl font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
              CodeWords
            </span>
          </div>
          <div className="flex space-x-10">
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
      <hr />
    </>
  );
};

export default Navbar;
