import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import AssignmentCard from "./AssignmentCard";
// import { useState } from "react";
// import { CapitalizedWordsForDifficulties } from "../../utils/Capitalizations";
// import Container from "../../ui/Container";

// const difficulties = [
//     "Easy",
//     "Medium",
//     "Hard"
// ]

const AllAssignments = () => {
    const axios = useAxios();
    // const [difficulty, setDifficulty] = useState('');
    // const [page, setPage] = useState(1);
    // const limit = 2;

    const getAllAssignmentsFromDb = () => {
        // const response = axios.get(`/assignments?difficulty=${difficulty}&page=${page}&limit=${limit}`);
        const response = axios.get('/assignments');
        return response;
    }

    const {
        data,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["assignments"],
        queryFn: getAllAssignmentsFromDb,

    })

    // console.log(data);

    // const handlePrevPage = () => {
    //     if (page > 1) {
    //         setPage(page - 1);
    //     }
    // }

    // const handleNextPage = () => {
    //     if (page.length < totalNumberOfPages) {

    //         setPage(page + 1);
    //     }
    // }

    // const totalNumberOfPages = Math.ceil(data?.data?.total / limit);
    // console.log(totalNumberOfPages);

    if (isError) {
        return <p>Something went wrong...{error}</p>
    }

    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center pt-10 mb-10">All Assignments</h1>
            {/* filtering */}
            {/* <div> */}
                {/* filtering will show here  */}
                {/* <div className="form-control">

                    <label htmlFor="" className="label">
                        <span className="label-text">Difficulty</span>
                    </label>

                    <select
                        onChange={(e) => setDifficulty(e.target.value)}
                        name=""
                        id=""
                        className="input input-bordered">

                        <option disabled selected>
                            Select difficulty
                        </option>

                        {
                            difficulties?.map((item) => (
                                <option key={item} value={item}>
                                    {CapitalizedWordsForDifficulties(item)}
                                </option>
                            ))
                        }

                    </select>

                </div>
            </div> */}

            {/* all assignments  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto p-4">
                {
                    isLoading ? (<div className="flex justify-center items-center h-screen"><progress className="progress w-56"></progress></div>)
                        : (
                            data?.data?.map((assignment) => (
                                <AssignmentCard
                                    key={assignment.id}
                                    assignment={assignment}
                                    data={data}></AssignmentCard>
                            ))
                        )
                }

            </div>

            {/* pagination */}


            {/* <div className="mt-10 mb-10 flex justify-end"> */}
            {/* <Container className="mt-10 mb-10 flex justify-end">
                {
                    isLoading ? (<p>Loading...</p>)
                        : (
                            <div className="join border-2 border-primary mt-10 mb-10">
                                <button onClick={handlePrevPage} className="join-item btn btn-secondary">Prev</button>
                                {
                                    [...Array(totalNumberOfPages).fill(0)].map((item, index) => {
                                        const pageCount = index + 1;
                                        return (
                                            <button key={pageCount}
                                                onClick={() => setPage(pageCount)}
                                                className={`${pageCount === page ? 'join-item btn btn-secondary' : 'join-item btn btn-ghost'}`}>
                                                {pageCount}
                                            </button>
                                        )
                                    })
                                }
                                <button onClick={handleNextPage} className="join-item btn btn-ghost">Next</button>

                            </div>
                        )
                }
            </Container> */}


            {/* </div> */}



        </div>
    );
};

export default AllAssignments;