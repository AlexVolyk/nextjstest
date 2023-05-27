'use client'

import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)


    if (typeof window !== "undefined") {
        console.log(localStorage.getItem('token'), 'token---- localStorage')
    }

    const displayCount = () => console.log(count)

    const increase = () => {
        setCount(prev => prev + 1)
        displayCount()
    }
    const decrease = () => {
        setCount(prev => prev - 1)
        displayCount()
    }

    return (
        <>
            <div>Counter</div>
            <div>
                <p>
                    {count}
                </p>
                <button
                    onClick={decrease}
                >
                    -
                </button>
                <button
                    onClick={increase}
                >
                    +
                </button>
            </div>
        </>
    )
}

export default Counter