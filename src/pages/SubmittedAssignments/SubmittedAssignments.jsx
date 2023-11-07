// import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import SubmittedAssignmentsTable from "./SubmittedAssignmentsTable";
// import { useEffect, useState } from "react";


const SubmittedAssignments = () => {
    const axios = useAxios();
    // const [submittedAssignments, setSubmittedAssignments] = useState([]);
    // const [remainAssignment, setRemainAssignment] = useState([]);

    // useEffect(() => {
    //     axios.get('/submissions')
    //         .then((response) => {
    //             console.log(response);
    //             console.log(response.data);


    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         })
    // }, [axios, submittedAssignments])

    const submittedAssignmentsFromDb = () => {
        const response = axios.get('/submissions');
        return response;
    }

    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["assignments"],
        queryFn: submittedAssignmentsFromDb
    })

    console.log(data);

    if (isError) {
        return <p>Something went wrong...{error}</p>
    }

    return (
        <div>

            <div className="pt-56">
                <h1 className="text-center font-extrabold text-2xl mb-5">Submitted Assignments</h1>
                {
                    isLoading ? (
                        <div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>
                    )
                        : (
                            <div className="mb-10">

                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Assignment Title</th>
                                                {/* <th>Submission Link</th> */}
                                                {/* <th>Notes</th> */}
                                                <th>Total Marks</th>
                                                <th>Evaluation</th>
                                                <th>Status</th>
                                                <th>Obtained Marks</th>
                                                <th>Feedback</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {

                                                data?.data?.map((submission) => (
                                                    <SubmittedAssignmentsTable
                                                        key={submission.id}
                                                        submission={submission}></SubmittedAssignmentsTable>))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                }
            </div>

        </div>
    );
};

export default SubmittedAssignments;