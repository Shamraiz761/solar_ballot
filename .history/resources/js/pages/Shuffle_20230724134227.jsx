import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/banner/Banner";
import "./index.css";

function Shuffle() {
    const [keys, setKeys] = useState(["", "", "", "", "", "", "", ""]);

    const handleInputChange = (index, value) => {
        const updatedKeys = [...keys];
        updatedKeys[index] = value;
        setKeys(updatedKeys);
    };

    const inputRefs = Array.from({ length: 8 }, () => useRef(null));

    useEffect(() => {
        // Automatically move focus to the next input field after entering a single character
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

            <div className="flex flex-row justify-center items-center">
                <input
                    type="text"
                    className="bg-green-600 mr-6 text-white text-xl font-bold text-center p-4 w-16 md:w-28 md:h-20 h-16 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[0]}
                    onChange={(e) => handleInputChange(0, e.target.value)}
                    ref={inputRefs[0]}
                />
                <input
                    type="text"
                    className="bg-green-600 mr-6 text-white p-4 w-16 md:w-28 md:h-20 h-16 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[1]}
                    onChange={(e) => handleInputChange(1, e.target.value)}
                    ref={inputRefs[1]}
                />
                <input
                    type="text"
                    className="bg-green-600 mr-6 text-white p-4 w-16 md:w-28 md:h-20 h-16 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[2]}
                    onChange={(e) => handleInputChange(2, e.target.value)}
                    ref={inputRefs[2]}
                />
                <input
                    type="text"
                    className="bg-green-600 mr-6 text-white p-4 w-16 md:w-28 md:h-20 h-16 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[3]}
                    onChange={(e) => handleInputChange(3, e.target.value)}
                    ref={inputRefs[3]}
                />
                <input
                    type="text"
                    className="bg-green-600 mr-6 text-white p-4 w-16 md:w-28 md:h-20 h-16 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[4]}
                    onChange={(e) => handleInputChange(4, e.target.value)}
                    ref={inputRefs[4]}
                />
                <input
                    type="text"
                    className="bg-green-600 mr-6 text-white p-4 w-16 md:w-28 md:h-20 h-16 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[5]}
                    onChange={(e) => handleInputChange(5, e.target.value)}
                    ref={inputRefs[5]}
                />
                <input
                    type="text"
                    className="bg-green-600 mr-6 text-white p-4 w-16 md:w-28 md:h-20 h-16 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[6]}
                    onChange={(e) => handleInputChange(6, e.target.value)}
                    ref={inputRefs[6]}
                />
                <input
                    type="text"
                    className="bg-green-600 mr-6 text-white p-4 w-16 md:w-28 md:h-20 h-16 shadow outline-none rounded-lg"
                    maxLength="1"
                    value={keys[7]}
                    onChange={(e) => handleInputChange(7, e.target.value)}
                    ref={inputRefs[7]}
                />
            </div>
            <div className="actionsPerform">
                <a
                    className="enterNumbersButtonShuffle rounded"
                    id="enterNumbersButtonShuffle"
                >
                    <i className="icon-refresh"></i>Shuffle
                </a>
                <a
                    className="enterNumbersButton rounded"
                    id="enterNumbersButton"
                >
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
