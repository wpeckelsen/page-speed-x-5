import React, { useContext } from "react";

import { AuthContext } from "../../context/AuthContext";
import { HashLink as Link } from "react-router-hash-link";
import "./Home.scss";
import Button from "../../components/Button/Button";
import background from "/Users/wessel/WebstormProjects/pagespeedx5/src/assets/pagespeedx5cover.jpg";
import Square from "../../components/Square/Square";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";

function Home() {
  const { isAuth } = useContext(AuthContext);

  return (
    <>
      <header style={{ backgroundImage: `url(${background})` }}>
        <Square content={<h2>Page Speed x 5</h2>} />

        <Button
          content={<Link to={isAuth ? "/input" : "/login"}>Run the test</Link>}
        />
      </header>

      <div className="blog-section">
        <PageCardNarrow
          title="Blog Title!"
          content={<>
            <p>
                This project was bootstrapped with Create React App. </p>
                <p>
              This application makes use of the Google PageSpeed Insights API. A
              user can fill in five domain names simultaneously, after which the
              application sends five GET requests to the Google PageSpeed
              Insights API. The results of this GET request in turn populate a
              Google Chart. This chart is implemented in this app through an NPM
              package: React Google Charts. <a href="https://github.com/wpeckelsen/page-speed-x-5">Read More</a>
            </p>
          </>
          }
        />
      </div>
    </>
  );
}

export default Home;
