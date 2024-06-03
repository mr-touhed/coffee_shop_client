import { Link } from "react-router-dom";
import img from "../images/2.jpg"
import coffee from "../images/coffee2.svg"
const Card = () => {
    return (
        <div className="w-72 p-5 border rounded-2xl border-gray-800  shadow-inner flex flex-col gap-8">
                <h2 className="text-2xl font-bold">Fresh Brewed White Coffee</h2>
                <img src={img} className="rounded-xl" alt="" />
                <div className="flex justify-between items-center">
                <Link>Read more</Link> 
                <img src={coffee} className="w-9" alt="" />
                </div>
        </div>
    );
};

export default Card;