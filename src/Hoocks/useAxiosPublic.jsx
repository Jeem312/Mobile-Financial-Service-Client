import axios from "axios";

export const axiosPublic = axios.create({
    baseURL:`${import.meta.env.VITE_SERVER_API}`
})
const useAxiosPublic = () => {
    return axiosPublic
};

export default useAxiosPublic;