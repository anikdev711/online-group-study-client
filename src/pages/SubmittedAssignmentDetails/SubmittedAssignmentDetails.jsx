import { useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useEffect, useState } from "react";
import SubmittedAssignmentDetailsCard from "./SubmittedAssignmentDetailsCard";


const SubmittedAssignmentDetails = () => {

    const axios = useAxios();
    const { id } = useParams();
    console.log(id);
    const [submittedAssignmentData, setSubmittedAssignmentData] = useState({});


    useEffect(() => {
        axios.get('/submissions')
            .then((res) => {
                console.log(res);
                console.log(res.data);
                const specificSubmittedAssignmentData = res?.data?.find((item) => item._id === id)
                console.log(specificSubmittedAssignmentData);
                setSubmittedAssignmentData(specificSubmittedAssignmentData);

            })
    }, [axios, id])

    // console.log(submittedAssignmentData);


    return (
        <div>
            <div>
                {
                    <SubmittedAssignmentDetailsCard
                        submittedAssignmentData={submittedAssignmentData}></SubmittedAssignmentDetailsCard>
                }
            </div>
        </div>
    );
};

export default SubmittedAssignmentDetails;