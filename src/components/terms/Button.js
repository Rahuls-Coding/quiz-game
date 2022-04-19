import React from 'react'


const Button = (props) => { 
  
    return ( 
      
      <button className="cursor-pointer text-sky-500 underline decoration-sky-500 decoration-wavy decoration-1 AddButton" 
      onClick={props.onClick}>{props.text}</button> 
      
    ); 
    
  } 
  
  export default Button;


//   <button 
//           type = "submit"
//           className="cursor-pointer text-sky-500 underline decoration-sky-500 decoration-wavy decoration-1"
//           onClick = {() => {this.AddCard()}}
//         >
//           Add More
//         </button>