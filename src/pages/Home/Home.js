import React from "react";
import "./Home.scss";
import Button from "../../components/Button/Button";
import background from "/Users/wessel/WebstormProjects/pagespeedx5/src/assets/pagespeedx5cover.jpg";
import PageCard from "../../components/PageCard/PageCard";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Square from "../../components/Square/Square";

function Home() {
  return (<>

      <header style={{ backgroundImage: `url(${background})` }}>
        <Square
            content={<i>PAGE SPEED X 5 </i>}
        />

        <Button content= {<h3>Run Test</h3>} />
      </header>

      <div className="blog-section">
        <PageCard
          title="Blog Title!"
          content={
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Architecto beatae corporis delectus, enim ipsam iste officia quas
              quod repudiandae saepe totam veritatis! Dolores eaque eligendi
              iusto magni nesciunt quas! Facilis.
            </p>
          }
        />

    </div>
      </>
  );
}

export default Home;
