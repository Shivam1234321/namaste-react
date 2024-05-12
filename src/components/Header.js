import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

   const [btnNameReact, setButtonName] = useState("Login");
   const onlineStatus= useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status : { onlineStatus ? '✅'  : '🔴' }</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    <button onClick={()=> {(btnNameReact === 'Login') ? setButtonName('Logout') : setButtonName('Login')}
                        }>{btnNameReact}</button>

                </ul>
            </div>
        </div>
    )
}

export default Header;