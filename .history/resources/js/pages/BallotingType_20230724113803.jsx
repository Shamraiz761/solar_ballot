import React from "react";
import Banner from "../components/banner/Banner";
import "./index.css";
function BallotingType() {
    const options = ["One", "Two", "Three", "Four", "Five"];
    const onOptionChangeHandler = (event) => {
        console.log("User Selected Value - ", event.target.value);
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

                <div className="min-h-[50vh] flex justify-center items-center">
                    <label className="inline-block text-xl md:text-2xl font-medium  text-gray-900 mr-4 md:mr-8">
                        Select Balloting Type
                    </label>
                    <select
                        onChange={onOptionChangeHandler}
                        className="py-2 pl-3 text-xl md:text-2xl text-gray-900 font-medium  border border-gray-600 w-[200px] outline-none"
                    >
                        <option>--Select--</option>
                        {options.map((option, index) => {
                            return <option key={index}>{option}</option>;
                        })}
                    </select>
                    <button className="my-5 text-lg px-12 py-4 text-white bg-gray">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default BallotingType;
