import instance from "../api/http";

export const getAllUsers = () => instance.get("users");

export const getUserById = (userId) => instance.get(`users/${userId}`);
