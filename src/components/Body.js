import { useEffect, useState } from "react";
import resList from "../utils/restrauntsData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

    const [restaurantList, setRestaurantList] = useState();

    useEffect(() =>{
        getRestrauntData();
    },[]);

    const getRestrauntData = async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json= await data.json();

        const resCardData= json.data.cards[5]?.card.card.gridElements.infoWithStyle.restaurants;
        console.log(resCardData);
        setRestaurantList(resCardData);
    }

    return (
        <div className="res-body">
            <div className="filter">
                <button className="filter-btn" onClick={() =>{
                    const lists= restaurantList.filter((item) =>{
                        return item.info?.avgRating > 4;
                    });
                    console.log(lists);
                    setRestaurantList(lists);
                }}>Top Reated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    restaurantList?.map((item, index) =>{
                        return <RestaurantCard key={item.info.id} data={item} />;
                    })
                }
                
            </div>
        </div>
    )
}

export default Body;