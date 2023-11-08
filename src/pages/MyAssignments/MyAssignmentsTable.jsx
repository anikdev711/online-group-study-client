// import { Link } from "react-router-dom";


const MyAssignmentsTable = ({myAssignment}) => {

    const {
        assignmentName,
        marks,
        status,
        obtainedMarks,
        feedback
    }=myAssignment;

    return (

        <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            
            <td className="px-6 py-4">
                {assignmentName}
            </td>
            <td className="px-6 py-4">
                {marks}
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

export default MyAssignmentsTable;