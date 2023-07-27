import React from 'react'

function DrawTable({applicantsArray=[]" }) {
    console.log(applicantsArray);
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
                                <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                1
                            </th>
                            <td className="px-6 py-4">Shamraiz</td>
                            <td className="px-6 py-4">3456734221</td>
                            <td className="px-6 py-4">786543221</td>
                        </tr>
                  
            </tbody>
        </table>
    </div>
</div>
  )
}

export default DrawTable