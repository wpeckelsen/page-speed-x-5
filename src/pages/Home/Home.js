import React from "react";
import "./Home.scss";
import Button from "../../components/Button/Button";
import background from "/Users/wessel/WebstormProjects/pagespeedx5/src/assets/pagespeedx5cover.jpg";

import Square from "../../components/Square/Square";
import { Link, useHistory } from "react-router-dom";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";

function Home() {
  const history = useHistory();
  function handleClick() {
    history.push("/input-domain");
  }

  return (
    <>
      <header style={{ backgroundImage: `url(${background})` }}>
        <Square content={<i>PAGE SPEED X 5 </i>} />

        <Button
          content="Run Test"
          click={() => {
            handleClick();
          }}
        />

          <button onClick={()=>{history.push("/input-domain")}}>klik test</button>
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
