import React from 'react'
type GreetProps = {
    name: string,
    age: number,
    address: string,
}
function Greet(props: GreetProps) {
    return (
        <div>
            {/* <h1>
                Hello,
            </h1>
            <p>
                name: {props.name},
            </p>
            <p>
                age: {props.age},
            </p>
            <p>
                adress: {props.address}
            </p> */}
        </div>
    )
}

export default Greet