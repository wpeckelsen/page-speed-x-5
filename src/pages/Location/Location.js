import React, { useState } from "react";
import PageCardWide from "../../components/PageCard/PageCardWide";
import "./Location.scss";
import Square from "../../components/Square/Square";
import Button from "../../components/Button/Button";
import TextCard from "../../components/TextCard/TextCard";
import { HashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router-dom";

function Location({
  locationScore1,
  locationScore2,
  locationScore3,
  locationScore4,
  locationScore5,
  inputChecker,
}) {
  const history = useHistory();

  const [score1, setScore1] = useState(locationScore1);
  const [score2, setScore2] = useState(locationScore2);
  const [score3, setScore3] = useState(locationScore3);
  const [score4, setScore4] = useState(locationScore4);
  const [score5, setScore5] = useState(locationScore5);

  const [pickedScore, setPickedScore] = useState(0);
  const [newScore, setNewScore] = useState(pickedScore);

  return (
    <PageCardWide
      title="The Location Effect"
      subtitle="See the influence geography has on your score"
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
                  <Button
                    click={() => {
                      history.push("/input");
                    }}
                    content="Run test now"
                  />
                </>
              }
            />
          ) : (
            <>
              <div className="location">
                <TextCard
                  title="Pick a domain score"
                  content={
                    <>
                      <p>
                        To pick one of the domain scores, simply click a button.
                        With that score selected, you can simulate the{" "}
                        <Link smooth to="/input#explained">
                          Location
                        </Link>{" "}
                        Effect.
                      </p>
                      <div className="button-row">
                        <Button
                          content={score1}
                          click={() => {
                            setPickedScore(locationScore1);
                          }}
                        />

                        <Button
                          content={score2}
                          click={() => {
                            setPickedScore(locationScore2);
                          }}
                        />

                        <Button
                          content={score3}
                          click={() => {
                            setPickedScore(locationScore3);
                          }}
                        />

                        <Button
                          content={score4}
                          click={() => {
                            setPickedScore(locationScore4);
                          }}
                        />

                        <Button
                          content={score5}
                          click={() => {
                            setPickedScore(locationScore5);
                          }}
                        />
                      </div>
                      <div className="result-squares">
                        <Square
                          content={
                            { pickedScore } ? (
                              <h2>{pickedScore}</h2>
                            ) : (
                              <h2>0</h2>
                            )
                          }
                        />
                      </div>
                    </>
                  }
                />

                <TextCard
                  title="Server location"
                  content={
                    <>
                      <div className="server">
                        <div className="server-left">
                          <label htmlFor="Amsterdam" className="location-label">
                            <input
                              type="radio"
                              value="Amsterdam"
                              id="Amsterdam"
                              name="user-city"
                              onClick={() => {
                                setNewScore(pickedScore - 2);
                              }}
                            />
                            <p>Amsterdam, Netherlands</p>
                          </label>

                          <label htmlFor="New York" className="location-label">
                            <input
                              type="radio"
                              value="New York"
                              id="New York"
                              name="user-city"
                              onClick={() => {
                                setNewScore(pickedScore + 7);
                              }}
                            />
                            <p>New York, United States</p>
                          </label>

                          <label htmlFor="Berlin" className="location-label">
                            <input
                              type="radio"
                              value="Berlin"
                              name="user-city"
                              onClick={() => {
                                setNewScore(pickedScore - 4);
                              }}
                            />
                            <p>Berlin, Germany</p>
                          </label>

                          <label htmlFor="Taipei" className="location-label">
                            <input
                              type="radio"
                              value="Taipei"
                              name="user-city"
                              onClick={() => {
                                setNewScore(pickedScore + 1);
                              }}
                            />
                            <p>Taipei, China</p>
                          </label>

                          <label
                            htmlFor="Los Angeles"
                            className="location-label"
                          >
                            <input
                              type="radio"
                              value="Los Angeles"
                              name="user-city"
                              onClick={() => {
                                setNewScore(pickedScore + 9);
                              }}
                            />
                            <p>Los Angeles, United States</p>
                          </label>
                        </div>

                        <div className="server-right">
                          <label
                            htmlFor="Utrecht"
                            className="location-label"
                            onClick={() => {
                              setNewScore(pickedScore - 2);
                            }}
                          >
                            <input
                              type="radio"
                              value="Utrecht"
                              id="Utrecht"
                              name="user-city"
                            />
                            <p>Utrecht, Netherlands</p>
                          </label>

                          <label
                            htmlFor="Mexico City"
                            className="location-label"
                          >
                            <input
                              type="radio"
                              value="Mexico City"
                              name="user-city"
                              onClick={() => {
                                setNewScore(pickedScore + 2);
                              }}
                            />
                            <p>Mexico City, Mexico</p>
                          </label>

                          <label htmlFor="Hong-Kong" className="location-label">
                            <input
                              type="radio"
                              value="Hong-Kong"
                              name="user-city"
                              onClick={() => {
                                setNewScore(pickedScore);
                              }}
                            />
                            <p>Hong-Kong, China</p>
                          </label>

                          <label htmlFor="Moscow" className="location-label">
                            <input
                              type="radio"
                              value="Moscow"
                              name="user-city"
                              onClick={() => {
                                setNewScore(pickedScore - 5);
                              }}
                            />
                            <p>Moscow, Russia</p>
                          </label>

                          <label htmlFor="Paris" className="location-label">
                            <input
                              type="radio"
                              value="Paris"
                              name="user-city"
                              onClick={() => {
                                setNewScore(pickedScore - 2);
                              }}
                            />
                            <p>Paris, France</p>
                          </label>
                        </div>
                      </div>

                      <h3 className="calculated-score">Calculated score</h3>
                      <div className="result-squares">
                        <Square
                          content={
                            { pickedScore } >= 100 ? (
                              <h2>100</h2>
                            ) : (
                              <h2>{newScore}</h2>
                            )
                          }
                        />
                      </div>
                    </>
                  }
                />
              </div>
              // text
              <TextCard
                title="The location effect explained"
                content={
                  <>
                    <p id="explained">
                      Location plays an important role in determining speed of a
                      website. Google measures speed by requesting data from a
                      website as if it were a user. These requests originate
                      from a specific server, and this server has a real world
                      location. San Fransisco to be precise. So any website that
                      is stored on a server close to San Fransisco will see its
                      speed score go up, whereas websites stored on servers
                      further away will experience lower scores.
                    </p>
                    <p>
                      {" "}
                      What would the effects be if our websites were stored on
                      servers closer or further away from Google's own server?
                      Let's assume all of websites we're testing are stored on
                      the same server in London, England. Tick a server location
                      to simulate the effects of a shorter- or longer distance
                      from the Google PageSpeed servers in San Fransisco.
                    </p>
                  </>
                }
              />
            </>
          )}
        </>
      }
    />
  );
}

export default Location;
