import React from "react";
import Shuffle from "./Shuffle";
import ShuffleTable from "../components/tables/ShuffleTable";

function ShuffleApplicants({ filteredApplicants = "[]" }) {
    console.log(filteredApplicants);
    return (
        <div>
            <Shuffle />
            <ShuffleTable fil/>
        </div>
    );
}

export default ShuffleApplicants;
