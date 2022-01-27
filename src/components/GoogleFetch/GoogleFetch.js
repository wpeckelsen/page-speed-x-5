/*
import axios from "axios";
import {useState} from "react";
import GoogleContextProvider from "../../context/GoogleContext";

async function GoogleFetch() {

    const testLink = "https://www.bol.com/nl/nl/";
    const [score, setScore] = useState(0)
    const apiKey = "xxx";
    try {
        const result = await axios.get(
            `https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=${input}&key=${apiKey}`
        );
        setScore(result.data.lighthouseResult.categories.performance.score * 100);
        console.log("🤖Input🤖");
    }
    catch (e) {
        console.log("error");
    }
}

export default GoogleFetch()
*/
