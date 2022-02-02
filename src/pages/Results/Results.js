import React, { useState } from "react";
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

  function handleRunTest() {
    history.push("/input");
  }

  function handleImprovementsClick() {
    setImprovements(true);
  }

  function handleLocationClick() {
    setLocation(true);
  }

  return (
    <>
      <PageCardWide
        title="Results"
        subtitle="Compare speeds of your domains"
        content={
          <>
            {inputChecker ? (
              <TextCard
                title="Does it look a little empty here?"
                content={
                  <>
                    <p>
                      That's probably because you did not run the Page Speed x 5
                      test yet!
                    </p>
                    <Button click={handleRunTest} content="Run test now" />
                  </>
                }
              />
            ) : (
              <>
                <div className="results">
                  <div className="result-graph">
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
                        click={googleFetchersPasser}
                      />
                    </div>

                    <div>
                      <Button content="Run new test" click={handleRunTest} />
                    </div>
                  </div>

                  <TextCard
                    title="Check how you can improve these scores"
                    content={
                      <span onClick={handleImprovementsClick}>
                        <p>
                          <Link smooth to="input/#improvements">
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
                          <Link smooth to="input/#location">
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
          <Improvements />
        </span>
      ) : (
        ""
      )}

      {location ? (
        <span id="location">
          <Location />
        </span>
      ) : (
        ""
      )}
    </>
  );
}

export default Results;
