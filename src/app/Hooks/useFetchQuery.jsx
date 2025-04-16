import { useState } from "react"; // Import React's useState for managing local state
import axios from "axios"; // Import Axios for making HTTP requests

// Define a custom React hook to handle fetching data from the API
export default function useFetchQuery() {
  // State to hold the response data from the API
  const [data, setData] = useState(null);

  // State to hold any error messages returned during the fetch process
  const [error, setError] = useState(null);

  // State to indicate whether a request is currently in progress
  const [loading, setLoading] = useState(false);

  // The main function to fetch data from the API
  const fetchData = async (query) => {
    // Construct the full API endpoint using environment variables
    const endpoint = `${process.env.NEXT_PUBLIC_API_HOST}?key=${process.env.NEXT_PUBLIC_API_KEY}`;

    // Set loading to true to indicate request is in progress
    setLoading(true);

    // Clear any previous errors
    setError(null);

    try {
      // Send a POST request to the API with the query in the request body
      const response = await axios.post(
        endpoint,
        {
          contents: [
            {
              parts: [{ text: query }], // Pass user query in expected structure
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json", // Set content type for JSON payload
          },
        }
      );

      // Extract the text response from the API and update the data state
      setData(response.data?.candidates?.[0]?.content?.parts?.[0]?.text);
    } catch (error) {
      // If there's an error, store the message (fallback to Arabic message if none exists)
      setError(error?.response?.data?.message || "حدث خطأ غير متوقع");
    } finally {
      // Once the request is finished, set loading to false
      setLoading(false);
    }
  };

  // Return the hook's states and the fetchData function so it can be used in any component
  return {
    data, // The server response
    error, // Any error message
    loading, // Loading state
    fetchData, // Function to call when you want to fetch new data
  };
}
