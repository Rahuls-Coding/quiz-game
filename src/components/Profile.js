import React from 'react'
import person from "./person.png"

const Profile = ({styling, clicked}) => {

    return (
        
            <div className=" max-w-sm mx-auto overflow-hidden rounded-xl drop-shadow-4xl bg-[#30374E] border-2 border-black">
                <div 
                className={styling}
                onClick= {() => {
                    if (clicked >= 4) {
                        return clicked += 1
                    } else {
                        return clicked -= 1
                    }
                }}>
                    <div className="rounded overflow-hidden ">
                    <img src={person} alt="Mountain"/>
                </div>
                </div>
                
            </div>

    )

}

export default Profile