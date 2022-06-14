import React, { Fragment, useState, useEffect } from "react";
import "./styles/App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Components
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import Nav from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Speller from "./pages/Speller";
import Alert from "./pages/Alert";
import Contact from "./pages/Contact";
import Ssvep from "./pages/Ssvep";
import Sos from "./pages/Sos";
import Water from "./pages/Water";
import Fan from "./pages/Fan";
import Food from "./pages/Food";
import Restroom from "./pages/Restroom";

toast.configure();

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const [isHome, setIsHome] = useState(true);

  const setRegister = (boolean) => {
    setIsRegistered(boolean);
  };

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // const setHome = (boolean) => {
  //   setIsHome(boolean);
  // }

  async function isAuth() {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  }

  useEffect(() => {
    isAuth();
  });

  return (
    <Fragment>
      <Router>
        {/* <Sidebar
          animate={true}
          isAuthenticated={isAuthenticated}
          setAuth={setAuth}
          setRegister={setRegister}
          isOpen={isOpen}
          toggleIsOpen={toggleIsOpen}
        />
        <Nav
          animate={true}
          isAuthenticated={isAuthenticated}
          setAuth={setAuth}
          setRegister={setRegister}
          toggleIsOpen={toggleIsOpen}
        /> */}

        <div>
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  animate={true}
                  isAuthenticated={isAuthenticated}
                  setAuth={setAuth}
                  setRegister={setRegister}
                  isOpen={isOpen}
                  toggleIsOpen={toggleIsOpen}
                />
              }
              // element={
              //   !isAuthenticated ? <Home /> : <Navigate to="/dashboard" />
              // }
            />
            <Route
              path="/login"
              element={
                !isAuthenticated ? (
                  <Login animate={true} setAuth={setAuth} />
                ) : (
                  <Navigate to="/dashboard" />
                )
              }
            />
            <Route
              path="/register"
              element={
                !isRegistered ? (
                  <Register animate={true} setRegister={setRegister} />
                ) : (
                  <Navigate to="/login" />
                )
                // <Register/>
              }
            />
            <Route
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard
                    animate={true}
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuth}
                    setRegister={setRegister}
                    isOpen={isOpen}
                    toggleIsOpen={toggleIsOpen}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/dashboard/speller"
              element={
                isAuthenticated ? (
                  <Speller
                    animate={true}
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuth}
                    setRegister={setRegister}
                    isOpen={isOpen}
                    toggleIsOpen={toggleIsOpen}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            <Route
              path="/alert"
              element={
                isAuthenticated ? (
                  <Alert
                    animate={true}
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuth}
                    setRegister={setRegister}
                    isOpen={isOpen}
                    toggleIsOpen={toggleIsOpen}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route
              path="dashboard/alert"
              element={
                isAuthenticated ? (
                  <Sos
                    animate={true}
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuth}
                    setRegister={setRegister}
                    isOpen={isOpen}
                    toggleIsOpen={toggleIsOpen}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            
             <Route
              path="dashboard/alert/contact"
              element={
                isAuthenticated ? (
                  <Contact
                    animate={true}
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuth}
                    setRegister={setRegister}
                    isOpen={isOpen}
                    toggleIsOpen={toggleIsOpen}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            
             <Route
              path="dashboard/water"
              element={
                isAuthenticated ? (
                  <Water
                    animate={true}
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuth}
                    setRegister={setRegister}
                    isOpen={isOpen}
                    toggleIsOpen={toggleIsOpen}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            
             <Route
              path="dashboard/fan"
              element={
                isAuthenticated ? (
                  <Fan
                    animate={true}
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuth}
                    setRegister={setRegister}
                    isOpen={isOpen}
                    toggleIsOpen={toggleIsOpen}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            
             <Route
              path="dashboard/food"
              element={
                isAuthenticated ? (
                  <Food
                    animate={true}
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuth}
                    setRegister={setRegister}
                    isOpen={isOpen}
                    toggleIsOpen={toggleIsOpen}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
            
             <Route
              path="dashboard/restroom"
              element={
                isAuthenticated ? (
                  <Restroom
                    animate={true}
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuth}
                    setRegister={setRegister}
                    isOpen={isOpen}
                    toggleIsOpen={toggleIsOpen}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />

            <Route
              path="/dashboard/ssvep"
              element={
                isAuthenticated ? (
                  <Ssvep
                    animate={true}
                    isAuthenticated={isAuthenticated}
                    setAuth={setAuth}
                    setRegister={setRegister}
                    isOpen={isOpen}
                    toggleIsOpen={toggleIsOpen}
                  />
                ) : (
                  <Navigate to="/login" />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </Fragment>
  );
}

export default App;
