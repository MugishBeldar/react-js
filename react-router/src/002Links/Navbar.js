// import {Link} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    const navLinkStyle = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            textDecoration: isActive ? 'none' : 'underline'
        }
    }
    return (
        // <nav className='navbar'>
        //     <Link to='/'>Home</Link>
        //     <Link to='/About'>About</Link>
        // </nav> 

        // for active link navigation
        <nav className='navbar'>
            <NavLink style={navLinkStyle} to='/'>Home</NavLink>
            <NavLink style={navLinkStyle} to='/About'>About</NavLink>
            <NavLink style={navLinkStyle} to='/Products'>Product</NavLink>
            <NavLink style={navLinkStyle} to='/Profile'>Profile</NavLink>

        </nav>
    )
}
