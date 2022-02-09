import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import { AuthContext } from "../../context/AuthContext";
import { HashLink as Link } from "react-router-hash-link";
import "./Home.scss";
import Button from "../../components/Button/Button";
import background from "/Users/wessel/WebstormProjects/pagespeedx5/src/assets/pagespeedx5cover.jpg";
import Square from "../../components/Square/Square";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";

function Home() {
  const { isAuth } = useContext(AuthContext);

  const history = useHistory();



  return (
    <>
      <header style={{ backgroundImage: `url(${background})` }}>

        <Square content={<h2><i> PAGE  SPEED </i><br/> x <br/> 5</h2>} />

        <Button
          content={<Link to={isAuth ? "/input" : "/login"}>Run the test</Link>}
        />
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
