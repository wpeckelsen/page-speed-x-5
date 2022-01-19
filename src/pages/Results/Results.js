import React from "react";
import PageCard from "../../components/PageCard/PageCard";
import "./Results.scss";
import Button from "../../components/Button/Button";
import TextCard from "../../components/TextCard/TextCard";

function Results() {
  return (
    <PageCard
      title="Results"
      subtitle="Check results"
      content={
        <>
          <div className="results">
          <div className="result-graph"> </div>

          <div className="result-text">
            <div>
              <p>domain.com</p>
              <p>domain.com</p>
              <p>domain.com</p>
              <p>domain.com</p>
              <p>domain.com</p>
            </div>

            <div>
              <p>67</p>
              <p>67</p>
              <p>67</p>
              <p>67</p>
              <p>67</p>
            </div>

            <div>
              <p>Copy text to clipboard</p>
            </div>
          </div>

          <div className="buttons">
            <div>
              <Button content="Run test again" />
            </div>

            <div>
              <Button content="Run new test" />
            </div>
          </div>


            <TextCard
            title="Check how you can improve these scores"
            content="Improvements"
            />

            <TextCard
            title="See the influence geography has on your scores"
            content="The location effect"
            />

          </div>
        </>
      }
    />
  );
}

export default Results;
