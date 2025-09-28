import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginThunk } from "../redux/slices/authSlice";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/dashboard";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);
      await dispatch(loginThunk({ email, password })).unwrap();
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.response?.data?.error?.message || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h4 className="mb-3 text-center">Login</h4>

        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>

          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Logging in..." : "Sign in"}
          </button>
        </form>

        <div className="mt-3 text-center">
          <small>
            No account? <Link to="/register">Register</Link>
          </small>
        </div>
      </div>
    </div>
  );
}
