import './App.css';
import Card from './components/Card'
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      search : ""
    }
  }
  onSearched = (event) => {
    this.setState({search: event.target.value})
    console.log(this.search)
  }
  render() {
    return (
      <div className="App">
        <Card searchField={this.onSearched}/>
      </div>
    ); 
  }
  
}

export default App;
