import React from "react";
import PageCardWide from "../../components/PageCard/PageCardWide";
import "./Results.scss";
import Button from "../../components/Button/Button";
import TextCard from "../../components/TextCard/TextCard";
import { Link, useHistory } from "react-router-dom";
import "../../App.scss";

import ChartComponent from "../../components/Chart/Chart";

function Results() {
  const history = useHistory();
  function handleClick() {
    history.push("/input-domain");
  }

  return (
    <PageCardWide
      title="Results"
      subtitle="Compare speeds of your domains"
      content={
        <>
          <div className="results">

<div className="result-graph">
              <ChartComponent />
</div>

            <div className="result-text">
              <div>
                <h3>domain.com</h3>
                <h3>domain.com</h3>
                <h3>domain.com</h3>
                <h3>domain.com</h3>
                <h3>domain.com</h3>
              </div>

              <div>
                <h3>67</h3>
                <h3>67</h3>
                <h3>67</h3>
                <h3>67</h3>
                <h3>67</h3>
              </div>
            </div>

            <div className="buttons">
              <div>
                <Button content="Run test again" />
              </div>

              <div>
                <Button
                  content="Run new test"
                  click={() => {
                    handleClick();
                  }}
                />
              </div>
            </div>

            <TextCard
              title="Check how you can improve these scores"
              content={<Link to="/improvements">Improvements</Link>}
            />

            <TextCard
              title="See the influence geography has on your scores"
              content={<Link to="/location">The location effect</Link>}
            />
          </div>
        </>
      }
    />
  );
}

export default Results;
