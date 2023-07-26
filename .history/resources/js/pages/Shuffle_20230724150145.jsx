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
                {/* <a className="enterNumbersButton rounded" id="enterNumbersButtonReset">
          <i className="icon-reset"></i> Reset
        </a> */}
            </div>

            <div className="m-5 ">
                <div class="relative overflow-x-auto">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    Sr. No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Color
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Price
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4">Silver</td>
                                <td class="px-6 py-4">Laptop</td>
                                <td class="px-6 py-4">$2999</td>
                            </tr>
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Microsoft Surface Pro
                                </th>
                                <td class="px-6 py-4">White</td>
                                <td class="px-6 py-4">Laptop PC</td>
                                <td class="px-6 py-4">$1999</td>
                            </tr>
                            <tr class="bg-white dark:bg-gray-800">
                                <th
                                    scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                                >
                                    Magic Mouse 2
                                </th>
                                <td class="px-6 py-4">Black</td>
                                <td class="px-6 py-4">Accessories</td>
                                <td class="px-6 py-4">$99</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Shuffle;