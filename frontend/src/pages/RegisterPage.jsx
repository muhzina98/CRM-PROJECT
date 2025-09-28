import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerThunk } from "../redux/slices/authSlice";
import { useNavigate, Link } from "react-router-dom";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error } = useSelector((state) => state.auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(registerThunk({ name, email, password }))
      .unwrap()
      .then(() => navigate("/login"))
      .catch(() => {}); // error already handled in slice
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-sm" style={{ width: "350px" }}>
        <h3 className="mb-3 text-center">Register</h3>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />
          </div>

          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>
        </form>

        <div className="mt-3 text-center">
          <small>
            Already have an account? <Link to="/login">Login</Link>
          </small>
        </div>
      </div>
    </div>
  );
}
