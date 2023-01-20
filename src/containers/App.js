import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../SearchBox";
import { robots } from "../robots";
import Card from "../components/Card";
import Scroll from "../components/Scroll";
import "./App.css";
import ErrorBoundry from "../components/ErrorBoundry";

//STATE SIMPLY MEANS  THE DESCRIPTION OF YOUR APP. A STATE IS SIMPLY AN OBJECT. OBJECT THAT DESCRIBES YOUR APPLICATION. STATE IS ABLE TO CHANGE!
//Props are things that come out of state????

//so a parent feeds state into a child component and as soon as  child component receives a state, its a property. The child can never change that propert. The parent just
//just tells itwhat the state is

//in order to use state you have to use the orginal way of creating React components, class components like this:
// class app extends component. also must use the render(). and need to import this up in the file: import React, { Component } from "react";

//these React components are called pure functions or pure components. they receive an input and always return the same output.

//App.js now owns state(which also includes robots ect) and it is allowed to change it
class App extends Component {
  constructor() {
    //in the constructor you  can declare state SO THIS IS HOW U ADD STATE. after constructor u must have super()
    super(); // in order to use this. you must call super() method which calls the constructor of component
    this.state = {
      //the state usually lives in the parent component and it can be passed down from here to different components
      // state is something that can change and affect the app and the things down here are the things that change also change(for example the h1 shouldnt change so you dont have to add it here)
      robots: robots,
      searchfield: " ",
    };
  }
  //NB!!! MAKE SURE THAT anytime you make your own methods on a component, use the arrow function syntax // because??
  onSearchChange = (event) => {
    //every time you want to change state you use this syntax--> this.setState
    this.setState({ searchfield: event.target.value });
  };

  render() {
    //destructuring
    const { robots, searchfield } = this.state; // ???
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());

      //includes is a method prebuilt into javascript
    });

    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />\
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
