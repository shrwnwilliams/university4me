import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as actionType from '../../constants/actionTypes';
import "./style.css";

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');
  };

  useEffect(() => {
    setInterval(() => {
      setUser(JSON.parse(localStorage.getItem('profile')));
    })
  }, [], 60000);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        University4Me
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" ||
                window.location.pathname === "/home"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={
                window.location.pathname === "/profile"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              User Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/search"
              className={
                window.location.pathname === "/search"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Search
            </Link>
          </li>
          {!user?.result ? (
          <li className="nav-item">
            <Link
              to="/signup"
              className={
                window.location.pathname === "/signup"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Login | Signup
            </Link>
          </li>
          ) : (
          <li className="nav-item">
            <Link
              to="/logout"
              className={
                window.location.pathname === "/logout"
                  ? "nav-link active"
                  : "nav-link"
              }
              onClick={logout}
            >
              Logout
            </Link>
          </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
