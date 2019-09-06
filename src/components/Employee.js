import React, { Fragment } from "react";
import { Link } from "react-router-dom";
const arr = [{ name: "Shahzad", age: 27 }, { name: "Hussain", age: 25 }];

const a = () => "abc";

const styles = {
  abc: {
    color: "red",
    boarder_radius: 2
  }
};
npm 
export const Employee = () => {
  return (
    <Fragment>
      <Link style={styles.abc} to="/">
        Home
      </Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/about">About</Link>
      <Link to="/photo">Photos</Link>
      <Link to="/web">Web Home</Link>
      <Link to="/employee">Employee</Link>

      <div>
        {arr.map(employee => {
          return (
            <Fragment>
              <h5>
                {employee.name} {employee.age}
              </h5>
            </Fragment>
          );
        })}
      </div>
    </Fragment>
  );
};
