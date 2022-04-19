import React from 'react'
import {useState} from 'react'
import ReactDOM from 'react-dom';
import Input from './Input'
import Button from './Button'


function CardList () {
  
  const [components, setComponents] = useState(["Sample Component"]); 
    
    function addComponent() { 
      
      setComponents([...components, "Sample Component"]) 
      
    } 
  
  return (
    <div>
      <div className="">
        <div className="flex flex-row">
          <div className="w-full text-white text-2xl underline"> Questions </div>
          <div className="w-full text-white text-2xl underline"> Answers </div>
        </div>
        
        <div> 
        
            {components.map((item, i) => ( <Input/> ))} 
            <Button onClick={addComponent} text="Call Component"/> 
        
        </div> 
          

                
      </div>




      
    </div>
    
  )
  }


export default CardList