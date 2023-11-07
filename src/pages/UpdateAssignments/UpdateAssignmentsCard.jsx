
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
// import { useNavigation } from "react-router-dom";

const UpdateAssignmentsCard = ({ isUpdateAssignment }) => {

    // console.log(isUpdateAssignment);
    const [selectedDueDate, setSelectedDueDate] = useState(null);
    const axios = useAxios();
    // const navigate = useNavigation();
    const {
        _id,
        description,
        difficulty,
        dueDate,
        marks,
        thumbnailImageURL,
        title,
        userEmail

    } = isUpdateAssignment;

    const handleUpdateAssginmentsFromUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const thumbnailImageURL = form.thumbnail.value;
        const difficulty = form.difficulty.value;
        const marks = form.marks.value;
        const dueDate = form.dueDate.value;
        const userEmail = form.email.value;
        const description = form.description.value;

        const updateAssignmentInfo = {
            title,
            thumbnailImageURL,
            difficulty,
            marks,
            dueDate,
            userEmail,
            description
        }

        // console.log(updateAssignmentInfo);

        axios.put(`/assignments/${_id}`, updateAssignmentInfo)
            .then((response) => {
                console.log(response);
                if(response.data.modifiedCount>0){
                    Swal.fire("Assignment updated successfully");
                    // navigate('/all-assignments')
                }
            })
            .catch((error) => {
                console.log(error);
            })



    }

    return (
        <div>

            <div className="bg-primary font-poppins">
                <h1 className="text-3xl font-extrabold text-center pt-20 mb-10">Update Assignment</h1>
                <div className="p-8">
                    <form
                        onSubmit={handleUpdateAssginmentsFromUser}
                        className="max-w-4xl mx-auto">
                        {/* title part */}
                        <div className="flex flex-col">
                            <label htmlFor="" className="text-2xl">Title</label>
                            <input
                                type="text"
                                name="title"
                                defaultValue={title}
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
                                defaultValue={thumbnailImageURL}
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
                                    defaultValue={difficulty}
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
                                    defaultValue={marks}
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
                                    defaultValue={dueDate}
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
                                    defaultValue={userEmail}
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
                                defaultValue={description}
                                id=""
                                cols="30"
                                rows="5"
                                placeholder="Write assignment description..."
                                className="rounded-lg p-4" required></textarea>
                        </div>
                        <div className="pb-40">
                            <button className="btn btn-secondary font-bold w-full">Update</button>
                        </div>
                    </form>
                </div>
            </div>


        </div>
    );
};

export default UpdateAssignmentsCard;