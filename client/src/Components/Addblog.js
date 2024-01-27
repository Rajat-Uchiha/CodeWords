import { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import Login from "./Login";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

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
        <section className=" w-full flex justify-center min-h-screen md:px-10 items-center bg-black">
          <div className="w-1/2 mx-auto min-h-screen flex justify-center items-start">
            <h4 className="font-Kanit text-white/90 text-7xl leading-normal font-bold">
              Unleash your thoughts and passions on CodeWords <br />
              Your story awaits a global audience!
            </h4>
          </div>
          <form className="flex flex-col md:w-1/2 mx-auto min-h-screen space-y-14 md:px-20  font-Kanit py-10 shadow-xl  ">
            <div className=" ">
              <h3 className="text-white text-2xl ">
                Step into the world of expression with our easy-to-use blog
                space. Your ideas matter, share them with the world
                effortlessly.
              </h3>
            </div>
            <div className="flex flex-col space-y-4 ">
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                className=" p-1 text-lg md:p-2 md:text-2xl text-white border-b-2 border-white outline-none bg-transparent placeholder:text-white"
                type="text"
                placeholder="Title"
              />
            </div>
            <div className="flex flex-col space-y-4 ">
              <input
                onChange={(e) => {
                  setSnippet(e.target.value);
                }}
                className=" p-1 text-lg md:p-2 md:text-2xl text-white border-b-2 border-white outline-none bg-transparent placeholder:text-white"
                type="text"
                placeholder="Snippet"
              />
            </div>
            <div className="flex flex-col space-y-4 ">
              <textarea
                onChange={(e) => {
                  setBody(e.target.value);
                }}
                className=" p-1 text-lg md:p-2 md:text-2xl text-white border-b-2 border-white outline-none bg-transparent placeholder:text-white"
                type="text"
                placeholder="Body"
              />
            </div>
            <button
              onClick={addBlog}
              className=" border-2 border-white font-Kanit text-white text-2xl w-1/4 py-1 hover:bg-white transition-all hover:text-black"
            >
              Submit
            </button>
          </form>
        </section>
      )}
      <Footer />
    </>
  );
};

export default Addblog;
