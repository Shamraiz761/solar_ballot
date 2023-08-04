import React from 'react'

function PlotTable({plots}) {
    console.log(plots);
  return (
    <div className="">
    {" "}
    <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-lg font-semibold text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="px-6 py-3">
                        
                        ID
                    </th>
                    <th scope="col" className="px-6 py-3">
                        Plot No
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Plot Code
                    </th>
                    <th scope="col" className="px-6 py-3">
                    Plot Category
                    </th>
                </tr>
            </thead>
            <tbody>
               
                    {
                        plots.map((plot,index)=>{
                            return(
                                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                scope="row"
                                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {index+1}
                            </th>
                            <td className="px-6 py-4">{plot.plot_no}</td>
                            <td className="px-6 py-4">{plot.plot_no}</td>
                            <td className="px-6 py-4">{applicant.mobile}</td>
                        </tr>
                            )
                        })
                    }
                  
            </tbody>
        </table>
    </div>
</div>
  )
}

export default PlotTable