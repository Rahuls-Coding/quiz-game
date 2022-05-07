import React from 'react'
import {Component} from 'react'
import Profile from "./Profile"

class ChoosePlayer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            count1: 0,
            count2: 0,
            count3: 0, 
            color: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#DC2323] to-[#ED9B81] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl",
            color1: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#FF7455] to-[#FD9E2F] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl",
            color2: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#1052FD] to-[#3CD0F0] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl",
            color3: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#89F4C1] to-[#0BCA08] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl",
            player: []
        }
    }
    render() {
        return (
<div className="text-center grid justify-items-center items-center h-screen">
            <div className="text-white text-3xl">How many people are playing?</div>
            <div className= "flex flex-row space-x-10">
                <Profile styling = {this.state.color} 
                onClicked= {() => {
                  if (this.state.count < 1) {
                    this.setState({ count: this.state.count + 1 })
                    this.state.player.push("Player 1")
                    alert(this.state.player)  
                    this.setState({color: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#DC2323] to-[#ED9B81] rounded-xl cursor-pointer border-4 border-[#336A9A] shadow-xl"})
                  } else {
                    this.setState({ count: this.state.count - 1 })
                    this.setState({color: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#DC2323] to-[#ED9B81] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl"})
                  }
                  
                  }}/>
                <Profile 
                styling = {this.state.color1} 
                onClicked= {() => {
                  if (this.state.count1 < 1) {
                    this.setState({ count1: this.state.count1 + 1 })
                    this.state.player.push("Player 2")
                    alert(this.state.player) 
                    this.setState({color1: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#FF7455] to-[#FD9E2F] rounded-xl cursor-pointer border-4 border-[#336A9A] shadow-xl"})
                  } else {
                    this.setState({ count1: this.state.count1 - 1 })
                    this.setState({color1: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#FF7455] to-[#FD9E2F] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl"})
                  }
                  
                  }}/>
                <Profile 
                styling = {this.state.color2} 
                onClicked= {() => {
                  if (this.state.count2 < 1) {
                    this.setState({ count2: this.state.count2 + 1 })
                    this.state.player.push("Player 3")
                    alert(this.state.player) 
                    this.setState({color2: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#1052FD] to-[#3CD0F0] rounded-xl cursor-pointer border-4 border-[#336A9A] shadow-xl"})
                  } else {
                    this.setState({ count2: this.state.count2 - 1 })
                    this.setState({color2: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#1052FD] to-[#3CD0F0] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl"})
                  }
                  
                  }}/>
                <Profile 
                styling = {this.state.color3} 
                onClicked= {() => {
                  if (this.state.count3 < 1) {
                    this.setState({ count3: this.state.count3 + 1 })
                    this.state.player.push("Player 4")
                    alert(this.state.player) 
                    this.setState({color3: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#89F4C1] to-[#0BCA08] rounded-xl cursor-pointer border-4 border-[#336A9A] shadow-xl"})
                  } else {
                    this.setState({ count3: this.state.count3 - 1 })
                    this.state.player.remove("Player 4")
                    alert(this.state.player) 
                    this.setState({color3: "px-5 pt-5 pb-5 bg-gradient-to-r from-[#89F4C1] to-[#0BCA08] rounded-xl cursor-pointer border-4 border-[#131828] shadow-xl"})
                  }
                  
                  }}/>
            </div>

              <div className="text-white text-3xl">{`Number Of Players Selected: ${this.state.count+this.state.count1+this.state.count2+this.state.count3}`}</div>
              {/* <div className = "py-3"></div> */}
        </div>
        )
    }
}

export default ChoosePlayer