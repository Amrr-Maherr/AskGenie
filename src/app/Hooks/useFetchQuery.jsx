import { useState } from "react";
import axios from "axios";

export default function useFetchQuery() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = async (query) => {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyDUdEexZL5ih4KDQJ-DFRemMrIQrfPugcI`;

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        endpoint,
        {
          contents: [
            {
              role: "model",
              parts: [
                {
                  text: "You are a friendly AI assistant called BrainBox. You always reply concisely and helpfully. / أنت مساعد ذكاء اصطناعي ودود اسمه BrainBox. دائمًا ترد بإيجاز وبشكل مفيد.",
                },
              ],
            },
            {
              role: "user",
              parts: [{ text: query }],
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const egyptTime = new Date().toLocaleTimeString("en-US", {
        timeZone: "Africa/Cairo",
        hour12: true,
      });

      const aiText =
        response?.data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "No response";
      const ApiResponse = {
        user: query,
        bot: aiText,
        time: egyptTime,
      };
      setData((prevData) => [...prevData, ApiResponse]);
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, fetchData };
}
