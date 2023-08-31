/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'

function RuneffectOnlyOnce() {
    const [x, setx] = useState(0);
    const [y, sety] = useState(0);

    useEffect(() => {
        console.log("useEffect called!");
        window.addEventListener('mousemove', mousPosition)
    },[])

    const mousPosition = e => {
        console.log("mousPosition called");
        setx(e.clientX);
        sety(e.clientY);
    }
    
    return (
        <div>
            <h3>runeffectOnlyOnce</h3>
            <p>X: {x} and Y: {y}</p>
        </div>
    )
}

export default RuneffectOnlyOnce