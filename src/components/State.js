import React from "react";
import { Person } from "./Person";
export class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      name: "Delhi"
    };
  }

  buttonHandler = () => {
    this.setState({ name: "Noida" });
  };

  render() {
    return (
      <div>
        <Person data={this.state} buttonHandler={this.buttonHandler} />
      </div>
    );
  }
}
