import React from "react";
import PageCard from "../../components/PageCard/PageCard";
import "../../App.scss";
import Button from "../../components/Button/Button";
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";

function PageNotFound() {
  return (
    <>
        <BreadCrumbs
            breadCrumbs="Home > 404"
        />


      <PageCard
        title="404 Page not found"
        subtitle="That's an error"
        content={
          <>
          <p>
            The page you were looking for does not seem to exist.
            Sorry. Go back home.
          </p>

            <Button
            content="Log in"
            />
          </>
        }
      />
    </>
  );
}

export default PageNotFound;
