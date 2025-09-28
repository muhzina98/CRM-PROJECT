import axiosClient from "./axiosClient";

// Register
export const registerUser = (data) => axiosClient.post("/auth/register", data);

// Login
export const loginUser = (data) => axiosClient.post("/auth/login", data);
