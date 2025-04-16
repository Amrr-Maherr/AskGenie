"use client"; // Ensures this component is rendered on the client side

import SearchComponent from "./SearchComponent"; // Handles user input and fetch logic
import Title from "./Title"; // Reusable component to render titles
import Skeleton from "./Skeleton"; // Displays a loading skeleton while waiting for response
import { useState } from "react";

export default function HomeSection() {
  // Store server response text
  const [responseData, setResponseData] = useState(null);
  // Store error message (if any)
  const [error, setError] = useState(null);
  // Tracks whether data is currently being fetched
  const [loading, setLoading] = useState(false);

  // Callback passed to SearchComponent to update response, loading, and error
  const handleFetchData = (data, loadingState, errorState) => {
    setResponseData(data);
    setLoading(loadingState);
    setError(errorState);
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="h-[80%] w-full px-4 sm:w-[80%] md:w-[60%] lg:w-[50%]">
        {/* App Header */}
        <div className="text-center flex items-center justify-center flex-col gap-4">
          <Title
            text="Ask Genie"
            size="text-6xl"
            font="text-bold"
            color="text-white"
          />
          <Title
            text="Powered by Google AI"
            size="text-md"
            font="text-bold"
            color="text-white"
          />
        </div>

        {/* Input field and submit button */}
        <div className="mt-10">
          <SearchComponent onFetchData={handleFetchData} />
        </div>

        {/* Response Section */}
        <div className="mt-10">
          {loading ? (
            <Skeleton /> // Show loader while waiting
          ) : error ? (
            <p className="text-red-500">{error}</p> // Show error if any
          ) : responseData ? (
            <div className="text-white text-lg sm:text-xl font-medium mt-6 mb-4 p-4 rounded-xl shadow-lg max-w-3xl mx-auto space-y-3 leading-relaxed">
              {/* Split response into multiple lines */}
              {responseData.split("\n").map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
