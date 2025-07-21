import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sigInUser } from "../../Redux/Action/AuthAction";
import Navbars from "../Navbar/Navbars";
function Login() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.AuthReducer);
  const [inputLogin, setInputLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChangeLogin = (e) => {
    setInputLogin({
      ...inputLogin,
      [e.target.name]: e.target.value,
    });
  };
  const roleLocalStorage = localStorage.getItem("role");
  const handleLogin = (e) => {
    e.preventDefault();

    dispatch(sigInUser(inputLogin));
  };
  useEffect(() => {
    if (users != 0) {
      Object.keys(users).forEach((key) => {
        let value = users[key];
        localStorage.setItem(key, value);
      });
    }
    if (localStorage.getItem("id")) {
      if (users.role == "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    }
  }, [handleLogin]);

  return (
    <>
      <Navbars />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg my-5">
              <div className="card-body p-0">
                {/* Nested Row within Card Body */}
                <div className="row">
                  <div className="col-lg-6">
                    <div className="p-5">
                      <h1>Silahkan Masuk</h1>
                      <p className="text-secondary">
                        Belum Punya Akun <Link to="/register">register</Link>
                      </p>
                      <form id="login-form" onSubmit={handleLogin}>
                        <div className="form-group ">
                          <label htmlFor="username" className="mb-2 fw-bold ">
                            Username:
                          </label>
                          <input
                            type="text"
                            id="username"
                            name="username"
                            value={inputLogin.username}
                            onChange={handleChangeLogin}
                            className="form-control"
                            required
                          />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="password" className="mb-2 fw-bold ">
                            Password:
                          </label>
                          <input
                            type="password"
                            id="password"
                            name="password"
                            value={inputLogin.password}
                            onChange={handleChangeLogin}
                            className="form-control"
                            required
                          />
                        </div>
                        <button type="submit " className="btn  btn-main w-100">
                          Masuk
                        </button>
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-6 d-none d-lg-block bg-login-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
