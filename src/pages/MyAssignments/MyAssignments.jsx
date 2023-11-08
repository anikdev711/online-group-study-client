import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import useAxios from "../../hooks/useAxios";
import MyAssignmentsTable from "./MyAssignmentsTable";


const MyAssignments = () => {
    const { user } = useContext(AuthContext);
    const [mySubmittedAssignmets, setMySubmittedAssignments] = useState([]);
    const axios = useAxios();


    // const url = `/submissions?email=${user?.email}`
    // useEffect(() => {
    //     axios.get(url)
    //         .then(res => setMySubmittedAssignments(res.data))
    // }, [axios, url])

    useEffect(()=>{
        axios.get('/submissions')
        .then(res=>{
            console.log(res);
            console.log(res.data);
            const mySubmissions = res?.data?.filter((item)=>item.email===user?.email);
            console.log(mySubmissions);
            setMySubmittedAssignments(mySubmissions)
        })
    },[axios, user?.email])
    console.log(mySubmittedAssignmets);


    return (
        <div>
            <h3 className="text-center pt-56 text-xl font-bold mb-5">My total submissions:{mySubmittedAssignmets.length}</h3>
            <div className="mb-10">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Assignment Title</th>
                                <th>Total Marks</th>
                                <th>Status</th>
                                <th>Obtained Marks</th>
                                <th>Feedback</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                mySubmittedAssignmets?.map((myAssignment) => (
                                    <MyAssignmentsTable
                                        key={myAssignment._id}
                                        myAssignment={myAssignment}></MyAssignmentsTable>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyAssignments;