import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Addblog from "./Pages/Addblog";
import Currblog from "./Components/Currblog";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
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
        </AppContext.Provider>
      </Router>
    </>
  );
}

export default App;
