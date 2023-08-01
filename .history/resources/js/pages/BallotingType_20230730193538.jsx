import React, { useState, useEffect } from "react";
import Banner from "../components/banner/Banner";
import { Inertia } from "@inertiajs/inertia";
import { Link } from "@inertiajs/react";
import LoadingPage from "../components/loading/LoadingPage";

function BallotingType({ applicants }) {
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

        setLoading(true)
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
        setLoading(false)
    };

    return (
        <div className=" ">
            {
                loading ? <LoadingPage /> 
                : (
                    <div>

                    </div>
                )
            }
          
        </div>
    );
}

export default BallotingType;
