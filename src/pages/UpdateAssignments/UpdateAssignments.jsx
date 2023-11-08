import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react";
import UpdateAssignmentsCard from "./UpdateAssignmentsCard";
import { useEffect, useState } from "react";


const UpdateAssignments = () => {
    const { id } = useParams();
    // console.log(id);
    const axios = useAxios();
    const [isUpdateAssignment, setIsUpdateAssignment] = useState({});

    const updateAssignmentFromUser = () => {
        const response = axios.get("/assignments");
        return response;
    }



    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["updateAssignments"],
        queryFn: updateAssignmentFromUser
    })

    // console.log(data);
    useEffect(() => {
        const findAssignment = data?.data?.result?.find((item) => item._id === id);
        console.log(findAssignment);
        setIsUpdateAssignment(findAssignment)
    }, [data?.data, id])


    // setIsUpdateAssignment(findAssignment)


    // console.log(isUpdateAssignment);




    if (isError) {
        return <p>Something went wrong...{error}</p>
    }


    return (
        <div>
            <div>
                {
                    isLoading ? ( <p>Loading ...</p> )
                        : (
                            <UpdateAssignmentsCard 
                            isUpdateAssignment={isUpdateAssignment}></UpdateAssignmentsCard>
                        )
                }
            </div>
        </div>
    );
};

export default UpdateAssignments;