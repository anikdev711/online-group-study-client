// import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";


const AssignmentDetailsCard = ({ assignmentData }) => {
    const axios = useAxios();
    const {
        // _id,
        title,
        thumbnailImageURL,
        difficulty,
        marks,
        dueDate,
        description
    } = assignmentData;


    const handleAssignmentSubmissionForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const assignmentName = form.assignmentName.value;
        const submissionLink = form.submissionLink.value;
        const quickNote = form.quickNote.value;
        const marks = form.marks.value;

        const submitAssignment = {
            name,
            email,
            assignmentName,
            marks,
            submissionLink,
            quickNote
        }

        console.log(submitAssignment);

        axios.post('/submissions',submitAssignment )
            .then((response) => {
                console.log(response);
                console.log(response.data.insertedId);
                if (response.data.insertedId) {
                    // toast.success('Successfully toasted!')
                    Swal.fire("Assignment submitted successfully");
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }


    return (
        <div>

            <div className="flex flex-col justify-center items-center h-screen mt-60 mb-20 p-4">

                <div className="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border p-8 text-white shadow-md shadow-pink-500/40">
                    <div className="relative pb-8 m-0 mb-8 overflow-hidden text-center text-gray-700 bg-transparent border-b rounded-none shadow-none border-white/10 bg-clip-border">
                        <p className="block font-sans text-sm antialiased font-normal leading-normal text-white uppercase">
                            Assignment Details
                        </p>
                        <h1 className="flex justify-center gap-1 mt-6 font-sans antialiased font-normal tracking-normal text-white text-7xl">
                            <img src={thumbnailImageURL} alt="" />
                        </h1>
                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    {title}
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Difficulty Level: {difficulty}
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Total marks: {marks}
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Last date of submission: {dueDate}
                                </p>
                            </li>
                            <li className="flex items-center gap-4">
                                <span className="p-1 border rounded-full border-white/20 bg-white/20">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        className="w-3 h-3"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4.5 12.75l6 6 9-13.5"
                                        ></path>
                                    </svg>
                                </span>
                                <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                    Description: {description}
                                </p>
                            </li>
                        </ul>
                    </div>


                    {/* take assignment part and submission form */}

                    <div className="p-0 mt-12">
                        {/* <Link to="/submission-form"> */}
                        {/* <Link to={`/${_id}/submission-form`}>
                            <button
                                className="block w-full select-none rounded-lg bg-white py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-pink-500 shadow-md shadow-blue-gray-500/10 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-gray-500/20 focus:scale-[1.02] focus:opacity-[0.85] focus:shadow-none active:scale-100 active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                                data-ripple-dark="true"
                            >
                                Take assignment
                            </button>
                        </Link> */}

                        {/* Open the modal using document.getElementById('ID').showModal() method */}
                        <button className="btn btn-secondary w-full" onClick={() => document.getElementById('my_modal_5').showModal()}>Take assignment</button>
                        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                            <div className="modal-box">
                                <div className="modal-action">
                                    <form
                                        onSubmit={handleAssignmentSubmissionForm}
                                        method="dialog"
                                        className="flex flex-col justify-center items-center mx-auto">
                                        {/* if there is a button in form, it will close the modal */}

                                        <div className="flex flex-col justify-center items-center  mb-5">

                                            <div className="relative flex flex-col text-gray-700 bg-white shadow-md max-w-sm rounded-xl bg-clip-border">
                                                <div className="relative grid mx-4 mb-4 -mt-6 overflow-hidden text-white shadow-lg h-28 place-items-center rounded-xl bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-border shadow-pink-500/40">
                                                    <h3 className="block font-sans text-2xl p-4 antialiased font-semibold leading-snug tracking-normal text-white">
                                                        Submit Assignment
                                                    </h3>
                                                </div>

                                                <div className="flex flex-col gap-4 p-6">

                                                    {/* name */}

                                                    <div className="relative h-11 w-full min-w-[200px]">
                                                        <input
                                                            type="text"
                                                            name="name"
                                                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                            placeholder=" "
                                                            required />
                                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                            Your Name
                                                        </label>
                                                    </div>

                                                    {/* email */}

                                                    <div className="relative h-11 w-full min-w-[200px]">
                                                        <input
                                                            type="email"
                                                            name="email"
                                                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                            placeholder=" "
                                                            required />
                                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                            Email
                                                        </label>
                                                    </div>

                                                    {/* pdf link */}

                                                    <div className="relative h-11 w-full min-w-[200px]">
                                                        <input
                                                            type="text"
                                                            name="submissionLink"
                                                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                            placeholder=" "
                                                            required />
                                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                            Assignment PDF Link
                                                        </label>
                                                    </div>

                                                    {/* quick notes */}

                                                    <div className="relative h-11 w-full min-w-[200px]">
                                                        <input
                                                            type="text"
                                                            name="quickNote"
                                                            className="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                                                            placeholder=" "
                                                            required />
                                                        <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                                                            Quick Note
                                                        </label>
                                                    </div>

                                                    {/* title */}

                                                    <div className="flex flex-col">
                                                        <label htmlFor="">Assignment Title </label>
                                                        <input 
                                                        type="text" 
                                                        name="assignmentName" 
                                                        defaultValue={title}
                                                        id="" 
                                                        disabled
                                                        required/>
                                                    </div>

                                                    {/* marks */}

                                                    <div>
                                                        <label htmlFor="">Total Marks: </label>
                                                        <input 
                                                        type="number" 
                                                        name="marks" 
                                                        defaultValue={marks}
                                                        id="" 
                                                        disabled
                                                        required/>
                                                    </div>


                                                    <div className="p-6 pt-0">
                                                        <button
                                                            className="block w-full select-none rounded-lg bg-gradient-to-tr from-pink-600 to-pink-400 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                                            data-ripple-light="true"
                                                        >
                                                            Submit
                                                        </button>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>

                                    </form>

                                </div>
                                <form method="dialog">
                                    <button className="btn w-full">Close</button>
                                </form>
                            </div>
                        </dialog>





                    </div>
                </div>
            </div>

        </div>
    );
};

export default AssignmentDetailsCard;