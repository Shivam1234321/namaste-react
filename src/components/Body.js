import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { ShimmerSimpleGallery } from "react-shimmer-effects";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [searchTerm, setSearchTerm]= useState("");
    const [restaurantList, setRestaurantList] = useState([]);
    const [filterdList, setFilterdList] = useState([]);
    const onlineStatus= useOnlineStatus();

    useEffect(() =>{
        getRestrauntData();
    },[]);

    const getRestrauntData = async ()=>{
        const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.3176452&lng=82.9739144&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json= await data.json();
        const resCardData= json?.data?.cards[4]?.card?.card?.gridElements.infoWithStyle.restaurants;
        setRestaurantList(resCardData);
        setFilterdList(resCardData);
    }

    if(!onlineStatus){
        return (
            <h1>Look like your internet connection is gone. Please check for smooth browsing :)</h1>
        )
    }

    const filterList= () =>{
        console.log(searchTerm)
        let filterData= restaurantList.filter((item) => 
          item.info?.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilterdList(filterData);
    }

    if(restaurantList.length === 0){
        return <div className="body">
            <ShimmerSimpleGallery card col={4} row={3} imageHeight={300} caption />
        </div>
    }

    return (
        <div className="res-body">
            <div className="flex">
                <div className="search-input p-2 m-2">
                    <input className="border border-solid border-black" type="text" value={searchTerm} onChange={(e) =>{
                        setSearchTerm(e.target.value)
                    }} />
                    <button className="px-4 p-2 m-4 bg-green-100 rounded-lg" onClick={filterList}>Search</button>
                </div>
                <div className="p-2 m-2 flex items-center">
                <button className="px-4 p-2 m-4 bg-green-100  rounded-lg" onClick={() =>{
                    const lists= restaurantList.filter((item) =>{
                        return item.info?.avgRating > 4;
                    });
                    console.log(lists);
                    setFilterdList(lists);
                }}>Top Reated Restaurant</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filterdList?.map((item, index) =>{
                        return <RestaurantCard key={item.info.id} data={item} />;
                    })
                }
                
            </div>
        </div>
    )
}

export default Body;