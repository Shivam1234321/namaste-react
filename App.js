import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2YL9YeZtlHaaW5W_neodCY4CXc6hOloe_zdDHlrCZbP-Va1vIcRIjagdXU-XG4dXAfr4&usqp=CAU" alt="logo" className="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <img src="https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg" alt="res-logo" className="res-logo" />
            <h3>Meghana Food</h3>
            <h4>Biryani, Lucknavi</h4>
            <h4>4.5 Start</h4>
            <h4>35 Minutes</h4>
        </div>
    )
}


const Body = () => {
    return (
        <div className="res-body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);