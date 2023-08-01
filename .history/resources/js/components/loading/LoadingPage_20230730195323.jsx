import React from "react";
import { Audio, Circles } from "react-loader-spinner";
function LoadingPage() {
    return (
        <div className="flex justify-center flex-col gap-6 items-center min-h-screen bg-black">
            <h1 className="font-bold text-2xl text-white">Loading...</h1>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="white"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
            {/* You can add a loading animation or spinner here */}
        </div>
    );
}

export default LoadingPage;
