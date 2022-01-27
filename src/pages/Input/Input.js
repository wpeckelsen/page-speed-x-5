import React, { useContext, useState } from "react";

import Button from "../../components/Button/Button";
import "./Input.scss";
import "/Users/wessel/WebstormProjects/pagespeedx5/src/components/Form/Form.scss";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";
import { GoogleContext } from "../../context/GoogleContext";
import TextCard from "../../components/TextCard/TextCard";

function Input(/*{ setInputHandler }*/) {
  // const { GoogleFetch } = useContext(GoogleContext);

  function formHandler(e) {
    e.preventDefault();
    console.log("form handler klik");
    // GoogleFetch();
  }

  const [input, setInput] = useState("");

  return (
    <PageCardNarrow
      title="Speed Test five domains"
      subtitle="fill in five domains and check their speed results"
      content={
        <>
          <form className="page-form" >
            <div className="grid-one">
              <label htmlFor="domain-one">
                <p>1. Domain Name</p>
              </label>
            </div>

            <div className="grid-two">
              <input
                type="url"
                placeholder="example.com"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>

             <div className="grid-three">
              <label htmlFor="domain-two">
                <p>2. Domain Name</p>
              </label>
            </div>
            <div className="grid-four">
              <input
                type="url"
                placeholder="example.com"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>

            <div className="grid-five">
              <label htmlFor="domain-three">
                <p>3. Domain Name</p>
              </label>
            </div>
            <div className="grid-six">
              <input
                type="url"
                placeholder="example.com"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>

            <div className="grid-seven">
              <label htmlFor="domain-four">
                <p>4. Domain Name</p>
              </label>
            </div>
            <div className="grid-eight">
              <input
                type="url"
                placeholder="example.com"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>

            <div className="grid-nine">
              <label htmlFor="domain-five">
                <p>5. Domain Name</p>
              </label>
            </div>
            <div className="grid-ten">
              <input
                type="url"
                placeholder="example.com"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
            </div>

            <div className="grid-eleven">
              <Button type="submit" content="Run Test" click={formHandler} />
            </div>



          </form>
          <div>
            <TextCard
                content="error"
            />
          </div>

        </>
      }
    />
  );
}

export default Input;
