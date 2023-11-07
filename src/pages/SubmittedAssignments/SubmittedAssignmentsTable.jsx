import { Link } from "react-router-dom";
// import useAxios from "../../hooks/useAxios";


const SubmittedAssignmentsTable = ({ submission }) => {
    console.log(submission);
    // const axios = useAxios();
    const {
        _id,
        name,
        email,
        assignmentName,
        marks,
        status,
        obtainedMarks,
        feedback
        // submissionLink,
        // quickNote

    } = submission;


    return (

        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <td className="px-6 py-4">
                {name}
            </td>
            <td className="px-6 py-4">
                {email}
            </td>
            <td className="px-6 py-4">
                {assignmentName}
            </td>
            <td className="px-6 py-4">
                {marks}
            </td>
            <td>

                <Link to={`/submitted-assignments/${_id}`}>
                    <button>Give Mark</button>
                </Link>

            </td>
            <th>
                {
                    status === "completed" ? (<span className="font-bold">completed</span>)
                    : ( 
                        <span>pending</span>
                    )
                }
            </th>
            <th>
                {
                    !obtainedMarks ? (
                        <span>N/A</span>
                    )
                    : (
                        <span>{obtainedMarks}</span>
                    )
                }
            </th>
            <th>
                {
                    !feedback ? (
                        <span>N/A</span>
                    )
                    : (
                        <span>{feedback}</span>
                    )
                }
            </th>

        </tr>

    );
};

export default SubmittedAssignmentsTable;