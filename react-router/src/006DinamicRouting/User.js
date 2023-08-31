import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

function User() {
    const [searchParams, setSearchParams] = useSearchParams()
    const showActiveUser = searchParams.get('filter') === 'active';
    return (
        <>
            <div>
                <h1>User 1</h1>
                <h1>User 2</h1>
                <h1>User 3</h1>
                <Outlet />
            </div>
            <div>
                <button onClick={() => setSearchParams({ filter: 'active' })}>Active User</button>
                <button onClick={() => setSearchParams({})}>Reset Filter</button>
            </div>
            {
                showActiveUser && showActiveUser ? (<h2>Showing active users.</h2>) : (<h2>Showing all users.</h2>)
            }
        </>
    )
}

export default User