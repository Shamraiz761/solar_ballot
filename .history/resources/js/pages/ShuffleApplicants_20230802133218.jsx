import React from "react";
import Shuffle from "./Shuffle";
import ShuffleTable from "../components/tables/ShuffleTable";

function ShuffleApplicants({ shuffleApplicants }) {
    return (
        <div>
            <ShuffleTable shuffleApplicants={shuffleApplicants} />
        </div>
    );
}

export default ShuffleApplicants;
