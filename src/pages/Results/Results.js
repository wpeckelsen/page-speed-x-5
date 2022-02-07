import React, { useEffect, useState } from "react";
import PageCardWide from "../../components/PageCard/PageCardWide";
import "./Results.scss";
import Button from "../../components/Button/Button";
import TextCard from "../../components/TextCard/TextCard";
import { useHistory } from "react-router-dom";
import "../../App.scss";
import { HashLink as Link } from "react-router-hash-link";
import ChartComponent from "../../components/Chart/Chart";
import ErrorCard from "../../components/ErrorCard/ErrorCard";
import Improvements from "../Improvements/Improvements";
import Location from "../Location/Location";
import "../../App.scss";

function Results({
  input1,
  input2,
  input3,
  input4,
  input5,
  inputScore1,
  inputScore2,
  inputScore3,
  inputScore4,
  inputScore5,
  inputChecker,
  googleFetchersPasser,
}) {
  const history = useHistory();
  const [improvements, setImprovements] = useState(false);
  const [location, setLocation] = useState(false);
  const [sameTest, setSameTest] = useState(false);

  function handleRunNewTest() {
    history.push("/input");
    document.location.reload();
  }

  function handleImprovementsClick() {
    setImprovements(true);
  }

  function handleLocationClick() {
    setLocation(true);
  }

  function handleRunTestAgain() {
    history.push("/input#run-test");
    setSameTest(true);
  }

  useEffect(() => {
    if (inputScore1 > 0) {
      setSameTest(false);
    }
  }, [inputScore1]);

  return (
    <>
      <PageCardWide
        title="Results"
        subtitle="Compare speeds of your domains"
        content={
          <>
            {!inputChecker ? (
              <TextCard
                title="Does it look a little empty here?"
                content={
                  <>
                    <p>
                      That's probably because you did not run the Page Speed x 5
                      test yet!
                    </p>
                    <Button click={handleRunNewTest} content="Run test now" />
                  </>
                }
              />
            ) : (
              <>
                <div className="results">
                  <div className="result-graph">
                    {(inputScore1 ||
                      inputScore2 ||
                      inputScore2 ||
                      inputScore3 ||
                      inputScore4 ||
                      inputScore5) < 0 ? (
                      <p>
                        <b>Some domains might take a bit longer...</b>
                      </p>
                    ) : (
                      ""
                    )}
                    <ChartComponent
                      chartScore1={inputScore1}
                      chartScore2={inputScore2}
                      chartScore3={inputScore3}
                      chartScore4={inputScore4}
                      chartScore5={inputScore5}
                    />
                  </div>

                  <div className="result-text">
                    <div>
                      <h3>{input1}</h3>
                      <h3>{input2}</h3>
                      <h3>{input3}</h3>
                      <h3>{input4}</h3>
                      <h3>{input5}</h3>
                    </div>

                    <div>
                      <h3>{inputScore1}</h3>
                      <h3>{inputScore2}</h3>
                      <h3>{inputScore3}</h3>
                      <h3>{inputScore4}</h3>
                      <h3>{inputScore5}</h3>
                    </div>
                  </div>

                  <div className="buttons">
                    <div>
                      <Button
                        content="Run this test again"
                        click={handleRunTestAgain}
                      />
                    </div>
                    <div>
                      <Button content="Run new test" click={handleRunNewTest} />
                    </div>

                    {sameTest ? (
                      <p>
                        <b style={{ color: "#ff270b" }}>
                          {" "}
                          It might take a while, just keep an eye on the graphs
                        </b>
                      </p>
                    ) : (
                      ""
                    )}
                  </div>

                  <TextCard
                    title="Check how you can improve these scores"
                    content={
                      <span onClick={handleImprovementsClick}>
                        <p>
                          <Link smooth to="/input#improvements">
                            Improvements
                          </Link>
                        </p>
                      </span>
                    }
                  />

                  <TextCard
                    title="See the influence geography has on your scores"
                    content={
                      <span onClick={handleLocationClick}>
                        <p>
                          <Link smooth to="/input#location">
                            The location effect
                          </Link>
                        </p>
                      </span>
                    }
                  />
                </div>
              </>
            )}
          </>
        }
      />

      {improvements ? (
        <span id="improvements">
          <Improvements
            improvementsScore1={inputScore1}
            improvementsScore2={inputScore2}
            improvementsScore3={inputScore3}
            improvementsScore4={inputScore4}
            improvementsScore5={inputScore5}
            inputChecker={inputChecker}
          />
        </span>
      ) : (
        ""
      )}

      {location ? (
        <span id="location">
          <Location
            locationScore1={inputScore1}
            locationScore2={inputScore2}
            locationScore3={inputScore3}
            locationScore4={inputScore4}
            locationScore5={inputScore5}
            inputChecker={inputChecker}
          />
        </span>
      ) : (
        ""
      )}
    </>
  );
}

export default Results;
