import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { useNavigate } from "react-router-dom";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { useNavigate } from "react-router-dom";

const instance = axios.create({
    baseURL: 'https://online-group-study-server-six.vercel.app/api/v1',
    withCredentials: true
})

const useAxios = () => {
    // const {signOutGroupStudyUser} = useContext(AuthContext);
    // const navigate = useNavigate();

    // useEffect(()=>{
    //     instance.interceptors.response.use(
    //         function (response){
    //             return response;
    //         },
    //         function(error){
    //             if(error.response.status === 401 || error.response.status === 403){
    //                 signOutGroupStudyUser();

    //             }
    //         }
    //     )
    // },[])



    // instance.interceptors.response.use(
    //     function (response){
    //         return response;
    //     },
    //     function(error){
    //         if(error.response.status === 401 || error.response.status === 403){
    //             signOutGroupStudyUser();
    //         }
    //     }
    // )

    const { signOutGroupStudyUser } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        instance.interceptors.response.use(res => {
            return res;
        }), error => {
            console.log('error is found in interceptors', error);
            if (error.response.status === 401 || error.response.status === 403) {
                signOutGroupStudyUser()
                    .then(() => {
                        navigate('/login');

                    })
                    .catch(err => console.log(err))
            }
        }
    }, [navigate, signOutGroupStudyUser])






    return instance
};

export default useAxios;