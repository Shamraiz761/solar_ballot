import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/banner/Banner";
import ShuffleTable from "../components/tables/ShuffleTable";
import { Inertia } from "@inertiajs/inertia";
import LoadingPage from "../components/loading/LoadingPage";

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

function Shuffle({ filteredApplicants = "[]" }) {
    const applicantsArray = JSON.parse(filteredApplicants);
    const [keys, setKeys] = useState(["", "", "", "", "", "", "", ""]);
    const [shuffledArray, setShuffledArray] = useState(applicantsArray);
    const [open, setopen] = useState(false);
    const[loading,setLoading]=useState(false)
    
    const totalEnteries = () => {
        setopen(!open);
    };

   

    const handleInputChange = (index, value) => {
        const updatedKeys = [...keys];
        updatedKeys[index] = value;
        setKeys(updatedKeys);
    };

    const inputRefs = Array.from({ length: 8 }, () => useRef(null));

    useEffect(() => {
        inputRefs.forEach((ref, index) => {
            if (keys[index].length === 1 && index < inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();
            }
        });
    }, [keys]);

    const handleShuffle = () => {
        setLoading(true);
        const shuffledApplicantsArray = shuffleArray([...applicantsArray]);
        setShuffledArray(shuffledApplicantsArray);
        setLoading(false);

    };

    const handleStart = () => {
        Inertia.get("/draw", {
            filteredApplicants: JSON.stringify(shuffledArray),
          });
    };

    return (
      
        <div className=" ">
              {
            loading ? <LoadingPage />
            :
            (

            )
        }
            <Banner />
          
        </div>
    );
}

export default Shuffle;
