import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
// import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import AssignmentDetailsCard from "./AssignmentDetailsCard";
// import useAllAssignments from "../../hooks/useAllAssignments";


const AssignmentDetails = () => {
    const axios = useAxios();
    const { id } = useParams();
    console.log(id);
    const [assignmentData, setAssignmentData] = useState({});
    // const [getAllAssignments, setGetAllAssignments] = useState([]);
    // const getAllAssignments = useAllAssignments();
    // console.log(getAllAssignments.data);
    // const getAssignmentData = async () => {
    //     const response = await axios.get('/assignments');
    //     return response;
    // }
    // const {
    //     data,
    //     isLoading,
    //     isError,
    //     error
    // } = useQuery({
    //     queryKey: ["assignmentData"],
    //     queryFn: getAssignmentData
    // })
    // console.log(data);
    // const [assignments, setAssignments] = useState(null);



    useEffect(() => {

        axios.get('/assignments')
            .then(res => {
                console.log(res.data);
                const getSpecificAssignment = res?.data?.result?.find((item) => item._id === id)
                setAssignmentData(getSpecificAssignment);

            })


        // axios.get('/assignments')
        //     .then((response) => {
        //         console.log(response);
        //         setGetAllAssignments([...Array(response.data)]);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        // console.log(getAllAssignments);


        // const getSpecificAssignment = data?.data?.find((item) => item._id === id)
        // const getSpecificAssignment = getAllAssignments.find((item) => item._id === id)
        // console.log(getSpecificAssignment);
        // setAssignmentData(getSpecificAssignment);
    }, [axios, id])







    // if (isError) {
    //     return <p>{error}</p>
    // }

    return (
        <div>

            <div>
                {
                    // isLoading ? (<div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>)
                    //     : (
                    //         <AssignmentDetailsCard
                    //             assignmentData={assignmentData}></AssignmentDetailsCard>
                    //     )

                    <AssignmentDetailsCard
                        assignmentData={assignmentData}></AssignmentDetailsCard>
                }
            </div>

        </div>
    );
};

export default AssignmentDetails;