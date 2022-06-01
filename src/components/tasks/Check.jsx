import React from 'react'
import './Task.css'
import {HiCheckCircle} from 'react-icons/hi'

function Check({checked, onClick}) {
    if (checked === true) {
        return (
           
                <span className="icons-task  whitespace-nowrap px-3 py-4 text-sm text-green-500" style={{cursor: "pointer"}} onClick={onClick}><HiCheckCircle /></span>
            
        )
    }
    else {
        return (
            <span className="icons-task  whitespace-nowrap px-3 py-4 text-sm text-gray-500" style={{cursor: "pointer"}} onClick={onClick}><HiCheckCircle /></span>
        )
    }
}

export default Check