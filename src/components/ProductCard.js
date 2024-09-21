import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addCart } from "../store/cartSlice";
const ProductCard = (props) =>{
    const {name, price, imageId, description, category, defaultPrice
    } = props?.data;

    const dispatch = useDispatch();

    const handleAddItem = (item) =>{
        dispatch(addCart(item));
    }

    return(
        <>
        <div className="flex items-center justify-center" key={"pc"+props?.index}>
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg flex m-2">
                <div className="p-6 w-2/3">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{name}</h2>
                <h3 className="text-xl text-gray-600 mb-4">{category}</h3>
                <p className="text-lg text-green-500 font-semibold">Rs. {(price ?? defaultPrice)/100}</p>
                </div>

                <div className="w-1/3 p-6 relative">
                    <img src={CDN_URL+imageId} alt="Product Image" className="object-contain h-20 w-48"/>
                    <button className="absolute bottom-2 right-2 bg-blue-500 text-white px-2 rounded hover:bg-blue-600" onClick={() => handleAddItem(props?.data)}>
                     Add +
                    </button>
                </div>
            </div>
        </div>
        </>
    );
}
export default ProductCard;