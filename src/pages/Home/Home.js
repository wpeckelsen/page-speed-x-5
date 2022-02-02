import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";

import "./Home.scss";
import Button from "../../components/Button/Button";
import background from "/Users/wessel/WebstormProjects/pagespeedx5/src/assets/pagespeedx5cover.jpg";
import Square from "../../components/Square/Square";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";

function Home() {
  const { isAuth } = useContext(AuthContext);

  const history = useHistory();

  function handleClick() {
    {
      isAuth ? history.push("/input-domain") : history.push("/login");
    }
  }

  return (
    <>
      <header style={{ backgroundImage: `url(${background})` }}>
        <Square content={<i>PAGE SPEED x 5</i>} />

        <Button content={<h3>Run The Test</h3>} click={handleClick} />
      </header>

      <div className="blog-section">
        <PageCardNarrow
          title="Blog Title!"
          content={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto beatae corporis delectus, enim ipsam iste officia quas
              quod repudiandae saepe totam veritatis! Dolores eaque eligendi
              iusto magni nesciunt quas! Facilis.{" "}
              <Link to="/404">Read more</Link>
            </p>
          }
        />
      </div>
    </>
  );
}

export default Home;
