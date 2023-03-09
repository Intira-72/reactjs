import React from "react"
import { useState, useEffect } from "react"

const ThisText = () => {
    const [ thisText, setThisText ] = useState("")

    useEffect(() => {
        console.log("COMPONENT MOUNTED");
        return () => {
            console.log("COMPONENT UNMOUNTED");
        }
    }, [])

    return (
        <>
            <input type="text" onChange={(event) => { setThisText(event.target.value)} } />
            <h1>{ thisText }</h1>
        </>        
    )
}

export default ThisText;