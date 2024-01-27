import React, { useEffect, useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Myblogs = () => {
  const [cookie] = useCookies(["auth_Token"]);
  const [userBlogs, setUserBlogs] = useState([]);

  useEffect(() => {
    const getMyBlogs = async () => {
      try {
        const userID = window.localStorage.getItem("userID");
        const response = await axios.get(
          `https://codewords-web-service.onrender.com/blogs/user/${userID}`,
          {
            headers: {
              authorization: cookie.auth_Token,
            },
          }
        );
        console.log(response.data);

        setUserBlogs(response.data);
      } catch (error) {
        console.log("Error in my blogs page ", error);
      }
    };
    getMyBlogs();
  }, []);

  const deleteBlog = async (id) => {
    try {
      await axios.delete(
        `https://codewords-web-service.onrender.com/blogs/${id}`,
        {
          headers: {
            authorization: cookie.auth_Token,
            userid: window.localStorage.getItem("userID"),
          },
        }
      );
      setUserBlogs(
        userBlogs.filter((item) => {
          return item._id !== id;
        })
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="bg-black min-h-screen px-4 md:px-0">
        {userBlogs.length ? (
          <div className="pt-10 md:mx-20">
            <span className="text-transparent text-4xl md:text-6xl font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700">
              Way to Go Dev !
            </span>
            <p className="text-lg md:text-2xl pt-3 font-Kanit text-white">
              Your unique perspective and skills have the power to create
              positive change, <br />
              Contribute your brilliance to inspire a better world today!
            </p>
          </div>
        ) : (
          <div className="pt-10 md:mx-20 font-Kanit  space-y-8">
            <h1 className="text-xl text-white md:text-4xl">
              You haven't contributed yet
            </h1>
            <button className="border-2 border-yellow-500 text-lg bg-yellow-500 px-2 md:px-6 md:py-2 text-white font-semibold transition-all hover:scale-110">
              <Link to="/addblog">Add Blog</Link>
            </button>
          </div>
        )}

        {userBlogs ? (
          userBlogs.map((item) => {
            return (
              <ul
                key={item._id}
                className="px-4 md:px-20 list-disc text-white pt-4 font-Kanit space-y-4"
              >
                <li className="space-y-4">
                  <Link
                    to={`/blogs/${item._id}`}
                    className="my-4"
                    key={item._id}
                  >
                    <h2 className="text-2xl md:text-4xl py-2 font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-green-700 ">
                      {item.title}
                    </h2>
                  </Link>
                  <h4 className=" text-lg md:text-2xl text-white">
                    {item.snippet}
                  </h4>
                  <div className="flex justify-start items-center space-x-10 text-white">
                    <p className="text-md md:text-lg font-Kanit">
                      Published on :- {new Date(item.createdAt).toDateString()}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => {
                        deleteBlog(item._id);
                      }}
                      className="border-2 transition-all border-red-600 hover:bg-red-600 px-4 py-1 font-Kanit text-md md:text-lg hover:scale-105"
                    >
                      Delete
                    </button>
                  </div>
                </li>
                <hr />
              </ul>
            );
          })
        ) : (
          <div>You have not contributed any blog as of now.</div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Myblogs;
