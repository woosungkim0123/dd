import Test from "components/Test";
import { Link } from "gatsby";
import React, { FunctionComponent } from "react";

const IndexPage: FunctionComponent = function () {
  return (
    <>
      <Test text="Hello World" />
      <Link to="/info">To Info</Link>
    </>
  )
}

export default IndexPage