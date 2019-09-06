import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
class About extends React.Component {
  render() {
    return (
      <Fragment>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About</Link>
        <Link to="/photo">Photos</Link>
        {/* <div className="container">
          <h1>This is About</h1>
        </div> */}
        <Container maxWidth="sm">
          <h1>This is About</h1>
        </Container>
      </Fragment>
    );
  }
}
export default About;
