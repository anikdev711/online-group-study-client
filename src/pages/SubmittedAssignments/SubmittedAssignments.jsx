// import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import SubmittedAssignmentsTable from "./SubmittedAssignmentsTable";
// import { useContext, useEffect, useState } from "react";
// import { AuthContext } from "../../providers/AuthProvider";
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

    // const [dbUsers, setDbUsers] = useState([]);
    // const { user } = useContext(AuthContext);

    // useEffect(() => {
    //     axios.get('/users')
    //         .then(res => {
    //             console.log(res);
    //             console.log(res.data);
    //             const validUser = res?.data?.find((item) => item?.email === user?.email)
    //             setDbUsers(validUser)

    //         })
    // }, [axios, user?.email])
    // console.log(dbUsers.email);
    // const url = `/submissions?email=${dbUsers?.email}`







    const submittedAssignmentsFromDb = () => {
        const response = axios.get('/submissions');
        // const response = axios.get(url);
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
                                                        key={submission._id}
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