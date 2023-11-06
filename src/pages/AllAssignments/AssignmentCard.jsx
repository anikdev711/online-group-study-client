import { Link } from "react-router-dom";


const AssignmentCard = ({ assignment }) => {

    const {
        _id,
        title,
        thumbnailImageURL,
        difficulty,
        marks,
        dueDate,
    } = assignment;

    return (
        <div>


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 min-h-[500px]">



                <div className="">
                    <img className="rounded-t-lg" src={thumbnailImageURL} alt="" />
                </div>


                <div className="p-5">

                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                    <div className="flex gap-5 mt-5 mb-2 justify-center items-center">
                        <div>
                            <button className="btn btn-secondary font-bold">{difficulty}</button>
                        </div>
                        <div>
                            <p>Total Marks: {marks}</p>
                        </div>
                    </div>

                    <div>
                        <p>Last Date of Submission: {dueDate}</p>
                    </div>

                    <div>
                        <Link to={`/all-assignments/${_id}`}>
                            <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Read more
                                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default AssignmentCard;