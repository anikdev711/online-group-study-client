
import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/loginimage.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const Login = () => {

    const { signInGroupStudyUserByEmailPassword, signInGroupStudyUserByGoogle } = useContext(AuthContext);
    const {signOutGroupStudyUser}=useContext(AuthContext)
    const axios = useAxios();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    //sign in with email and password

    const handleGroupStudyUserSignInEmailPassword = (event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signInGroupStudyUserByEmailPassword(email, password)
            .then((userCredential) => {
                const signedInUser = userCredential.user;
                console.log(signedInUser);
                const user = {
                    email
                }
                const response = axios.post('/auth/user-token',user)
                if(response.data.success){
                    console.log(response);
                    Swal.fire("Signed in successfully");
                    navigate(from, { replace: true });
                }
                else{
                    signOutGroupStudyUser();
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })

    }

    //sign in with google: a social login
    const handleGroupStudyUserSignInGoogle = (event) => {
        event.preventDefault();
        signInGroupStudyUserByGoogle()
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            })
    }

    return (
        <div>

            <h1 className="font-poppins text-center text-4xl mt-20 mb-5">Welcome back!</h1>
            <h3 className="font-poppins text-center text-lg">Please login to your account</h3>

            <div className="hero min-h-screen">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={loginImage} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form
                            onSubmit={handleGroupStudyUserSignInEmailPassword}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="password"
                                    className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center mt-4">
                                Not registered?
                                <Link to="/register">
                                    <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
                                </Link>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

            <div className="text-center font-poppins mb-20">

                <p className="mb-5">__________OR__________</p>

                <button
                    onClick={handleGroupStudyUserSignInGoogle}
                    type="button"
                    className="bg-secondary focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2">
                    <svg className="w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 19">
                        <path fillRule="evenodd" d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z" clipRule="evenodd" />
                    </svg>
                    Sign in with Google
                </button>

            </div>

        </div>
    );
};

export default Login;