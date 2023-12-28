import React, { useState } from 'react'

function UseState() {
    const [number, setNumber] = useState(0)
    const handleIncrement = () => {
        setNumber(number + 1)
    }
    const handleDescrement = () => {
        setNumber(number - 1)
    }
    return (
        <>
            <div>{number}</div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDescrement}>Descrement</button>
        </>
    )
}

export default UseState