
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Home/Home";
import Layout from "./Component/layout/Layout";
import Login from "./Component/Login/Login";
import Cart from "./Component/Section/Cart";
import Signin from "./signin/Signin";
import Post from "./poasting/Post";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/signin" element={<Signin />}/>
          <Route path="/post" element={<Post/>}/>
          {/* <Route path="/login" element={<Login />} /> */}
          {/* Define other routes as needed */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;



