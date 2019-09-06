import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
class WebsiteHome extends React.Component {
  render() {
    return (
      <Fragment>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/about">About</Link>
        <Link to="/photo">Photos</Link>
      </Fragment>
    );
  }
}
export default WebsiteHome;
