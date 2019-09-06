import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

import { Link } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    // flexWrap: "nowrap",
    // transform: "translateZ(0)"
    width: 500,
    height: 450,
    transform: "translateZ(0)"
  },
  title: {
    // color: theme.palette.primary.light
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  // titleBar: {
  //   background:
  //     "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  // }

  //Additional
  icon: {
    color: "white"
  }
}));

const tileData = [
  {
    img:
      "https://freshaoptions.com.au/wp-content/uploads/2017/12/FreshaOptions-11-1.jpg",
    title: "Image",
    author: "author",
    featured: true
  },
  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/2/2f/Culinary_fruits_front_view.jpg",
    title: "Image",
    author: "author",
    featured: true
  },
  ,
  {
    img: "https://locallygrown.co.za/wp-content/uploads/2019/01/Fruit-Pack.jpg",
    title: "Image",
    author: "author",
    featured: true
  }
];

export default function SingleLineGridList() {
  const classes = useStyles();

  return (
    <Fragment>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about">About</Link>
      <Link to="/photo">Photos</Link>

      <Container maxWidth="sm">
        <h1>This is Photos Section</h1>
      </Container>
      <div className={classes.root}>
        {/* <GridList className={classes.gridList} cols={2.5}> */}
        <GridList cellHeight={200} spacing={5} className={classes.gridList}>
          {tileData.map(tile => (
            <GridListTile key={tile.img}>
              <img src={tile.img} alt={tile.title} />
              <GridListTileBar
                title={tile.title}
                classes={{
                  root: classes.titleBar,
                  title: classes.title
                }}
                actionIcon={
                  <IconButton aria-label={`star ${tile.title}`}>
                    <StarBorderIcon className={classes.title} />
                  </IconButton>
                }
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </Fragment>
  );
}
