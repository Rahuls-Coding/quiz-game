import './App.css';
import Card from './components/Card'
// import Profile from "./components/Profile"
import Signin from "./components/Signin"
import ChoosePlayer from './components/ChoosePlayer';
import CardList from "./components/terms/CardList"
import React, { Component } from 'react'




class App extends Component {
  constructor() {
    super() 
    this.state = {
      search : "",
      page: "sign-in",
      
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
        <div className="bg-[#131828] text-center grid justify-items-center items-center h-screen">
          <div>
            <Card searchField={this.onSearched}/>
            <div className="p-10">
                <button 
                  className="bg-blue-500 hover:bg-blue-700 shadow-lg shadow-blue-500/50 text-white font-bold py-2 px-7 rounded"
                  onClick = {() => {this.setState({page: "start"})}}> Quit 
                </button>
            </div>
           
          </div>
          
        </div>
        
      </div>
      ); 
    } else if (this.state.page === "start"){
      return (
        <div className="App">
          {/* <div className="text-center grid justify-items-center items-center "> */}
              <ChoosePlayer/>
              <button className="bg-blue-500 hover:bg-blue-700 shadow-lg shadow-blue-500/70 hover:shadow-lg hover:shadow-blue-700/70 text-white font-bold py-2 px-7 rounded"
              onClick = {() => {this.setState({page: "upload"})}}> Next </button>
          {/* </div> */}
        </div>
        
      )
    } else if (this.state.page === "upload"){
      return (
          <div className="App text-center grid justify-items-center items-center" id= "App">
            <div className="text-center grid justify-items-center items-center min-h-screen ">
            <div className="text-white text-3xl p-10">Upload Your Quiz!</div>
              <CardList/>
              <div className = "p-10">
                <button className="bg-blue-500 hover:bg-blue-700 shadow-lg shadow-blue-500/70 hover:shadow-lg hover:shadow-blue-700/70 text-white font-bold py-2 px-7 rounded"
                onClick = {() => {this.setState({page: "upload"})}}> Next </button>
              </div>
              
            </div>
          </div>
      )
    } else if (this.state.page === "sign-in"){
      return (
        <div className="App">
        <Signin/>
        </div>
      )
    }
    
  }
  
}

export default App;
