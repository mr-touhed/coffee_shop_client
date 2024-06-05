import { Link } from "react-router-dom";
import coffee from "../images/coffee2.svg"
const Card = ({product,spacial}) => {
    const {name,img,_id, price,reguler_price} = product
    return (
        <div className="md:w-72 md:m-0 mx-6 p-5 border rounded-2xl border-gray-800 backdrop-blur-sm bg-[#6d6b6b0a] shadow-inner flex flex-col gap-8">
                <h2 className="text-2xl font-bold">{name}</h2>
                <img src={img} className="rounded-xl w-64 h-36 object-cover" alt="" />
                <div className="flex justify-between items-center">
                <Link to={`/product/${_id}`}>Read more</Link> 
                <img src={coffee} className="w-9" alt="" />
                </div>
               {spacial && <div className="flex text-2xl justify-between ">
                    <span className="font-semibold text-green-900">{price}$</span> <span className="line-through font-light text-red-400">{reguler_price}$</span>
                </div>}
        </div>
    );
};

export default Card;