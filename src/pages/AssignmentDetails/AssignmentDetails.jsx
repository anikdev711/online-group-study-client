import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import AssignmentDetailsCard from "./AssignmentDetailsCard";


const AssignmentDetails = () => {
    const axios = useAxios();
    const { id } = useParams();
    console.log(id);
    const [assignmentData, setAssignmentData] = useState({});
    const getAssignmentData = async () => {
        const response = await axios.get('/assignments');
        return response;
    }
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["assignmentData"],
        queryFn: getAssignmentData
    })
    console.log(data);

    useEffect(() => {
        const getSpecificAssignment = data?.data?.find((item) => item._id === id)
        // console.log(getSpecificAssignment);
        setAssignmentData(getSpecificAssignment);
    }, [data?.data, id])







    if (isError) {
        return <p>{error}</p>
    }

    return (
        <div>

            <div>
                {
                    isLoading ? (<div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>)
                        : (
                            <AssignmentDetailsCard
                                assignmentData={assignmentData}></AssignmentDetailsCard>
                        )
                }
            </div>

        </div>
    );
};

export default AssignmentDetails;