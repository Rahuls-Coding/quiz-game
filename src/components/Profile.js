import React from 'react'
import person from "./person.png"

const Profile = ({styling, onClicked}) => {

    return (
        
            <div className=" max-w-sm mx-auto overflow-hidden rounded-xl drop-shadow-4xl bg-[#30374E] border-2 border-black">
                <button 
                className={styling}
                onClick={onClicked}>
                    <div className="rounded overflow-hidden ">
                    <img src={person} alt="Mountain"/>
                </div>
                </button>
                
            </div>

    )

}

export default Profile