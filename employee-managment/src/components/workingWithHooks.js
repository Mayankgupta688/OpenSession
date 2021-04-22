import React, { useState, useEffect } from 'react'

export default function WorkingWithHooks() {
    var [currentTime, setCurrentTime] = useState(`${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`);
    
    setInterval(() => {
        setCurrentTime(`${new Date().getHours()} : ${new Date().getMinutes()}: ${new Date().getSeconds()}`);
    }, 1000)
    
    return (
        <div>
            <h1>Current Time: {currentTime}</h1>
        </div>
    )
}
