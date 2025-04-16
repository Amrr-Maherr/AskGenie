"use client"; // This directive ensures the component is rendered on the client side in Next.js (important for hooks like useState/useEffect).

// Import required UI components and hooks
import { Button } from "@/components/ui/button"; // Custom styled button component
import { Input } from "@/components/ui/input"; // Custom styled input component
import { useState, useEffect } from "react"; // React hooks for state and side-effects
import useFetchQuery from "../Hooks/useFetchQuery"; // Custom hook to fetch data from an API
import ButtonLoading from "./ButtonLoading"; // Loading animation or UI while fetching data

// Main functional component which receives a prop 'onFetchData' to send data back to the parent (HomeSection)
export default function SearchComponent({ onFetchData }) {
  // Destructure the custom hook to get the state and function to call the API
  const { data, error, loading, fetchData } = useFetchQuery();

  // State to store the user's search input
  const [searchValue, setSearchValue] = useState("");

  // Called when the user clicks the submit button
  const handleSubmit = () => {
    if (searchValue.trim()) {
      fetchData(searchValue); // Call the fetch function only if input is not empty
      setSearchValue("")
    }
  };

  // useEffect runs every time data, error, or loading changes.
  // It sends the current state to the parent component via the onFetchData callback
  useEffect(() => {
    if (data || error || loading) {
      onFetchData(data, loading, error);
    }
  }, [data, error, loading, onFetchData]); // dependencies to re-run the effect

  // JSX returned to render the input field and button
  return (
    <div className="flex w-full items-center justify-center gap-2 flex-col md:flex-row">
      {/* Input field to type the question */}
      <Input
        type="text"
        placeholder="Ask me anything..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)} // Updates the state on typing
      />

      {/* Conditionally render the loading button if API is loading, otherwise show the normal button */}
      {loading ? (
        <ButtonLoading />
      ) : (
        <Button
          className="cursor-pointer"
          size="lg"
          onClick={handleSubmit}
          disabled={loading || !searchValue} // Disable if loading or input is empty
        >
          Submit Question
        </Button>
      )}
    </div>
  );
}
