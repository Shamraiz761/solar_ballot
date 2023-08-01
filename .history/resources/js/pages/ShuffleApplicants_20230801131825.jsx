import React from "react";
import Shuffle from "./Shuffle";
import ShuffleTable from "../components/tables/ShuffleTable";

function ShuffleApplicants({ shuffleApplicants }) {
    console.log(shuffleApplicants);
    
    return (
        <div>
            <Shuffle />
           <ShuffleTable />
        </div>
    );
}

export default ShuffleApplicants;
