import React from "react";
import Banner from "../components/banner/Banner";
import "./index.css";
function BallotingType() {
    return (
        <div className=" ">
            <Banner />
            <h1 class="text-3xl text-center text-gray-600 font-bold underline ">
                Hello world! 1234
            </h1>
            <div class="fullwidth">
	 <div class="container1" style="width:60%;margin:0 auto 40px;">
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
	     			<input onclick="return validate_form();" type="submit" name="sbtbtn" class="printButton rounded" value="Submit" /> 
	     		</div>
	     	</form>
	     </div>
	</div>
	</div>
        </div>
    );
}

export default BallotingType;
