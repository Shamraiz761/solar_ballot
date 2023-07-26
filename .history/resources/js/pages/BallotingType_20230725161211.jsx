import React, { useState } from "react";
import Banner from "../components/banner/Banner";
import "./index.css";
function BallotingType({}) {


    const options = ["One", "Two", "Three", "Four", "Five", "Four", "Five"];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("--Select--");
    const uniqueOptions = [...new Set(options)];

    const onOptionChangeHandler = (event) => {
        setSelectedOption(event.target.value);
        console.log(event.target.value);
        setIsOpen(false);
    };

    const validateForm = () => {
        if (options === "") {
            alert("Balloting Type is missing");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className=" ">
            <Banner />
            <div class="m-5 bg-green-500 text-white py-2 text-xl md:text-4xl uppercase ">
                <h1 className="text-center font-bold">Select Balloting Type</h1>
            </div>

            <div className="flex justify-center items-center w-[100%] my-5">
                <div className=" flex justify-center items-center flex-col bg-gray-100 w-[80vw]  py-8">
                    <form onSubmit={handleSubmit} className="flex flex-row">
                        <label className="inline-block text-xl md:text-2xl font-medium  text-gray-900 mr-4 md:mr-8">
                            Select Balloting Type
                        </label>
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="py-2 pl-3 text-xl md:text-2xl text-gray-900 bg-white font-medium border border-gray-600 w-[200px] outline-none"
                            >
                                {selectedOption}
                            </button>
                            {isOpen && (
                                <div className="absolute bottom-[-200px] left-0 z-50 w-[200px] shadow bg-white">
                                    {uniqueOptions.map((option, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                            onClick={() =>
                                                onOptionChangeHandler({
                                                    target: {
                                                        value: option,
                                                    },
                                                })
                                            }
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </form>
                    <button
                        onClick={validateForm}
                        className="my-5 text-lg  md:text-2xl uppercase px-12 py-4 text-white bg-gray-900 hover:bg-green-600 font-semibold rounded-lg"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BallotingType;
