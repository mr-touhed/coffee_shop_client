import CoffeeItems from "../CoffeeSection/CoffeeItems";
import coffee from "../../images/coffee.svg"
import coffee2 from "../../images/coffee2.svg"

const CoffeeSection = () => {
    return (
        <div className=" py-16 bg-primary text-gray-300">
                <section>
                <div className="flex items-center">
                    <div className="max-w-[60vw] ml-auto flex flex-col gap-6 items-center">
                    <h2 className="text-5xl font-semibold  text-center ">Coffee So Very Good Even your alarm Clock will Smile. View Services</h2>
                    <img src={coffee2} alt="" className="w-14"/>
                    </div>
                    <img src={coffee} alt="" className="w-[300px]"/>
                </div>
            
                    <CoffeeItems/>

                </section>
        </div>
    );
};

export default CoffeeSection;