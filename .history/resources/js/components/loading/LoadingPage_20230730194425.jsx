import React from "react";
import { Audio } from "react-loader-spinne";
function LoadingPage() {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <h1>Loading...</h1>
            <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass
            />
            {/* You can add a loading animation or spinner here */}
        </div>
    );
}

export default LoadingPage;
