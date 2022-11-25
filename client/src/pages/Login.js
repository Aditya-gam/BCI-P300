import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Navbar from "../components/Nav";
import "../styles/App.css";
const Login = ({ setAuth }) => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    access: "",
  });

  const { email, password, access } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password, access };

      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const parseRes = await response.json();

      if (parseRes.token) {
        localStorage.setItem("token", parseRes.token);

        setAuth(true);
        toast.success("Login Successful!");
      } else {
        setAuth(false);
        toast.error(parseRes);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div style={{ height: "100%" }}>
      <Navbar />
      <div className="fullpage">
        <Fragment>
          <h1 className="text-center my-5">Login</h1>

          <main className="form-signin">
            <form onSubmit={onSubmitForm}>
              <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

              <input
                type="email"
                name="email"
                className="form-control my-3"
                placeholder="Email Address"
                value={email}
                onChange={(e) => onChange(e)}
              />

              <input
                type="password"
                name="password"
                className="form-control my-3"
                placeholder="Password"
                value={password}
                onChange={(e) => onChange(e)}
              />

              <select
                id="list"
                onChange={(e) => onChange(e)}
                name={"access"}
                className="form-control my-3"
                placeholder="Access Type"
              >
                <option value="patient">Patient</option>
                <option value="doctor">Doctor</option>
                <option value="admin">Admin</option>
              </select>

              <button className="w-100 btn btn-lg btn-primary" type="submit">
                Sign in
              </button>
            </form>
            <p>
              new here? <Link to="/register">Register</Link>
            </p>
          </main>
        </Fragment>
      </div>
    </div>
  );
};

export default Login;
