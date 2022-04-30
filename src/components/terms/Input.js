import React from 'react'
import Group from "./trash.png"

function Input() {
    return (
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
              <button><img src={Group} alt="add" className="w-6 h-8" /></button>
            </div>
          </div>        
        </div>
    )
}

export default Input