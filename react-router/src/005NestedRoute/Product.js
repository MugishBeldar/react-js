import { Link, Outlet } from 'react-router-dom'
function Product() {
    return (
        <>
            <div>
                <input type="search" placeholder="search for products" />
            </div>
            <nav>
                <Link to='Feature'>featured</Link>
                <Link to='New'>New</Link>
            </nav>
            <Outlet />
        </>
    )
}

export default Product