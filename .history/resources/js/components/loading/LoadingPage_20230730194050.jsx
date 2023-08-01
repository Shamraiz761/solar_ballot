import React from "react";

function LoadingPage() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1>Loading...</h1>
      <MoonLoader color="#36d7b7" />
      {/* You can add a loading animation or spinner here */}
    </div>
  );
}

export default LoadingPage;
