import React, { Component } from "react";
import { Robots } from "./Robots";
import CardList from "./CardList";
import SearchBox from "../src/Components/SearchBox"
import "./App.css";

class App extends Component {

  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }


  onSearchChange = (event) => {
    console.log(event.target.value) ;
    this.setState({ searchfield: event.target.value })
  }

  render() {

    //filter the robots as user enter in searchbox and pass it to cardlist to display
    const {robots , searchfield} = this.state;
    const filteredRobots = robots.filter(robot =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })


    return (
      <div className="App bg-green">
        <h1 className="f1 near-black tc">Robo Friend</h1>
        <SearchBox searchChange={this.onSearchChange}/>
        <CardList robots={filteredRobots} />
      </div>
    );
  }
}

export default App;
