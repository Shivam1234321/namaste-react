import { useParams } from 'react-router-dom';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';
import useRestaurantMenu from '../utils/useRestaurantMenu';

const RestaurantMenu = () => {

 const {resId}= useParams();
 const resInfo= useRestaurantMenu(resId);

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
