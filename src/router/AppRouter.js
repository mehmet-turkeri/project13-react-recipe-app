import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/notfound/NotFound";
import Footer from "../components/footer/Footer";

const AppRouter = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <BrowserRouter>
      {showNav && <Navbar />}

      <Routes>
        <Route path="/home" element={<PrivateRouter />}>
          <Route
            path=""
            element={<Home setShowNav={setShowNav} showNav={showNav} />}
          />
        </Route>

        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />} />
        </Route>        

        <Route
          path="/"
          element={<Login setShowNav={setShowNav} showNav={showNav} />}
        />

        <Route path="/details" element={<PrivateRouter />}>
          <Route path="" element={<Details />} />
        </Route>

        <Route path="*" element={<PrivateRouter />}>
          <Route path="" element={<NotFound />} />
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default AppRouter;
