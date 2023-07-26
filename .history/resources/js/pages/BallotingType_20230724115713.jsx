import React, { useState } from "react";
import Banner from "../components/banner/Banner";
import "./index.css";
function BallotingType() {
    const options = ["One", "Two", "Three", "Four", "Five"];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState("--Select--");

    const onOptionChangeHandler = (event) => {
        setSelectedOption(event.target.value);
        setIsOpen(false);
    };
    return (
        <div className=" ">
            <Banner />
            <div class="m-5 bg-green-500 text-white py-2 text-xl md:text-4xl uppercase ">
                <h1 className="text-center font-bold">Select Balloting Type</h1>
            </div>
            <div class="fullwidth">
                {/* <div class="container1" style="width:60%;margin:0 auto 40px;">
	     <div class="selection_form">
	     	<form name="selction_form" method="post" action="http://localhost/solar_1kw_ballot/balloting/home">
	     		
	     		<div class="element_div">
	     			<label>Select Balloting Type : </label>
	     			<select name="ballot_type" id="ballot_type">
	     				<option value="">--Select--</option>
	     					     				
	     				
	     			</select>
	     		</div>
	     		<div class="element_div">
	     			<label>&nbsp;</label>
	     			<input onClick="return validate_form();" type="submit" name="sbtbtn" class="printButton rounded" value="Submit" /> 
	     		</div>
	     	</form>
	     </div>
	</div> */}
<div className="flex justify-center items-center ">
                <div className="min-h-[50vh] flex justify-center items-center flex-col bg-gray-100 w-[80vw]">
                
                    <div className="flex flex-row">
                        <label className="inline-block text-xl md:text-2xl font-medium  text-gray-900 mr-4 md:mr-8">
                            Select Balloting Type
                        </label>
                        <div className="relative">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="py-2 pl-3 text-xl md:text-2xl text-gray-900 font-medium border border-gray-600 w-[200px] outline-none"
                            >
                                {selectedOption}
                            </button>
                            {isOpen && (
                                <div className="absolute bottom-[-220px] left-0 z-50 w-[200px] shadow bg-white">
                                    {options.map((option, index) => (
                                        <div
                                            key={index}
                                            className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                                            onClick={() =>
                                                onOptionChangeHandler({
                                                    target: { value: option },
                                                })
                                            }
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <button className="my-5 text-lg  md:text-2xl uppercase px-12 py-4 text-white bg-gray-900 hover:bg-green-600 font-semibold rounded-lg">
                        Submit
                    </button>
                </div>
                </div>
            </div>
        </div>
    );
}

export default BallotingType;
