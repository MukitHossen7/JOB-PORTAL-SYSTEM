import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://job-portal-server-self.vercel.app",
  withCredentials: true,
});
const useAxiosInstance = () => {
  const { signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.status === 401 || error.status === 403) {
        signOutUser().then(() => {
          navigate("/login");
        });
      }
      return Promise.reject(error);
    }
  );
  return axiosInstance;
};

export default useAxiosInstance;
