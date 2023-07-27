import React from "react";

function ShuffleTable({ filteredApplicants= }) {
   
console.log(filteredApplicants);
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
                       
                            {/* {
                                filteredApplicants.map((applicant,index)=>{
                                    return(
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        {index+1}
                                    </th>
                                    <td className="px-6 py-4">{applicant.applicant_name}</td>
                                    <td className="px-6 py-4">{applicant.cnic_no}</td>
                                    <td className="px-6 py-4">{applicant.mobile}</td>
                                </tr>
                                    )
                                })
                            } */}
                          
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShuffleTable;
