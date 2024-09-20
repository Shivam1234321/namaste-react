import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {data}= props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla, id} = data.info;
    return (
        <Link to={`/restaurant/${id}`}>
            <div className="m-2 p-4 w-[250] rounded-lg shadow-lg bg-gray-100 hover:bg-gray-200">
                <img src={CDN_URL+cloudinaryImageId} alt="res-logo" className="rounded-xl" />
                <h3 className="font-bold text-lg">{name}</h3>
                <h4>{cuisines.join(", ")}</h4>
                <h4>{avgRating} Star</h4>
                <h4>{costForTwo}</h4>
                <h4>{sla.slaString}</h4>
            </div>
        </Link>
    )
}

export default RestaurantCard;