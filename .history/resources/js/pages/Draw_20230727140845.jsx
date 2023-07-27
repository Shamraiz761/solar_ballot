import React, { useState } from "react";
import Banner from "../components/banner/Banner";
import DrawTable from "../components/tables/DrawTable";
import jsPDF from "jspdf";
function Draw({  filteredApplicants = "[]" }) {
    const applicantsArray = JSON.parse(filteredApplicants);
   
    const[data,setData]=useState(applicantsArray)
    const [open, setopen] = useState(false);
    const totalEnteries = () => {
        setopen(!open);
    };
    console.log("Draw:", applicantsArray);
    const pdfGenerator = () => {
        const pdf = jsPDF("p", "pt");
        pdf.text(20, 20, "This is my pdf");
        pdf.save("generated.pdf");
    };
    return (
        <div className=" ">
            <Banner />
            <div class="m-5 bg-green-500 text-white py-2 text-xl md:text-4xl uppercase ">
                <h1 className="text-center font-bold">
                    BALLOT DATE : WEDNESDAY, JUL 26, 2023
                </h1>
                <h1 className="text-center font-bold">
                    BALLOT TIME : 07:11 AM
                </h1>
            </div>

            <h1 className="my-5 font-bold text-4xl text-gray-800 uppercase text-center">
                summary
            </h1>

            <div className="bg-gray-500 hover:bg-gray-600 text-white font-bold rounded-md mx-3 my-5 p-5">
                <h1 className="uppercase text-center bg-blue-900 text-2xl py-2">
                    Applicants
                </h1>
                <div className="flex flex-row justify-between items-center py-2 text-lg bg-gray-600 px-2">
                    <span>Applicants</span>
                    <span>0</span>
                </div>
                <div className="flex flex-row justify-between items-center py-2 text-lg bg-gray-600 px-2">
                    <span>Selected Applicants</span>
                    <span>0</span>
                </div>
            </div>

            <div className="flex flex-row justify-center">
                <button
                    onClick={pdfGenerator}
                    className="inline-block items-center bg-gray-900 mb-5 px-4 md:px-16 py-3 text-2xl font-bold rounded-md text-white hover:bg-green-600"
                >
                    Generate PDF
                </button>
            </div>

            <div className="m-5 my-8 flex-wrap text-lg font-medium">
                <h1 className="text-center text-xl mb-5 font-semibold uppercase">
                    Applicants
                </h1>

                <div className="flex flex-row justify-between flex-wrap">
                    <div className="flex flex-row m-3 md:0">
                        <span className="mr-3">Show </span>
                        <div className="relative mr-3">
                            <button
                                onClick={totalEnteries}
                                className="p-1  text-gray-900 font-medium border border-gray-600 w-24 outline-none"
                            >
                                0
                            </button>
                            {open && (
                                <div
                                    onClick={totalEnteries}
                                    className="absolute bottom-[-110px] left-0 z-50 text-center w-24 shadow bg-white "
                                >
                                    <ul>
                                        <li className="hover:bg-gray-100 ">
                                            10
                                        </li>
                                        <li className="hover:bg-gray-100">
                                            25
                                        </li>{" "}
                                        <li className="hover:bg-gray-100">
                                            100
                                        </li>{" "}
                                        <li className="hover:bg-gray-100">
                                            All
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <span>enteries </span>
                    </div>

                    <div className="mb-4">
                        <span className="mr-3">Search:</span>
                        <input
                            type="search"
                            name="search"
                            className="rounded-full px-2 py-1 outline-none border border-gray-400"
                            id=""
                        />
                    </div>
                </div>

                <DrawTable draw={applicantsArray}/>
            </div>
        </div>
    );
}

export default Draw;
