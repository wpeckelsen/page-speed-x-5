import React from "react";

import "../../App.scss";
import Button from "../../components/Button/Button";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
import Square from "../../components/Square/Square";
import {Link} from "react-router-dom";
import PageCardNarrow from "../../components/PageCard/PageCardNarrow";

function PageNotFound() {
  return (
    <>
        <BreadCrumbs
            breadCrumbs="Home > 404"
        />

<PageCardNarrow
        title="404 Page not found"
        subtitle="That's an error"
        content={
          <>
          <p>
            The page you were looking for does not seem to exist.
            Sorry. <Link to="/">Go back home.</Link>

          </p>
          </>
        }
      />
    </>
  );
}

export default PageNotFound;
