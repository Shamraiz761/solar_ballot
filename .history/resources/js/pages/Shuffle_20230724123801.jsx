import React, { useState } from "react";
import Banner from "../components/banner/Banner";
import ./

function Shuffle() {

           const [keys, setKeys] = useState(['', '', '', '', '', '', '', '']);
      
        const handleInputChange = (index, value) => {
          const updatedKeys = [...keys];
          updatedKeys[index] = value;
          setKeys(updatedKeys);
        };

    return (
        <div className=" ">
            <Banner />
            <div class="m-5 bg-green-500 text-white py-2 text-xl md:text-4xl uppercase ">
                <h1 className="text-center font-bold">ENTER A KEY TO BEGIN</h1>
            </div>

            <div className="enterNumbers">
        {keys.map((key, index) => (
          <input
            key={index}
            type="text"
            className="enterNumbersBoxs rounded"
            maxLength="1"
            value={key}
            onChange={(e) => handleInputChange(index, e.target.value)}
          />
        ))}
      </div>
      <div className="actionsPerform">
        <a className="enterNumbersButtonShuffle rounded" id="enterNumbersButtonShuffle">
          <i className="icon-refresh"></i>Shuffle
        </a>
        <a className="enterNumbersButton rounded" id="enterNumbersButton">
          <i className="icon-arrow-circle-o-right"></i> Start
        </a>
        {/* <a className="enterNumbersButton rounded" id="enterNumbersButtonReset">
          <i className="icon-reset"></i> Reset
        </a> */}
      </div>
        </div>
    );
}

export default Shuffle;
