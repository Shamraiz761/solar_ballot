import React from "react";

function ShuffleTable({applicants}) {
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
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                        {
                            applicants.map((applicant)=>{
                                return(
                                    
                                    <th
                                        scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                    >
                                        1
                                    </th>
                                    <td className="px-6 py-4">Hamid</td>
                                    <td className="px-6 py-4">35202-9875467-1</td>
                                    <td className="px-6 py-4">3234254269</td>
                               
                                )
                            })
                        }
                        
                     
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShuffleTable;
