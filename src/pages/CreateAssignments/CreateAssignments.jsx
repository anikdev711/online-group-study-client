
// import axios from "axios";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../hooks/useAxios";
// import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CreateAssignments = () => {
    const [selectedDueDate, setSelectedDueDate] = useState(null);
    const axios = useAxios();
    const handleCreateAssginments = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const thumbnailImageURL = form.thumbnail.value;
        const difficulty = form.difficulty.value;
        const marks = form.marks.value;
        const dueDate = form.dueDate.value;
        const userEmail = form.email.value;
        const description = form.description.value;

        const newAssignment = {
            title,
            thumbnailImageURL,
            difficulty,
            marks,
            dueDate,
            userEmail,
            description
        }

        console.log(newAssignment);

        axios.post('/assignments', newAssignment)
            .then((response) => {
                console.log(response);
                console.log(response.data.insertedId);
                if(response.data.insertedId){
                    // toast.success('Successfully toasted!')
                    Swal.fire("Assignment created successfully");
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }
    return (
        <div>
            <div className="bg-primary font-poppins">
                <h1 className="text-3xl font-extrabold text-center pt-20 mb-10">Create Assignments</h1>
                <div className="p-8">
                    <form
                        onSubmit={handleCreateAssginments}
                        className="max-w-4xl mx-auto">
                        {/* title part */}
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-2xl">Title</label>
                            <input
                                type="text"
                                name="title"
                                placeholder="Assignment title"
                                id=""
                                className="rounded-lg p-4" required />
                        </div>
                        {/* thumbnail url part */}
                        <div className="flex flex-col mt-5 mb-5">
                            <label htmlFor="" className="text-2xl">Thumbnail Image URL</label>
                            <input
                                type="text"
                                name="thumbnail"
                                placeholder="Assignment thumbnail"
                                id=""
                                className="rounded-lg p-4" required />
                        </div>
                        {/* difficulty and marks  */}
                        <div className="flex flex-col md:flex-row lg:flex-row gap-10">
                            {/* difficulty */}
                            <div className="flex flex-col mt-5 mb-5 w-1/2">
                                <label htmlFor="" className="text-2xl">Difficulty Levels</label>
                                <select
                                    name="difficulty"
                                    id=""
                                    className="rounded-lg p-4" required>
                                    <option value="Easy">Easy</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Hard">Hard</option>
                                </select>
                            </div>
                            {/* marks */}
                            <div className="flex flex-col mt-5 mb-5 w-1/2">
                                <label htmlFor="" className="text-2xl">Total Marks</label>
                                <input
                                    type="number"
                                    name="marks"
                                    id=""
                                    className="rounded-lg p-4" required />
                            </div>
                        </div>
                        {/* email and due date  */}
                        <div className="flex flex-col md:flex-row lg:flex-row gap-10">
                            {/* due date */}
                            <div className="flex flex-col mt-5 mb-5 w-1/2">
                                <label htmlFor="" className="text-2xl">Due Date</label>
                                <DatePicker
                                    name="dueDate"
                                    selected={selectedDueDate}
                                    onChange={(date) => setSelectedDueDate(date)}
                                    dateFormat="yyyy-MM-dd"
                                    minDate={new Date()}
                                    className="rounded-lg p-4 w-full"
                                    required />

                            </div>
                            {/* email */}
                            <div className="flex flex-col mt-5 mb-5 w-1/2">
                                <label htmlFor="" className="text-2xl">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id=""
                                    placeholder="Your email"
                                    className="rounded-lg p-4" required />
                            </div>
                        </div>
                        {/* description  */}
                        <div className="flex flex-col mt-5 mb-10">
                            <label htmlFor="" className="text-2xl">Assignment description</label>
                            <textarea
                                name="description"
                                id=""
                                cols="30"
                                rows="5"
                                placeholder="Write assignment description..."
                                className="rounded-lg p-4" required></textarea>
                        </div>
                        <div className="pb-40">
                            <button className="btn btn-secondary font-bold w-full">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateAssignments;