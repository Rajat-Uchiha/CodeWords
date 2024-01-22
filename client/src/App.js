import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Blogs from "./Components/Blogs";
import About from "./Components/About";
import Addblog from "./Components/Addblog";
import Currblog from "./Components/Currblog";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Footer from "./Components/Footer";
import Myblogs from "./Components/Myblogs";
import { useState, createContext } from "react";

export const AppContext = createContext();

function App() {
  const [nav_username, setNav_username] = useState(
    window.localStorage.getItem("username")
  );

  return (
    <>
      <Router>
        <AppContext.Provider value={{ nav_username, setNav_username }}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Blogs />} />
            <Route path="about" element={<About />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route
              path="addblog"
              element={nav_username ? <Addblog /> : <Login />}
            />
            <Route
              path="myblogs"
              element={nav_username ? <Myblogs /> : <Login />}
            />
            <Route path={`/blogs/:id`} element={<Currblog />} />
          </Routes>
          <Footer />
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
