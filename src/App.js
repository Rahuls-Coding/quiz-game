import './App.css';
import Card from './components/Card'
import Profile from "./components/Profile"
import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      search : "",
      page: "start"
    }
  }
  onSearched = (event) => {
    this.setState({search: event.target.value})
    console.log(event.target.value)
  }
  render() {
    if (this.state.page === "question"){
      return (
      <div className="App">
        <Card searchField={this.onSearched}/>
      </div>
      ); 
    } else if (this.state.page === "start"){
      return (
        <div className="App">
          <div className="bg-[#131828] text-center grid justify-items-center items-center h-screen">
            <div className="text-white text-3xl">How many people are playing?</div>
            
            <div className= "flex flex-row space-x-10">
                <Profile styling = "px-5 pt-5 pb-5 bg-gradient-to-r from-[#DC2323] to-[#ED9B81]"/>
                <Profile styling = "px-5 pt-5 pb-5 bg-gradient-to-r from-[#FF7455] to-[#FD9E2F]"/>
                <Profile styling = "px-5 pt-5 pb-5 bg-gradient-to-r from-cyan-500 to-blue-500"/>
                <Profile styling = "px-5 pt-5 pb-5 bg-gradient-to-r from-[#89F4C1] to-[#0BCA08]"/>
            </div>
            <div className="text-white text-3xl"></div>
          </div>  
        </div>
        
      )
    }
    
  }
  
}

export default App;
