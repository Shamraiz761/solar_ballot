import React from "react";
import Shuffle from "./Shuffle";
import ShuffleTable from "../components/tables/ShuffleTable";

function ShuffleApplicants() {
    return (
        <div>
            <Shuffle />
            <ShuffleTable filteredApplicants={shuffledData} />
        </div>
    );
}

export default ShuffleApplicants;
