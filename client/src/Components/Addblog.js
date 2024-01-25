import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const Addblog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");

  const [cookie] = useCookies(["auth_Token"]);

  const addBlog = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://codewords-web-service.onrender.com/blogs/create",
        {
          title,
          snippet,
          body,
        },
        {
          headers: {
            authorization: cookie.auth_Token,
            userID: window.localStorage.getItem("userID"),
          },
        }
      )
      .then(() => {
        navigate("/");
      })
      .catch((err) => {
        console.log("Blog Doesn't get saved");
      });
  };

  return (
    <>
      <Navbar />
      {!cookie.auth_Token ? (
        <Login />
      ) : (
        <section className=" w-full flex flex-col justify-center min-h-96 items-start md:px-10 py-10 bg-black ">
          <form className="flex flex-col md:w-1/2 mx-auto space-y-6 md:px-20  font-Kanit py-10 ">
            <div className="flex flex-col space-y-4">
              <label
                className="text-3xl md:text-4xl my-2 font-medium"
                htmlFor="title"
              >
                <span className=" text-white">Title of the Blog</span>
              </label>
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className=" p-1 text-xl md:p-2 md:text-2xl text-white bg-black/30 border-2 border-white"
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label
                className="text-3xl md:text-4xl my-2 font-medium"
                htmlFor="snippet"
              >
                <span className="text-white">Snippet</span>
              </label>
              <input
                onChange={(e) => {
                  setSnippet(e.target.value);
                }}
                className="p-1 text-xl md:p-2 md:text-2xl text-white bg-black/30 border-2 border-white"
                type="text"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label
                className="text-3xl md:text-4xl my-2 font-medium"
                htmlFor="body"
              >
                <span className="text-white">Body</span>
              </label>
              <textarea
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                className="p-1 text-xl md:p-2 md:text-2xl text-white bg-black/30 border-2 border-white"
                type="text"
              />
            </div>
          </form>
          <button
            onClick={addBlog}
            className=" text-white text-sm  md:text-xl font-semibold py-2 hover:text-2xl transition-all my-2 px-12 flex mx-auto bg-yellow-500 font-Kanit "
          >
            ADD BLOG
          </button>
        </section>
      )}
    </>
  );
};

export default Addblog;
