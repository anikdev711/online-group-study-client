// import { useState } from "react";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";


const SubmittedAssignmentDetailsCard = ({ submittedAssignmentData }) => {
    const axios = useAxios();
    // const [updateData, setUpdateData] = useState([]);
    const {
        _id,
        submissionLink,
        quickNote

    } = submittedAssignmentData;
    // console.log(submittedAssignmentData);

    const handleUpdateForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const obtainedMarks = form.obtainedMarks.value;
        const feedback = form.feedback.value;
        const status = "completed"

            const updatedInfo = {
                obtainedMarks,
                feedback,
                status
            }

        console.log(updatedInfo);
        // setUpdateData(obtainedMarks,feedback);
        // console.log(updateData);

        axios.patch(`submissions/${_id}`, updatedInfo)
            .then((response) => {
                console.log(response);
                if(response.data.modifiedCount>0){
                    // toast.success('Successfully toasted!')
                    Swal.fire("Assignment evaluated successfully");
                }
                

            })
            .catch((error) => {
                console.log(error);
            })



    }

    return (
        <div>

            <div className="flex flex-col justify-center items-center h-screen pt-60 mb-32">

                

                <div>
                    <div className="mb-5">
                        <h3 className="text-center font-bold text-lg mb-4">Submission Link:</h3>
                        <p className="text-center text-lg">{submissionLink}</p>
                    </div>
                    <div className="mb-10">
                        <h3 className="text-center font-bold text-lg mb-4">Quick Note</h3>
                        <p className="text-center text-lg">{quickNote}</p>
                    </div>


                </div>

                <div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <form
                        onSubmit={handleUpdateForm}
                        className="space-y-6" action="#">
                        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Evaluation</h5>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Give Marks</label>
                            <input
                                type="number"
                                name="obtainedMarks"
                                id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Give Feedback</label>
                            <input
                                type="text"
                                name="feedback"
                                id=""
                                placeholder=""
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        
                        <button className="btn w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

                    </form>
                </div>

            </div>

        </div>
    );
};

export default SubmittedAssignmentDetailsCard;