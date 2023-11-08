/* eslint-disable no-useless-escape */

import { Link } from "react-router-dom";
import registerImage from "../../assets/images/registration.gif"
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const Register = () => {

    const { createGroupStudyUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const axios = useAxios();

    const handleGroupStudyUserRegistration = (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, photoURL, email, password);

        if (password.length < 6) {
            setRegisterError('password must be greater than 6 character')
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Password should have at least one capital letter')
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(password)) {
            setRegisterError('Password should have one special character')
        }
        else {

            createGroupStudyUser(email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    //user profile update
                    updateProfile(user, {
                        displayName: name,
                        photoURL: photoURL
                    })
                        .then(() => {
                            console.log('update profile successfully');
                        })
                        .catch((error) => {
                            console.log(error.message);
                        })

                    //create user to the database
                    const newUser = {
                        email
                    }

                    console.log(newUser);
                    axios.post('/users', newUser)
                        .then((response) => {
                            console.log(response);
                            console.log(response.data.insertedId);
                            if (response.data.insertedId) {
                                // toast.success('Successfully toasted!')
                                Swal.fire("User created successfully");
                            }
                        })
                        .catch((error) => {
                            console.log(error);
                        })



                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorCode, errorMessage);
                })

        }


    }

    return (
        <div>

            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src={registerImage} alt="" className="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleGroupStudyUserRegistration}
                            className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your name"
                                    className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">PhotoURL</span>
                                </label>
                                <input
                                    type="text"
                                    name="photoURL"
                                    placeholder="Photo URL"
                                    className="input input-bordered" />
                            </div>
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
                                    placeholder="Enter password"
                                    className="input input-bordered" required />
                            </div>

                            <div>
                                {
                                    registerError && <p>{registerError}</p>
                                }
                            </div>



                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>

                            <div className="text-sm font-medium text-gray-500 dark:text-gray-300 text-center mt-4">
                                Have account?
                                <Link to="/login">
                                    <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Login</a>
                                </Link>
                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;