import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';
import { MENU_URL } from '../utils/constants';

const RestaurantMenu = () => {

 const [resInfo, setResInfo]= useState(null);

 const param= useParams();
 useEffect(() =>{
    fetchData();
 }, []);

 const fetchData = async ()=>{
    const data= await fetch(`${MENU_URL+param?.resId}`);

    const json= await data.json();
    console.log("object", json);
    setResInfo(json);
 }

 if(resInfo === null){
    return <div className="body">
            <ShimmerSimpleGallery card col={4} row={3} imageHeight={300} caption />
        </div>
 }

 const {name, totalRatingsString, cuisines, costForTwoMessage} = resInfo?.data?.cards[2]?.card?.card?.info;

 const menu = resInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
 console.log(menu)
  return (
    <div>
       <h1>{name}</h1>
       <p>{cuisines.join(", ")} - {costForTwoMessage}</p>

       <h2>Menu</h2>
       <ul>
       {
        menu?.map((item, index) =>
             <li key={index}>{item?.card?.info?.name}
                <ul>
                    {
                        item?.card?.info?.addons?.map((value, index) => <li key={value?.groupName}>{value?.groupName}</li> )
                    }
                </ul>
             </li>
        )
       }
      
        
       </ul>
    </div>
  )
}

export default RestaurantMenu
