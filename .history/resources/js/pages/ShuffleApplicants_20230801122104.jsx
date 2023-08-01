import React from "react";
import Shuffle from "./Shuffle";
import ShuffleTable from "../components/tables/ShuffleTable";

function ShuffleApplicants({ filteredApplicants = "[]" }) {
    
    return (
        <div>
            <Shuffle />
            <ShuffleTable />
        </div>
    );
}

export default ShuffleApplicants;
