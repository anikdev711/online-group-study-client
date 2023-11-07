import { useEffect, useState } from "react";
import useAxios from "./useAxios";



const useAllAssignments = () => {
    const [allAssignmentsData, setAllAssignmentsData] = useState([]);
    const axios = useAxios();
    useEffect(() => {
        axios.get('/assignments')
            .then((response) => {
                console.log(response);
                setAllAssignmentsData(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [axios])
    console.log(allAssignmentsData);
    return allAssignmentsData;
};

export default useAllAssignments;