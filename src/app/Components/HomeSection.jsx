"use client";

import { useState } from "react";
import SearchComponent from "./SearchComponent";
import Header from "./Header";
import Skeleton from "./Skeleton";
import ResponseList from "./ResponseList";

export default function HomeSection() {
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetchData = (data, loadingState, errorState) => {
    setResponseData(data);
    setLoading(loadingState);
    setError(errorState);
  };

  return (
    <div className="w-full h-[80dvh] flex items-center justify-center px-4">
      <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%]">
        <Header />
        <div className="mb-10">
          <SearchComponent onFetchData={handleFetchData} />
        </div>
        <ResponseList
          loading={loading}
          error={error}
          data={responseData}
          Skeleton={Skeleton}
        />
      </div>
    </div>
  );
}
