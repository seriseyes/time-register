import axios from "axios";

/**
 * Axios default тохиргоо
 */
const axiosInstance = axios.create({
    withCredentials: true,
    headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
});
export default axiosInstance
