import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async (data: object) => axios.post(`${API_URL}/register`, data);
export const verifyEmail = async (token: string) => axios.get(`${API_URL}/verify/${token}`);
export const adminLogin = async (data: object) => axios.post(`${API_URL}/admin-login`, data);
export const customerLogin = async (data: object) => axios.post(`${API_URL}/customer-login`, data);
