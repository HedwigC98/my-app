import React, { Component } from "react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  //react16 introduced a new life cycle method and it is called componentDidCatch()
  //if anything errors out it will run this lifecycle hook which takes in 2 paramethers error and info
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    // if this component errors out this hook is gonna make hasError= true
    //if hasError gets triggered then the h1 tag in the render is gonna be triggered to run
  }

  render() {
    if (this.state.hasError) {
      return <h1>Oops. That is not good!</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundry; // this makes it so that we have acces to it in other files
