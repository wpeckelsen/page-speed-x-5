import React from "react";
import PageCardWide from "../../components/PageCard/PageCardWide";
import "./Improvements.scss";
import TextCard from "../../components/TextCard/TextCard";
import Square from "../../components/Square/Square";
import {Link} from "react-router-dom";

function Improvements(props) {
  return (
    <PageCardWide
      title="Improvements"
      subtitle="Check how you can improve your scores"
      content={
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
                      improvements <a href="#wordpress">here</a>.
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
                        <input type="checkbox" value="images" name="images" />
                        <p>Decompress large images</p>
                      </label>

                      <label
                        htmlFor="javascript"
                        className="improvements-label"
                      >
                        <input
                          type="checkbox"
                          value="javascript"
                          name="javascript"
                        />
                        <p>Write JavaScript ‘below the fold’</p>
                      </label>

                      <label htmlFor="css" className="improvements-label">
                        <input type="checkbox" value="css" name="css" />
                        <p>Remove unused CSS</p>
                      </label>

                      <label htmlFor="cdn" className="improvements-label">
                        <input type="checkbox" value="cdn" name="cdn" />
                        <p>Implement a CDN (Content Delivery Network)</p>
                      </label>
                    </div>

                    <div className="improvements-result">
                      <h3>Speed Improvement</h3>
                      <Square content="11" />
                      <p>
                        The score of your website will increase with <b>11</b>{" "}
                        points.
                      </p>
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
                        <input type="checkbox" value="plugin" name="plugin" />
                        <p>Reducing the amount of plug-ins</p>
                      </label>

                      <label
                        htmlFor="theme"
                        className="improvements-label"
                      >
                        <input
                          type="checkbox"
                          value="theme"
                          name="theme"
                        />
                        <p>Removing unused themes and picking a light weight theme</p>
                      </label>


                      <label htmlFor="caching" className="improvements-label">
                        <input type="checkbox" value="caching" name="caching" />
                        <p>Enable advanced caching </p>
                      </label>

                      <label htmlFor="hosting" className="improvements-label">
                        <input type="checkbox" value="hosting" name="hosting" />
                        <p>Switch hosting provider</p>
                      </label>
                    </div>



                    <div className="wordpress-result">
                      <h3>Speed Improvement</h3>
                      <Square content="11" />
                      <p>
                        The score of your website will increase with <b>11</b>{" "}
                        points.
                      </p>
                    </div>




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

export default Improvements;
