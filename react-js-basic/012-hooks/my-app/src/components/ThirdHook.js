import React, { useState } from 'react'

function ThirdHook() {
    const [name, setName] = useState({ firstName: '', lastName: '' })
    return (
        <div>
            <h3>ThirdHook</h3>
            <p>Your first name is : {name.firstName}</p>
            <p>Your last name is : {name.lastName}</p>
            {/* using below code only one input feild is change remaining as it is or empty */}
            {/* <form>
                <input type='text' name='firstName' value={name.firstName} onChange={e => setName({ firstName: e.target.value })} />
                <input type='text' name='lastName' value={name.lastName} onChange={e => setName({ lastName: e.target.value })} />
            </form> */}
            <form>
                <input type='text' name='firstName' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type='text' name='lastName' value={name.lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />
            </form>
        </div>
    )
}

export default ThirdHook