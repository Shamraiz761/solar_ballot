import React from "react";
import Shuffle from "./Shuffle";
import ShuffleTable from "../components/tables/ShuffleTable";

function ShuffleApplicants({ shuffleApplicants }) {
    return (
        <div>x
            <ShuffleTable shuffleApplicants={shuffleApplicants} />
        </div>
    );
}

export default ShuffleApplicants;
