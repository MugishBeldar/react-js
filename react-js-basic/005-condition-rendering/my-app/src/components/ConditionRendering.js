import React, { useState } from 'react'

const ConditionRendering = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    // 1st method using if else 
    // if (isLoggedIn) {
    //     return (
    //         <div>
    //             <h1>Welcome Abc</h1>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>Welcome Guest</h1>
    //         </div>
    //     )
    // }

    // second method using elements (variable)
    // let message;
    // if (isLoggedIn) { message = <div><h1>Welcome Abc</h1></div> }
    // else { message = <div><h1>Welcome Guest</h1></div> }
    // return (
    //     <div>
    //         {message}
    //     </div>
    // )

    // third method using ternary approch
    // return (
    //     isLoggedIn ? <div>Welcome Abc</div> : <div>Welcome Guest</div>
    // )

    // sortcucit operators 
    return (
        isLoggedIn && <div>Welcome Abc</div>
    )
    //   return (
    //     <div>
    //         <h1>Welcome Abc</h1>
    //         <h1>Welcome Guest</h1>
    //     </div>
    //   )
}

export default ConditionRendering