import axios from "axios";
import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
const Blogs = () => {
  const [allBlogs, setAllBlogs] = useState([]);
  const [searchBar, setSearchBar] = useState("");

  useEffect(() => {
    const getBlogs = async () => {
      try {
        const response = await axios.get(
          "https://codewords-web-service.onrender.com/blogs"
        );
        const data = response.data;

        setAllBlogs(data);
      } catch (error) {
        console.log(error);
      }
    };
    getBlogs();
  }, []);

  // !Implement openBlog
  const handleSearch = (event) => {
    setSearchBar(event.target.value);
  };

  const filteredData = allBlogs.filter(
    (item) =>
      item.title.toLowerCase().includes(searchBar.toLowerCase()) ||
      item.snippet.toLowerCase().includes(searchBar.toLowerCase())
  );

  return (
    <section className="min-h-screen py-10 bg-black text-white">
      {allBlogs.length === 0 ? (
        <div className=" mx-4 md:mx-20 space-y-4 font-Kanit">
          <h1 className="text-4xl md:text-8xl">
            <span className="text-transparent font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-blue-700 to-pink-800">
              CODE
            </span>
            _AND LET OTHERS KNOW <br /> HOW TO DO SO
          </h1>
          <h3 className=" text-2xl md:text-5xl py-4">
            SHARE YOUR_
            <span className="text-transparent font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700 ">
              KNOWLEDGE - EXPERIENCE - JOURNEY
            </span>
          </h3>
        </div>
      ) : (
        <ul className="mx-4 md:mx-20 space-y-4 font-Kanit list-disc">
          <h1 className="text-5xl md:text-8xl">
            <span className="text-transparent font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-blue-700 to-pink-800">
              CODE
            </span>
            _AND LET OTHERS KNOW <br /> HOW TO DO SO
          </h1>
          <h3 className="text-2xl md:text-5xl  py-4">
            SHARE YOUR_
            <span className="text-transparent font-Kanit font-semibold bg-clip-text bg-gradient-to-r from-blue-600 to-pink-700 ">
              KNOWLEDGE - EXPERIENCE - JOURNEY
            </span>
          </h3>
          <div className="md:w-1/2 font-Kanit ">
            <input
              onChange={handleSearch}
              className="border-2 py-2 w-full px-4 text-xl border-white bg-white text-black  placeholder:text-black"
              placeholder="Search Blogs"
              type="text"
            />
          </div>
          {!searchBar ? (
            <>
              {allBlogs.map((item) => {
                return (
                  <div key={item._id}>
                    <li className="py-2 space-y-2">
                      <Link
                        to={`/blogs/${item._id}`}
                        className="my-4"
                        key={item._id}
                      >
                        <h2 className=" text-2xl md:text-4xl py-2 font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-green-700 ">
                          {item.title}
                        </h2>
                      </Link>
                      <h4 className=" text-lg md:text-2xl">{item.snippet}</h4>
                      <div className="flex justify-start items-center space-x-10">
                        <p className=" text-sm md:text-lg font-Kanit ">
                          Published:-{new Date(item.createdAt).toDateString()}
                        </p>
                      </div>
                    </li>
                    <hr />
                  </div>
                );
              })}
            </>
          ) : (
            <>
              {filteredData.length !== 0 ? (
                <>
                  {filteredData.map((item) => {
                    return (
                      <div key={item._id}>
                        <li className="py-2 space-y-2">
                          <Link
                            to={`/blogs/${item._id}`}
                            className="my-4"
                            key={item._id}
                          >
                            <h2 className=" text-2xl md:text-4xl py-2 font-semibold text-transparent bg-clip-text bg-white hover:bg-gradient-to-r hover:from-yellow-400 hover:to-green-700 ">
                              {item.title}
                            </h2>
                          </Link>
                          <h4 className=" text-lg md:text-2xl">
                            {item.snippet}
                          </h4>
                          <div className="flex justify-start items-center space-x-10">
                            <p className=" text-sm md:text-lg font-Kanit ">
                              Published:-
                              {new Date(item.createdAt).toDateString()}
                            </p>
                          </div>
                        </li>
                        <hr />
                      </div>
                    );
                  })}
                </>
              ) : (
                <>
                  <div className=" text-2xl md:text-4xl font-Kanit font-bold text-white py-4">
                    No Blog found with the keyword "{searchBar}"
                  </div>
                </>
              )}
            </>
          )}
        </ul>
      )}
    </section>
  );
};

export default Blogs;
