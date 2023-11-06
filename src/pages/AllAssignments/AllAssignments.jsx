import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import AssignmentCard from "./AssignmentCard";


const AllAssignments = () => {
    const axios = useAxios();

    const getAllAssignmentsFromDb = async () => {
        const response = await axios.get('/assignments');
        return response;
    }
    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["assignments"],
        queryFn: getAllAssignmentsFromDb
    })

    // console.log(data);

    if (isError) {
        return <p>Something went wrong...{error}</p>
    }





    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center pt-10 mb-10">All Assignments</h1>
            {/* filtering */}
            <div>
                {/* filtering will show here  */}
            </div>

            {/* all assignments  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
                {
                    isLoading ? (<div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>)
                        : (
                            data?.data?.map((assignment) => (
                                <AssignmentCard
                                    key={assignment.id}
                                    assignment={assignment}></AssignmentCard>
                            ))
                        )
                }



            </div>




        </div>
    );
};

export default AllAssignments;