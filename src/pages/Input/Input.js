import React, { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import "./Input.scss";
import "/Users/wessel/WebstormProjects/pagespeedx5/src/components/Form/Form.scss";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";
import ErrorCard from "../../components/ErrorCard/ErrorCard";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Results from "../Results/Results";
import { HashLink as Link } from "react-router-hash-link";


function Input() {

  const history = useHistory();
  const APIkey = "secret";


  //error states
  const [invalidUrl, setInvalidUrl] = useState(false);
  const [emptyDomain, setEmptyDomain] = useState(false);

  //input values
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input5, setInput5] = useState("");

  //API result state
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [score3, setScore3] = useState(0);
  const [score4, setScore4] = useState(0);
  const [score5, setScore5] = useState(0);

  //misc states
  const [formSubmit, setFormSubmit] = useState(false);
  const [disableForm, setDisableForm] = useState(false);
  const [loadingText, setLoadingText] = useState(false)
  const [formButton, setFormbutton] = useState(false)
  const [showResultClick, setShowResultClick] = useState(false)
  const [blur, setBlur] = useState({ filter: "blur(0px)" })


  // form functions
  function inputHandler(e) {
    e.preventDefault();
    emptyDomainChecker();
  }

  function emptyDomainChecker() {
    if (
      input1.length === 0 ||
      input2.length === 0 ||
      input3.length === 0 ||
      input4.length === 0 ||
      input5.length === 0
    )
    {
      setEmptyDomain(true);
    }

    else {
      invalidUrlChecker();
    }
  }

  function invalidUrlChecker() {
    if (
      input1.includes('https') ||
      input2.includes('https') ||
      input3.includes('https') ||
      input4.includes('https') ||
      input5.includes('https')
    )
    {
      setInvalidUrl(true);
    }
   else {
    setFormSubmit(true);
    setDisableForm(true);
    setBlur({ filter: "blur(2px)" })
    setLoadingText(true)
    console.log("FORM SUBMITTED🤖👍");
    }
  }

  // function formSender() {
  //   googleFetchers();
  // }
  // function googleFetchers() {
  //   googleFetch1();
  //   googleFetch2();
  //   googleFetch3();
  //   googleFetch4();
  //   googleFetch5();
  // }







  //async API calls within useEffect
  useEffect(
      ()=>{
        const source = axios.CancelToken.source();

        //1: API get request
        async function googleFetch1() {
          const httpsInput1 = "https://www." + input1;

          try {
            const result = await axios.get(
                `https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=${httpsInput1}&key=${APIkey}`, {cancelToken: source.token}
            );

            setScore1(
                result.data.lighthouseResult.categories.performance.score * 100
            );
          } catch (e) {
            console.log("error");
          }
        }

        //2: API get request
        async function googleFetch2() {
          const httpsInput2 = "https://www." + input2;

          try {
            const result = await axios.get(
                `https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=${httpsInput2}&key=${APIkey}`, {cancelToken: source.token}
            );

            setScore2(
                result.data.lighthouseResult.categories.performance.score * 100
            );
          } catch (e) {
            console.log("error");
          }
        }

        //3: API get request
        async function googleFetch3() {
          const httpsInput3 = "https://www." + input3;
          try {
            const result = await axios.get(
                `https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=${httpsInput3}&key=${APIkey}`, {cancelToken: source.token}
            );

            setScore3(
                result.data.lighthouseResult.categories.performance.score * 100
            );
          } catch (e) {
            console.log("error");
          }
        }

        //4: API get request
        async function googleFetch4() {
          const httpsInput4 = "https://www." + input4;
          try {
            const result = await axios.get(
                `https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=${httpsInput4}&key=${APIkey}`,{cancelToken: source.token},
            );

            setScore4(
                result.data.lighthouseResult.categories.performance.score * 100
            );
          } catch (e) {
            console.log("error");
          }
        }

        //5: API get request
        async function googleFetch5() {
          const httpsInput5 = "https://www." + input5;
          try {
            const result = await axios.get(
                `https://pagespeedonline.googleapis.com/pagespeedonline/v5/runPagespeed?url=${httpsInput5}&key=${APIkey}`,{cancelToken: source.token}
            );

            setScore5(
                result.data.lighthouseResult.categories.performance.score * 100
            );
          } catch (e) {
            console.log("error");
          }
        }


        if (formSubmit===true)
        {
          googleFetch1();
          googleFetch2();
          googleFetch3();
          googleFetch4();
          googleFetch5();
        }
        return function cleanup() {
          source.cancel();
        }
        }
      ,[input1, input2, input3, input4, input5, formSubmit])

  //if scores are in:
  // unblurring the form again,
  // form is no longer disabled and
  // loading text is removed
useEffect(()=>{
  if (score1 > 0 || score2 > 0 ||  score3 > 0 || score4 > 0 || score5 > 0)
  {
    setDisableForm(false);
    setBlur({ filter: "blur(0px)" })
    setLoadingText(false)
    setFormbutton(true)
  }

}, [score1, score2, score3, score4, score5])



  //changes the button back to 'run test' after 5 seconds
  useEffect( ()=>{
    if (showResultClick)
      setInterval(() => {
        setFormbutton(false)
      }, 5000);
      },[showResultClick])





  return (
    <>
      <PageCardNarrow
        title="Speed Test five domains"
        subtitle="fill in five domains and check their speed result"
        content={
          <>
            {invalidUrl ? (
              <ErrorCard
                title="Some fields contain a URL"
                content={
                  <>
                    <p>
                      Remember, a domain name looks like this:{" "}
                      <b>example.com</b> <br />
                      You cannot enter URLs here. Only domain names will be
                      accepted.
                    </p>
                  </>
                }
              />
            ) : (
              ""
            )}

            {emptyDomain ? (
              <ErrorCard
                title="Some fields have been left empty..."
                content={
                  <>
                    <p>
                      You must add five URLs. Why? Because the application kept
                      crashing when the developer tried giving users the option
                      to only enter one domain.
                    </p>
                  </>
                }
              />
            ) : (
              ""
            )}

            <div className="input">
              <fieldset disabled={disableForm} style={blur}>
                <form className="page-form" onSubmit={inputHandler}>
                  <div className="grid-a">
                    <label htmlFor="domain-one">
                      <p>1. Domain Name</p>
                    </label>
                  </div>

                  <div className="grid-b">
                    <input
                      required
                      type="domain"
                      placeholder="example.com"
                      value={input1}
                      onChange={(e) => {
                        setInput1(e.target.value);
                      }}
                    />
                  </div>

                  <div className="grid-c">
                    <label htmlFor="domain-two">
                      <p>2. Domain Name </p>
                    </label>
                  </div>
                  <div className="grid-d">
                    <input
                      type="text"
                      placeholder="example.com"
                      value={input2}
                      onChange={(e) => {
                        setInput2(e.target.value);
                      }}
                    />
                  </div>

                  <div className="grid-e">
                    <label htmlFor="domain-three">
                      <p>3. Domain Name</p>
                    </label>
                  </div>
                  <div className="grid-f">
                    <input
                      type="text"
                      placeholder="example.com"
                      value={input3}
                      onChange={(e) => {
                        setInput3(e.target.value);
                      }}
                    />
                  </div>

                  <div className="grid-g">
                    <label htmlFor="domain-four">
                      <p>4. Domain Name</p>
                    </label>
                  </div>
                  <div className="grid-h">
                    <input
                      type="text"
                      placeholder="example.com"
                      value={input4}
                      onChange={(e) => {
                        setInput4(e.target.value);
                      }}
                    />
                  </div>

                  <div className="grid-i">
                    <label htmlFor="domain-five">
                      <p>5. Domain Name</p>
                    </label>
                  </div>
                  <div className="grid-j">
                    <input
                      type="text"
                      placeholder="example.com"
                      value={input5}
                      onChange={(e) => {
                        setInput5(e.target.value);
                      }}
                    />
                  </div>

                  <div className="grid-k">
                    {formButton ? (
                      <h3>
                        {" "}
                        <Link
                          smooth
                          to="/input#results"
                          onClick={() => {
                            setShowResultClick(true);
                          }}
                        >
                          Show Results!
                        </Link>
                      </h3>
                    ) : (
                      <span id="run-test">
                        <Button type="submit" content="Run test" />
                      </span>
                    )}
                  </div>
                </form>
              </fieldset>
            </div>
            {loadingText ? (
              <p style={{ textAlign: "center" }}>
                <b>
                  {" "}
                  Loading... <br />
                  This might take up to 20 seconds
                </b>
              </p>
            ) : (
              ""
            )}
          </>
        }
      />

      {score1 || score2 || score3 || score4 || score5 > 0 ? (
        <span id="results">
          <Results
            input1={input1}
            input2={input2}
            input3={input3}
            input4={input4}
            input5={input5}
            inputScore1={score1}
            inputScore2={score2}
            inputScore3={score3}
            inputScore4={score4}
            inputScore5={score5}
            inputChecker={formSubmit}
            // googleFetchersPasser={googleFetchers}
          />
        </span>
      ) : (
        ""
      )}
    </>
  );
}

export default Input;
