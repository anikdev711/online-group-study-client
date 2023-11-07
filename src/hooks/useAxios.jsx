import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const instance = axios.create({
    baseURL: 'http://localhost:5000/api/v1',
    withCredentials: true
})

const useAxios = () => {
    const {signOutGroupStudyUser} = useContext(AuthContext);
    instance.interceptors.response.use(
        function (response){
            return response;
        },
        function(error){
            if(error.response.status === 401 || error.response.status === 403){
                signOutGroupStudyUser();
            }
        }
    )
    return instance
};

export default useAxios;