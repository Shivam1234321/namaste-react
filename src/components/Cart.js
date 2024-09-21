import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { clearCart } from "../store/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store) => store.cart.items );
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return (
        <div>
            <div className="flex items-center flex-col justify-center break-before-column">
            <h1 className="text-4xl font-bold text-gray-800 text-center">Cart</h1>
            <button className="bg-slate-900 text-white px-2 py-2 rounded hover:bg-black-600" onClick={handleClearCart}>
                     Clear Cart
            </button>
        </div>
        {   
            cartItems.length > 0 ?
            cartItems.map((item, index) => 
               <ProductCard key={`cart{index}`} data={item} index={index}/>
            ) : <h3 className="text-2xl font-bold text-gray-800 text-center mt-10">Cart is emplty. Please add to cart.</h3>
        }
     </div>
    );
  }
  
  export default Cart;