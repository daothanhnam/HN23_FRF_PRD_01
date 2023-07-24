//@ts-nocheck
import React from "react";

export class BuggyCounter extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = { counter: 0 };
  }
  handleClick = () => {
    this.setState(({ counter }) => ({
      counter: counter + 1,
    }));
  };
  render() {
    if (this.state.counter === 5) {
      throw new Error("crashed");
    }
    return <h2 onClick={this.handleClick}>{this.state.counter}</h2>;
  }
}
