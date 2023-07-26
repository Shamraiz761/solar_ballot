import React from "react";
import Banner from "../components/banner/Banner";

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
        </div>
    );
}

export default Shuffle;
