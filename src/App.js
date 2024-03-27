import React, { useContext } from "react";
import { Usecontext1 } from "./UserContext/Usercontext1";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Feeds from "./Components/Feeds";
import Posts from "./Components/Posts";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Albums from "./Components/Albums";
import Comments from "./Components/Comments";
import Employees from "./Components/Employees";

export default function App() {
  const { flag, setFlag } = useContext(Usecontext1);
  const PATH = process.env.REACT_APP_PATH;
  return (
    <>
    <Router>
      {flag == 0 || flag == 2 ? <Login /> : <Home />}
      {flag === 2 && <Register />}
        <Routes>
          <Route index path={`${PATH}/`}  element={<Feeds />}></Route>
          <Route path={`${PATH}/post`} element={<Posts />}></Route>
          <Route path={`${PATH}/albums`} element={<Albums />}></Route>
          <Route path={`${PATH}/comments`} element={<Comments/>}></Route>
          <Route path={`${PATH}/employees`} element={<Employees/>}></Route>
        </Routes>
      </Router>
    </>
  );
}
