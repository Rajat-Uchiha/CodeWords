import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Currblog = () => {
  const location = useLocation();

  const [currBlog, setCurrBlog] = useState({});

  useEffect(() => {
    const getBlog = async () => {
      const url = location.pathname;
      const urlParts = url.split("/");
      const lastPart = urlParts[urlParts.length - 1];

      const result = await axios.get(
        `https://codewords-web-service.onrender.com/blogs/${lastPart}`
      );

      setCurrBlog(result.data);
    };
    getBlog();
  }, [currBlog, location]);

  return (
    <>
      <Navbar />
      <section className="min-h-screen bg-black px-4 md:px-20">
        {currBlog ? (
          <div className="py-10 space-y-8">
            <div className="font-Kanit  ">
              <h1 className=" text-3xl md:text-5xl ">
                <span className="text-transparent font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-yellow-400 to-green-700 ">
                  {currBlog.title}
                </span>
              </h1>
            </div>
            <div className="font-Kanit ">
              <h4 className=" text-xl md:text-3xl text-white">
                {currBlog.snippet}
              </h4>
            </div>
            <div className="font-Kanit ">
              <p className="text-lg md:text-xl text-white">{currBlog.body}</p>
            </div>
          </div>
        ) : (
          <>Loading Template</>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Currblog;
