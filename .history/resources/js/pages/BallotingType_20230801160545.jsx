import React, { useState, useEffect } from "react";
import Banner from "../components/banner/Banner";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";
import LoadingPage from "../components/loading/LoadingPage";

function BallotingType({ applicants  }) {
    // console.log(plots);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("--Select--");
    const [tehsilOptions, setTehsilOptions] = useState([]);
    const [filteredApplicants, setFilteredApplicants] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const uniqueTehsils = Array.from(
            new Set(
                applicants.map((applicant) => applicant.tehsil.toUpperCase())
            )
        );
        setTehsilOptions(uniqueTehsils);
    }, [applicants]);

    const onOptionChangeHandler = (event) => {
        setSelectedOption(event.target.value);
        setIsOpen(false);
    };

    const validateForm = () => {
        if (selectedOption === "--Select--") {
            alert("Balloting Type is missing");
            return false;
        }
        return true;
    };

    const handleSubmit = (e) => {
        setLoading(true);
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const selectedTehsilApplicants = applicants.filter(
            (applicant) =>
                applicant.tehsil.toLowerCase() === selectedOption.toLowerCase()
        );

        setFilteredApplicants(selectedTehsilApplicants);

        const encodedApplicants = encodeURIComponent(
            JSON.stringify(selectedTehsilApplicants)
        );

        Inertia.get(`/shuffle?filteredApplicants=${encodedApplicants}`);
        
    };

    return (
        <div className=" ">
            {loading ? (
                <LoadingPage />
            ) : (
                <div>
                    <Banner />
                    <div className="m-5 bg-green-500 text-white py-2 text-xl md:text-2xl uppercase ">
                        <h1 className="text-center font-bold">
                            Select Balloting Type
                        </h1>
                    </div>

                    <div className="flex justify-center items-center w-[100%] my-5">
                        <div className="flex justify-center items-center flex-col bg-gray-100 w-[80vw] py-8">
                            <form className="flex flex-row">
                                <label className="inline-block text-xl md:text-2xl font-medium text-gray-900 mr-4 md:mr-8">
                                    Select Balloting Type
                                </label>
                                <div className="relative">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            setIsOpen(!isOpen);
                                        }}
                                        className="py-2 pl-3  text-xl md:text-2xl text-gray-900 bg-white font-medium border border-gray-600 w-[200px] outline-none"
                                    >
                                        {selectedOption}
                                    </button>
                                    {isOpen && (
                                        <div className="fixed overflow-y   z-50 w-[200px] shadow bg-white">
                                            {tehsilOptions.map(
                                                (option, index) => (
                                                    <div
                                                        key={index}
                                                        className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                                        onClick={() =>
                                                            onOptionChangeHandler(
                                                                {
                                                                    target: {
                                                                        value: option,
                                                                    },
                                                                }
                                                            )
                                                        }
                                                    >
                                                        {option}
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    )}
                                </div>
                            </form>
                            <Link
                                href="/shuffle"
                                onClick={handleSubmit}
                                className="my-5 text-lg md:text-2xl uppercase px-12 py-4 text-white bg-gray-900 hover:bg-green-600 font-semibold rounded-lg"
                            >
                                Submit
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BallotingType;
