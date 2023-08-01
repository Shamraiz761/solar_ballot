import React from "react";

function ShuffleTable({ shuffleApplicants }) {
    console.log("shuffleApplicants:", shuffleApplicants);

    return (
        <div>
            {" "}
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-lg font-semibold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Sr. No
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Applicants Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                CNIC
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Mobile
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       
                           ?
                          
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShuffleTable;
