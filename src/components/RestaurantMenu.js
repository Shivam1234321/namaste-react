import { useParams } from 'react-router-dom';
import { ShimmerSimpleGallery } from 'react-shimmer-effects';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ProductCard from './ProductCard';

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
       <div className="flex items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 text-center">{name}</h1><br/>
        <p className='class="text-4xl font-bold text-gray-800 text-center"'>{cuisines.join(", ")} - {costForTwoMessage}</p>
      </div>
       {
        menu?.map((item, index) =>
             <ProductCard data={item}/>
        )
       }
    </div>
  )
}

export default RestaurantMenu
