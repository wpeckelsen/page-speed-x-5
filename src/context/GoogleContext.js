import React, { createContext, useState } from "react";
import axios from "axios";

export const GoogleContext = createContext({});

function GoogleContextProvider({ children }) {

  const keyAPI = "xxx";
  const [score, setScore] = useState(0);
  const [input, setInput] = useState('');

  async function GoogleFetch() {
    try {
      const result = await axios.get(
        `https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=${input}&key=${keyAPI}`
      );
      console.log(score);
      console.log("🤖🤖");
      setScore(result.data.lighthouseResult.categories.performance.score * 100);
    } catch (e) {
      console.log("error");
    }
  }







  const contextData = {
    GoogleFetch,
    score,
    setScore,
  };

  return (
    <GoogleContext.Provider value={contextData}>
      {children}
    </GoogleContext.Provider>
  );
}

export default GoogleContextProvider;
