import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
// import { QueryCache, useMutation } from "@tanstack/react-query";

const AssignmentCard = ({ assignment, data }) => {
    // console.log(assignment);

    const {
        _id,
        title,
        thumbnailImageURL,
        difficulty,
        marks,
        dueDate,
        userEmail

    } = assignment;

    const axios = useAxios();

    const { user } = useContext(AuthContext);
    // console.log(user.email);

    const handleDeleteAssignment = (_id) => {
        if (userEmail === user.email) {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`/assignments/${_id}`)
                        .then((response) => {
                            console.log(response);
                            console.log(response.data);
                            if (response.data.deletedCount > 0) {
                                Swal.fire({
                                    title: "Deleted!",
                                    text: "Assignment has been deleted. Please Reload.",
                                    icon: "success",
                                    timer: 1500
                                });
                                const remainingAssignments = data?.data?.filter((item) => item._id !== _id);
                                console.log(remainingAssignments);
                                // window.location.reload()
                            }
                        })

                }
                // window.location.reload();
            });


        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "You can not delete",
                footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
    }

    return (
        <div>


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[500px] md:min-h-[650px] lg:min-h-[600px]">

                <div className="">
                    <img className="rounded-t-lg" src={thumbnailImageURL} alt="" />
                </div>

                <div className="p-5">

                    <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                    <div className="flex gap-5 mt-5 mb-2 justify-center items-center">
                        <div>
                            <button className="btn btn-secondary font-bold">{difficulty}</button>
                        </div>
                        <div>
                            <p>Total Marks: {marks}</p>
                        </div>
                    </div>

                    <div className="mt-4 mb-4">
                        <p className="text-center">Last Date of Submission: {dueDate}</p>
                    </div>

                    <div>

                        <div className="flex gap-4 justify-center items-center">
                            <div>
                                <Link to={`/all-assignments/${_id}`}>

                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        View Details
                                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>

                                </Link>

                            </div>

                            <div>
                                <Link to={`/update-assignments/${_id}`}>

                                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                        Update
                                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                        </svg>
                                    </a>
                                </Link>

                            </div>

                        </div>

                        <div className="mt-4">
                            <button
                                onClick={() => handleDeleteAssignment(_id)}
                                className="btn btn-warning w-full font-bold"
                            >Delete</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default AssignmentCard;