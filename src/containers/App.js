import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll"
import ErrorBoundry from "../components/ErrorBoundry";
import {robots} from "../robots";
import './App.css';

// Below if statement is polyfill for the includes method used below for IE11
if (!String.prototype.includes) {
  // eslint-disable-next-line no-extend-native
  String.prototype.includes = function(search, start) {
    if (typeof start !== 'number') {
      start = 0;
    }
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }

/*  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => {this.setState({ robots: users })});
  } */

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter(robot => {
      // Polyfill above takes care of includes method below for IE11
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1 className="tc">Loading...</h1> :
      (
        <div className='tc'>
          <a href='../CompRmMain.html'><button className='button'>&laquo; Back</button></a>
          <h1 className="f1 dib">DC IT &nbsp; RoboSupport</h1>
          <a href='../../../../WindsorWI-3'><button className='button'>Home</button></a>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <Cardlist robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
  }
}

export default App;