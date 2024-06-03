import { useState } from "react";
import bg from "../../images/bg.png"
import cfe from "../../images/cfe1.jpg"
const SpacialMenuItems = () => {
    const [index,setIndex] = useState(0);

    const changeIndex = (e) =>{
        const tabIndex = (e.target.tabIndex);
        setIndex(tabIndex)
    }

    return (
        <div className="mt-16" style={{background:`url(${bg}) right center no-repeat`}}>
                        <div role="tablist" className="p-4 border-gray-700  border rounded-3xl max-w-[800px] mx-auto flex gap-6 justify-center text-gray-200">
                                <span onClick={(e)=>changeIndex(e)} tabIndex={0} className={`px-4 rounded-md py-1 ${index === 0 ? 'bg-secondary':''} cursor-pointer`}>
                                    All
                                </span>

                                <span onClick={(e)=>changeIndex(e)} tabIndex={1} className={`px-4 rounded-md py-1 ${index === 1 ? 'bg-secondary':''} cursor-pointer`}>
                                    Black & white
                                </span>
                                <span onClick={(e)=>changeIndex(e)}  tabIndex={2} className={`px-4 rounded-md py-1 ${index === 2 ? 'bg-secondary':''} cursor-pointer`}>
                                    Cold Coffee
                                </span>
                                <span onClick={(e)=>changeIndex(e)} tabIndex={3} className={`px-4 rounded-md py-1 ${index === 3 ? 'bg-secondary':''} cursor-pointer`}>
                                    Robusta
                                </span>
                                <span onClick={(e)=>changeIndex(e)} tabIndex={4} className={`px-4 rounded-md py-1 ${index === 4 ? 'bg-secondary':''} cursor-pointer`}>
                                    Arabica
                                </span>
                        </div>


                        <div  className="flex  flex-col gap-6 mt-6">
                                <SpacialCard/>
                                <SpacialCard/>
                                <SpacialCard/>
                                <SpacialCard/>
                                
                                <button className="btn bg-secondary uppercase rounded-3xl inline-block mx-auto">view all Coffees </button>
                        </div>
                       
        </div>
    );
};

export default SpacialMenuItems;



function SpacialCard(){
    return (
        <div className="text-gray-300 grid grid-cols-[10rem_1.5fr_2fr_1fr] items-center p-4">
                                        <span className="text-2xl font-bold">1</span>
                                        <div className="flex gap-6 items-center">
                                            <img className="w-24 rounded-2xl" src={cfe} alt="" />
                                            <div className="text-center">
                                                <h2 className="text-2xl font-bold">Clasic Latte</h2>
                                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, perspiciatis.</p>
                                            </div>
                                        </div>

                                        <p className="text-center">
                                            Lorem ipsum dolor sit amet.
                                        </p>
                                        <div className="flex flex-col items-end">
                                            <p className="text-xl font-bold">$1</p>
                                            <span className="line-through text-sm">$2</span>
                                        </div>
                                </div>
    )
}