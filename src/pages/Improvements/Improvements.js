import React, { useState } from "react";
import PageCardWide from "../../components/PageCard/PageCardWide";
import "./Improvements.scss";
import TextCard from "../../components/TextCard/TextCard";
import { HashLink as Link } from "react-router-hash-link";
import ChartVertical from "../../components/Chart/ChartVertical";
import Button from "../../components/Button/Button";
import {useHistory} from "react-router-dom";

function Improvements({
  improvementsScore1,
  improvementsScore2,
  improvementsScore3,
  improvementsScore4,
  improvementsScore5,
inputChecker
}) {

  const history = useHistory()


  ////////////////////////////////////////////
  const [score1, setScore1] = useState(improvementsScore1);
  const [score2, setScore2] = useState(improvementsScore2);
  const [score3, setScore3] = useState(improvementsScore3);
  const [score4, setScore4] = useState(improvementsScore4);
  const [score5, setScore5] = useState(improvementsScore5);

  //general checks
  const [check1, toggleCheck1] = useState(false);
  const [check2, toggleCheck2] = useState(false);
  const [check3, toggleCheck3] = useState(false);
  const [check4, toggleCheck4] = useState(false);

  //wordpress checks
  const [check5, toggleCheck5] = useState(false);
  const [check6, toggleCheck6] = useState(false);
  const [check7, toggleCheck7] = useState(false);
  const [check8, toggleCheck8] = useState(false);

  //if box is checked, it increase, if unchecked, it decrease with same value.
  function imageImprover() {
    setScore1(score1 + 2);
    setScore2(score2 + 1);
    setScore3(score3 + 2);
    setScore4(score4 + 3);
    setScore5(score4 + 3);

    toggleCheck1(true);
    if (check1 === true) {
      setScore1(score1 - 2);
      setScore2(score2 - 1);
      setScore3(score3 - 2);
      setScore4(score4 - 3);
      setScore5(score4 - 3);

      toggleCheck1(false);
    }
  }

  function javascriptImprover() {
    setScore1(score1 + 4);
    setScore2(score2 + 3);
    setScore3(score3 + 4);
    setScore4(score4 + 4);
    setScore5(score5 + 3);

    toggleCheck2(true);

    if (check2 === true) {
      setScore1(score1 - 4);
      setScore2(score2 - 3);
      setScore3(score3 - 4);
      setScore4(score4 - 4);
      setScore5(score5 - 3);

      toggleCheck2(false);
    }
  }

  function cssImprover() {
    setScore1(score1 + 2);
    setScore2(score2 + 4);
    setScore3(score3 + 3);
    setScore4(score4 + 2);
    setScore5(score5 + 3);

    toggleCheck3(true);
    if (check3 === true) {
      setScore1(score1 - 2);
      setScore2(score2 - 4);
      setScore3(score3 - 3);
      setScore4(score4 - 2);
      setScore5(score5 - 3);
      toggleCheck3(false);
    }
  }

  function cdnImprover() {
    setScore1(score1 + 6);
    setScore2(score2 + 7);
    setScore3(score3 + 7);
    setScore4(score4 + 8);
    setScore5(score5 + 3);

    toggleCheck4(true);
    if (check4 === true) {
      setScore1(score1 - 6);
      setScore2(score2 - 7);
      setScore3(score3 - 7);
      setScore4(score4 - 8);
      setScore5(score5 - 3);
      toggleCheck4(false);
    }
  }

  //wordpress functions
  function pluginImprover() {
    setScore1(score1 + 6);
    setScore2(score2 + 5);
    setScore3(score3 + 6);
    setScore4(score4 + 6);
    setScore5(score5 + 7);

    toggleCheck5(true);
    if (check5 === true) {
      setScore1(score1 - 6);
      setScore2(score2 - 5);
      setScore3(score3 - 6);
      setScore4(score4 - 6);
      setScore5(score5 - 7);

      toggleCheck5(false);
    }
  }

  function themeImprover() {
    setScore1(score1 + 5);
    setScore2(score2 + 4);
    setScore3(score3 + 5);
    setScore4(score4 + 6);
    setScore5(score5 + 6);

    toggleCheck6(true);
    if (check6 === true) {
      setScore1(score1 - 5);
      setScore2(score2 - 4);
      setScore3(score3 - 5);
      setScore4(score4 - 6);
      setScore5(score5 - 6);
      toggleCheck6(false);
    }
  }

  function cachingImprover() {
    setScore1(score1 + 3);
    setScore2(score2 + 2);
    setScore3(score3 + 1);
    setScore4(score4 + 2);
    setScore5(score5 + 4);
    toggleCheck7(true);
    if (check7 === true) {
      setScore1(score1 - 3);
      setScore2(score2 - 2);
      setScore3(score3 - 1);
      setScore4(score4 - 2);
      setScore5(score5 - 4);
      toggleCheck7(false);
    }
  }

  function hostingImprover() {
    setScore1(score1 + 9);
    setScore2(score2 + 8);
    setScore3(score3 + 9);
    setScore4(score4 + 7);
    setScore5(score5 + 7);
    toggleCheck8(true);
    if (check8 === true) {
      setScore1(score1 - 9);
      setScore2(score2 - 8);
      setScore3(score3 - 9);
      setScore4(score4 - 7);
      setScore5(score5 - 7);
      toggleCheck8(false);
    }
  }

  return (
    <PageCardWide
      title="Improvements"
      subtitle="Check how you can improve your scores"
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
        <Button click={()=>{history.push("/input")}} content="Run test now" />
        </>
      }
        />
        )

        :
        (
        <>
        <>
          <div className="improvements">
            <TextCard
              title="Improvements explained"
              content={
                <>
                  <p>
                    Here are some improvements you could implement in your slow
                    website. Tick a box and see how it would improve your score.
                    Go ahead, tick some boxes.
                  </p>
                  <h3>WordPress</h3>
                  <p>
                    Wait! Are you using a Wordpress website? Check additional
                    improvements{" "}
                    <Link smooth to="/input#wordpress">
                      here
                    </Link>
                    .
                  </p>
                </>
              }
            />

            <TextCard
              content={
                <>
                  <div className="improvements-divider">
                    <div className="checkboxes">
                      <h3>Suggestions</h3>

                      <label htmlFor="images" className="improvements-label">
                        <input
                          type="checkbox"
                          name="images"
                          value="images"
                          checked={check1}
                          onClick={imageImprover}
                        />
                        <p>Decompress large images</p>
                      </label>

                      <label
                        htmlFor="javascript"
                        className="improvements-label"
                      >
                        <input
                          type="checkbox"
                          name="javascript"
                          value="javascript"
                          checked={check2}
                          onClick={javascriptImprover}
                        />
                        <p>Write JavaScript ‘below the fold’</p>
                      </label>

                      <label htmlFor="css" className="improvements-label">
                        <input
                          type="checkbox"
                          name="css"
                          value="css"
                          checked={check3}
                          onClick={cssImprover}
                        />
                        <p>Remove unused CSS</p>
                      </label>

                      <label htmlFor="cdn" className="improvements-label">
                        <input
                          type="checkbox"
                          name="cdn"
                          value="cdn"
                          checked={check4}
                          onClick={cdnImprover}
                        />
                        <p>Implement a CDN (Content Delivery Network)</p>
                      </label>
                    </div>

                    <div className="improvements-chart">
                      {/*makes sure that the max value displayed will always be 100*/}
                      <ChartVertical
                        chartScore1={
                          score1 >= 100 ? 100 : score1 < 0 ? 0 : score1
                        }
                        chartScore2={
                          improvementsScore2 >= 100 ? 100 : improvementsScore2 < 0 ? 0 : improvementsScore2
                        }
                        chartScore3={
                          improvementsScore3 >= 100 ? 100 : score3 < 0 ? 0 : score3
                        }
                        chartScore4={
                          score4 >= 100 ? 100 : score4 < 0 ? 0 : score4
                        }
                        chartScore5={
                          score5 >= 100 ? 100 : score5 < 0 ? 0 : score5
                        }
                      />
                    </div>
                  </div>
                </>
              }
            />

            <TextCard
              content={
                <>
                  <div className="wordpress-divider">
                    <div className="checkboxes">
                      <h3 id="wordpress">Wordpress Suggestions</h3>

                      <label htmlFor="plugin" className="improvements-label">
                        <input
                          type="checkbox"
                          name="plugin"
                          value="plugin"
                          checked={check5}
                          onClick={pluginImprover}
                        />
                        <p>Reducing the amount of plug-ins</p>
                      </label>

                      <label htmlFor="theme" className="improvements-label">
                        <input
                          type="checkbox"
                          name="theme"
                          value="theme"
                          checked={check6}
                          onClick={themeImprover}
                        />
                        <p>
                          Removing unused themes and picking a light weight
                          theme
                        </p>
                      </label>

                      <label htmlFor="caching" className="improvements-label">
                        <input
                          type="checkbox"
                          name="caching"
                          value="caching"
                          checked={check7}
                          onClick={cachingImprover}
                        />
                        <p>Enable advanced caching </p>
                      </label>

                      <label htmlFor="hosting" className="improvements-label">
                        <input
                          type="checkbox"
                          name="hosting"
                          value="hosting"
                          checked={check8}
                          onClick={hostingImprover}
                        />
                        <p>Switch hosting provider</p>
                      </label>
                    </div>

                    <div className="wordpress-chart">
                      <ChartVertical
                        chartScore1={
                          score1 >= 100 ? 100 : score1 < 0 ? 0 : score1
                        }
                        chartScore2={
                          score2 >= 100 ? 100 : score2 < 0 ? 0 : score2
                        }
                        chartScore3={
                          score3 >= 100 ? 100 : score3 < 0 ? 0 : score3
                        }
                        chartScore4={
                          score4 >= 100 ? 100 : score4 < 0 ? 0 : score4
                        }
                        chartScore5={
                          score5 >= 100 ? 100 : score5 < 0 ? 0 : score5
                        }
                      />
                    </div>
                  </div>
                </>
              }
            />
          </div>
        </>
        </>)
      }

        </>
      }
    />
  );
}

export default Improvements;
