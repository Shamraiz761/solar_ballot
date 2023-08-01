import React from "react";
import Shuffle from "./Shuffle";
import ShuffleTable from "../components/tables/ShuffleTable";

function ShuffleApplicants({ shuffleApplicants }) {
    console.log()
    return (
        <div>
            <Shuffle />
           <ShuffleTable shuffleApplicants={shuffleApplicants}/>
        </div>
    );
}

export default ShuffleApplicants;
