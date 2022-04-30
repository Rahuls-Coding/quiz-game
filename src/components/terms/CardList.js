import React from 'react'
import {useState} from 'react'
import ReactDOM from 'react-dom';
import Input from './Input'
import Button from './Button'
import Group from "./trash.png"

function CardList () {
  
  const [components, setComponents] = useState(["Sample Component"]); 
    
    function addComponent() { 
      
      setComponents([...components, "Sample Component"]) 
      
    } 
  
    function deleteComponent() {
        if (components.length > 1) {
        setComponents(components.slice(0, components.length - 1)) 
        }
        
    }
  return (
    <div>
      <div className="">
        <div className="flex flex-row">
          <div className="w-full text-white text-2xl underline"> Questions </div>
          <div className="w-full text-white text-2xl underline"> Answers </div>
        </div>
        
        <div> 
        
            {components.map((item, i) => ( 
        <div> 
          <div className="flex flex-row ">
            <div className=" max-w-sm mx-auto p-6 ">
              <textarea
                  className="w-full h-20 px-5 py-5 text-base rounded-xl drop-shadow-4xl text-white placeholder-slate-300 focus:shadow-outline bg-[#31384F] border-2 border-gray-700 Question"
                  placeholder="Enter terms here..."
              ></textarea>
            </div>
            <div className=" max-w-sm mx-auto p-6 ">
              <textarea
                  className="w-full h-20 px-5 py-5 text-base rounded-xl drop-shadow-4xl text-white placeholder-slate-300 focus:shadow-outline bg-[#31384F] border-2 border-gray-700 Question"
                  placeholder="Enter terms here..."
              ></textarea>
            </div>
            <div className="py-10">
              <Button onClick={deleteComponent} text={<img src={Group} alt="add" className="w-6 h-8" />}/>
            </div>
          </div>        
        </div> ))} 
            <Button onClick={addComponent} text="Add Question"/> 
    
        
        </div> 
          

                
      </div>




      
    </div>
    
  )
  }


export default CardList