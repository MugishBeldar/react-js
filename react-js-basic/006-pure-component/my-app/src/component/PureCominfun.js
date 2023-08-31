import React, { useMemo, useState } from 'react'

function PureCominfun() {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(10);
    console.log("!!!!!🚀 ~ file: PureCominfun.js:15 ~ PureCominfun ~ return:")
    // function multiCount() {
    //     console.log("🚀~~~~~~~~ ~ file: PureCominfun.js:8 ~ multiCount ~ multiCount:")
    //     return count*2
    // }
    const multiCountMemo = useMemo(function multiCount() {
        console.log("🚀~~~~~~~~ ~ file: PureCominfun.js:8 ~ multiCount ~ multiCount:")
        return count * 2
    }, [count])
    return (

        <div>
            <h2>use memo in function component</h2>
            <h2>count: {count}</h2>
            <h2>item: {item}</h2>
            <h2>{multiCountMemo}</h2>
            <button onClick={() => setCount(count + 1)}>update count</button>
            <button onClick={() => setItem(item * 10)}>update item</button>
        </div>
    )
}

export default PureCominfun