import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/slices/authSlice";

/**
 * Bootstrap navbar that shows different options based on auth state.
 */
export default function Header() {
  const auth = useSelector((s) => s.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          CRM App
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample"
          aria-controls="navbarsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {auth.token && (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/customers">
                    Customers
                  </Link>
                </li>
              </>
            )}
          </ul>

          <div className="d-flex align-items-center">
            {auth.user ? (
              <>
                <span className="text-white me-3">Hi, {auth.user.name}</span>
                <button onClick={handleLogout} className="btn btn-outline-light btn-sm">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-outline-light btn-sm me-2">
                  Login
                </Link>
                <Link to="/register" className="btn btn-light btn-sm">
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
