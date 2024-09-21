import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

   const [btnNameReact, setButtonName] = useState("Login");
   const onlineStatus= useOnlineStatus();
   const {loggedInUser} = useContext(UserContext);
   // Subscribing the store using selecter
   const cartItems = useSelector((store) => store.cart.items );

   console.log(cartItems);
    return (
        <div className="flex justify-between">
            <div className="logo-container">
                <img src={LOGO_URL} alt="logo" className="w-50" />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-2">Online Status : { onlineStatus ? '✅'  : '🔴' }</li>
                    <li className="px-2"><Link to="/">Home</Link></li>
                    <li className="px-2"><Link to="/about">About Us</Link></li>
                    <li className="px-2"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-2"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-2 font-bold"><Link to='/cart'>Cart - ({cartItems.length} items)</Link></li>
                    <button className="" onClick={()=> {(btnNameReact === 'Login') ? setButtonName('Logout') : setButtonName('Login')}
                        }>{btnNameReact}</button>
                    <li className="px-2">{loggedInUser}</li>

                </ul>
            </div>
        </div>
    )
}

export default Header;