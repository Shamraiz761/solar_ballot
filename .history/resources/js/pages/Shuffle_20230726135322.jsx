import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/banner/Banner";
import ShuffleTable from "../components/tables.jsx/ShuffleTable";

function Shuffle({ filteredApplicants  }) {
    const [keys, setKeys] = useState(["", "", "", "", "", "", "", ""]);
    const [open, setopen] = useState(false);
    console.log(filteredApplicants);
    const totalEnteries = () => {
        setopen(!open);
    };
const [applicants,setApplicants]=useState([filteredApplicants])
    const handleInputChange = (index, value) => {
        const updatedKeys = [...keys];
        updatedKeys[index] = value;
        setKeys(updatedKeys);
    };

    const inputRefs = Array.from({ length: 8 }, () => useRef(null));

    useEffect(() => {
        inputRefs.forEach((ref, index) => {
            if (keys[index].length === 1 && index < inputRefs.length - 1) {
                inputRefs[index + 1].current.focus();
            }
        });
    }, [keys]);

    return (
        <div className=" ">
            <Banner />
            <div class="m-5 bg-green-500 text-white py-2 text-xl md:text-4xl uppercase ">
                <h1 className="text-center font-bold">ENTER A KEY TO BEGIN</h1>
            </div>
            {applicants.map((app)=>{
                return(
                    <
                )
            })}

            <div className="flex flex-row justify-center items-center flex-wrap">
                <input
                    type="text"
                    className="bg-green-600 md:mr-6 mr-2 text-white text-2xl font-bold text-center p-4 w-12 md:w-28 md:h-20 h-10 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[0]}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                    ref={inputRefs[0]}
                />
                <input
                    type="text"
                    className="bg-green-600 md:mr-6 mr-2 text-white text-2xl font-bold text-center p-4 w-12 md:w-28 md:h-20 h-10 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[1]}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                    ref={inputRefs[1]}
                />
                <input
                    type="text"
                    className="bg-green-600 md:mr-6 mr-2 text-white text-2xl font-bold text-center p-4 w-12 md:w-28 md:h-20 h-10 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[2]}
                    onChange={(e) => handleInputChange(2, e.target.value)}
                    ref={inputRefs[2]}
                />
                <input
                    type="text"
                    className="bg-green-600 md:mr-6 mr-2 text-white text-2xl font-bold text-center p-4 w-12 md:w-28 md:h-20 h-10 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[3]}
                    onChange={(e) => handleInputChange(3, e.target.value)}
                    ref={inputRefs[3]}
                />
                <input
                    type="text"
                    className="bg-green-600 md:mr-6 mr-2 text-white text-2xl font-bold text-center p-4 w-12 md:w-28 md:h-20 h-10 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[4]}
                    onChange={(e) => handleInputChange(4, e.target.value)}
                    ref={inputRefs[4]}
                />
                <input
                    type="text"
                    className="bg-green-600 md:mr-6 mr-2 text-white text-2xl font-bold text-center p-4 w-12 md:w-28 md:h-20 h-10 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[5]}
                    onChange={(e) => handleInputChange(5, e.target.value)}
                    ref={inputRefs[5]}
                />
                <input
                    type="text"
                    className="bg-green-600 md:mr-6 mr-2 text-white text-2xl font-bold text-center p-4 w-12 md:w-28 md:h-20 h-10 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[6]}
                    onChange={(e) => handleInputChange(6, e.target.value)}
                    ref={inputRefs[6]}
                />
                <input
                    type="text"
                    className="bg-green-600 md:mr-6 mr-2 text-white text-2xl font-bold text-center p-4 w-12 md:w-28 md:h-20 h-10 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[7]}
                    onChange={(e) => handleInputChange(7, e.target.value)}
                    ref={inputRefs[7]}
                />
            </div>
            <div className="flex flex-row items-center justify-center my-5 ">
                <button className="px-12 py-4 text-lg font-bold mr-3 rounded-lg bg-gray-900 hover:bg-green-600 text-white uppercase md:text-2xl ">
                    Shuffle
                </button>
                <button className="px-12 py-4 text-lg font-bold rounded-lg bg-yellow-600 hover:bg-green-600 text-white uppercase md:text-2xl ">
                    <i className="icon-arrow-circle-o-right"></i> Start
                </button>
            </div>

            <div className="m-5 my-8 flex-wrap text-lg font-medium">
                <h1 className="text-center text-xl font-semibold uppercase">
                    Applicants
                </h1>

                <div className="flex flex-row justify-between">
                    <div className="flex flex-row">
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

                <ShuffleTable />
            </div>
        </div>
    );
}

export default Shuffle;
