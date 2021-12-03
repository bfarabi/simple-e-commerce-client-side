import logo from "../../images/logo.png";
import './Header.css';
import {Link } from "react-router-dom";
import { userContext } from './../../App';
import { useContext, React } from "react";


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <nav>
                <Link className='link' to="/shop">Shop</Link>
                <Link className='link' to="/review">Order Review</Link>
                <Link className='link' to="/inventory"> Manage inventory</Link>
                <button onClick={ ()=> setLoggedInUser({})  } > Sign out </button>
            </nav>
        </div>
    );
};

export default Header;