import React from "react";
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'

function Inputs(){
    return (
        <div className="flex flex-row justify-center my-6 ">
            <div className="flex flex-row w=3/4 items-center justify-center space-x-4"> 
                <input type="text" className="text-xl font-light p-2 w-full shadow-xl focus:outline-none rounded-lg capitalize placeholder:lowercase" placeholder="Search for City..."/>
                <UilSearch size={25} className="text-white cursor-pointer transition ease-out hover:scale-125"/>
                <UilMapMarker size={25} className="text-white cursor-pointer transition ease-auto hover:scale-125"/>
                <div className="flex flex-row w-1/4 items-center justify-center">
                    <button name="metric" className="text-white font-light">°C</button>
                    <p className="text-xl text-white mx-1">|</p>
                    <button name="imperial" className="text-white font-light">°F</button>
                </div>
            </div>
        </div>
    )
}

export default Inputs;