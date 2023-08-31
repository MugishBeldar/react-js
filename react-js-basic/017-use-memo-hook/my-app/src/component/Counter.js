import React, { useMemo } from 'react'

function Counter() {
    const [countOne, setCountOne] = React.useState(0);
    const [countTwo, setCountTwo] = React.useState(0);

    const incrementOne = () => {
        setCountOne(countOne + 1);
    }

    const incrementTwo = () => {
        setCountTwo(countTwo + 1);
    }

    // we have to say not change counter one value when only update the counter two value then use memo hook is used.
    // const isEvenOrOdd = () => {
    //     return (countOne % 2 === 0);
    // }

    const isEvenOrOdd = useMemo(() => {
        let i=0;
        while (i < 20000) i++;
        return countOne % 2 === 0;
    }, [countOne])

    return (
        <div>
            <h3>{countOne}</h3>
            <div>
                <button onClick={incrementOne}>incrementOne</button>
                <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            </div>
            <h3>{countTwo}</h3>
            <div>
                <button onClick={incrementTwo}>incrementTwo</button>
            </div>
        </div>
    )
}

export default Counter