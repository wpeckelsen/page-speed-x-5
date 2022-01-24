import React, { useState } from "react";
import PageCardWide from "../../components/PageCard/PageCardWide";
import "./Location.scss";
import Square from "../../components/Square/Square";
import Button from "../../components/Button/Button";
import TextCard from "../../components/TextCard/TextCard";

function Location() {
  const [userScore, toggleUserScore] = useState(0);
  const [userScoreb, toggleUserScoreb] = useState(0);

  function clicker() {
    toggleUserScoreb(20);
    toggleUserScore(30);
  }

  function resetLocationScore() {
    toggleUserScore(userScore);
    toggleUserScoreb(userScoreb);
  }

  return (

        <PageCardWide
      title="The Location Effect"
      subtitle="See the influence geography has on your score"
      content={
        <>
          <div className="location">
            <div className="world-map"> </div>

            <TextCard
              title="The location effect explained"
              content={
                <>
                  <p>
                    Location plays an important role in determining speed of a
                    website. Google measures speed by requesting data from a
                    website as if it were a user. These requests originate from
                    a specific server, and this server has a real world
                    location. San Fransisco to be precise. So any website that
                    is stored on a server close to San Fransisco will see its
                    speed score go up, whereas websites stored on servers
                    further away will experience lower scores.
                  </p>
                  <p>
                    {" "}
                    What would the effects be if our websites were stored on
                    servers closer or further away from Google's own server?
                    Let's assume all websites tested here are stored on the same
                    server. Tick a location below to simulate the effects of a
                    shorter- or longer distance to the Google PageSpeed in San
                    Fransisco.
                  </p>
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
                          onChange={() => clicker()}
                        />
                        <p>Amsterdam, Netherlands</p>
                      </label>

                      <label htmlFor="New York" className="location-label">
                        <input
                          type="radio"
                          value="New York"
                          id="New York"
                          name="user-city"
                          onChange={() => toggleUserScore(44)}
                        />
                        <p>New York, United States</p>
                      </label>

                      <label htmlFor="Berlin" className="location-label">
                        <input
                          type="radio"
                          value="Berlin"
                          name="user-city"
                          onChange={() => toggleUserScore(userScore + 2)}
                        />
                        <p>Berlin, Germany</p>
                      </label>

                      <label htmlFor="Taipei" className="location-label">
                        <input
                          type="radio"
                          value="Taipei"
                          name="user-city"
                          onChange={() => toggleUserScore(userScore + 2)}
                        />
                        <p>Taipei, China</p>
                      </label>

                      <label htmlFor="Los Angeles" className="location-label">
                        <input
                          type="radio"
                          value="Los Angeles"
                          name="user-city"
                          onChange={() => toggleUserScore(userScore + 2)}
                        />
                        <p>Los Angeles, United States</p>
                      </label>
                    </div>

                    <div className="server-right">
                      <label htmlFor="Utrecht" className="location-label">
                        <input
                          type="radio"
                          value="Utrecht"
                          id="Utrecht"
                          name="user-city"
                          onChange={() => toggleUserScore(userScore + 2)}
                        />
                        <p>Utrecht, Netherlands</p>
                      </label>

                      <label htmlFor="Mexico City" className="location-label">
                        <input
                          type="radio"
                          value="Mexico City"
                          name="user-city"
                          onChange={() => toggleUserScore(userScore + 2)}
                        />
                        <p>Mexico City, Mexico</p>
                      </label>

                      <label htmlFor="Hong-Kong" className="location-label">
                        <input
                          type="radio"
                          value="Hong-Kong"
                          name="user-city"
                          onChange={() => toggleUserScore(userScore + 2)}
                        />
                        <p>Hong-Kong, China</p>
                      </label>

                      <label htmlFor="Moscow" className="location-label">
                        <input
                          type="radio"
                          value="Moscow"
                          name="user-city"
                          onChange={() => toggleUserScore(userScore + 2)}
                        />
                        <p>Moscow, Russia</p>
                      </label>

                      <label htmlFor="Paris" className="location-label">
                        <input
                          type="radio"
                          value="Paris"
                          name="user-city"
                          onChange={() => toggleUserScore(userScore + 2)}
                        />
                        <p>Paris, France</p>
                      </label>
                    </div>
                  </div>
                  <h3>Website scores</h3>

                  <div className="result-squares">
                    <Square content={userScore} />
                    <Square content="44" />
                    <Square content="44" />
                    <Square content="44" />
                    <Square content="44" />
                  </div>
                </>
              }
            />
          </div>
        </>
      }
    />
  );
}

export default Location;
