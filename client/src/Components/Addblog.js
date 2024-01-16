import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Addblog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [snippet, setSnippet] = useState("");
  const [body, setBody] = useState("");

  const [cookie, _] = useCookies(["auth_Token"]);

  const addBlog = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/blogs/create",
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
    <section className=" flex flex-col justify-center z-10 relative min-h-screen items-start bg-black/90 px-10">
      <div className="-rotate-12 opacity-10 -z-10 absolute flex justify-center items-center  top-40">
        <h5 className="text-yellow-400 text-7xl text-center leading-loose font-bold underline underline-offset-8">
          SHARE YOUR <br />
          THOUGHTS-LEARNINGS-EXPERIENCES
        </h5>
      </div>
      <form className="flex z-10 flex-col md:w-full space-y-6 text-white  px-20 min-h-96 font-Kanit py-10 ">
        <div className="flex flex-col space-y-4">
          <label className="text-6xl my-2 font-bold   " htmlFor="title">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-800">
              Title of the Blog
            </span>
          </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            className=" p-2  text-2xl text-white bg-black/30 border-2 border-white"
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-6xl my-2 font-bold" htmlFor="snippet">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-800">
              Snippet
            </span>
          </label>
          <input
            onChange={(e) => {
              setSnippet(e.target.value);
            }}
            className=" p-2  text-2xl text-white bg-black/30 border-2 border-white"
            type="text"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <label className="text-6xl my-2 font-bold" htmlFor="body">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-pink-800">
              Body
            </span>
          </label>
          <textarea
            onChange={(e) => {
              setBody(e.target.value);
            }}
            className=" p-2  text-2xl text-white bg-black/30 border-2 border-white"
            type="text"
          />
        </div>
      </form>
      <button
        onClick={addBlog}
        className=" text-white text-xl font-semibold py-2 hover:text-2xl transition-all my-2 px-12 flex mx-auto bg-yellow-500 font-Kanit "
      >
        ADD BLOG
      </button>
    </section>
  );
};

export default Addblog;
