
import people from "../../images/people.jpg"
import people2 from "../../images/people2.jpg";
import coffeemake from "../../images/coffee_img.jpg";
import anisvg from "../../images/animation.svg";

import list1 from "../../images/ab1.svg"
import list2 from "../../images/ab2.svg"
import list3 from "../../images/ab3.svg"
const HistorySection = () => {
    return (
        <div className="bg-[#161616] text-gray-300  ">
                    <section className="grid grid-cols-[2fr_1fr] gap-4">
                    <div>
                    <div className="flex items-center gap-16">
                        <div className="space-y-16 flex flex-col ">
                        <img src={people} alt="" className="w-96"/>
                        <div className="self-end ">
                        <img src={people2} alt="" className="w-40 ml-auto"/>
                        
                        </div>

                        </div>
                    <div className="max-w-[400px]">
                        <h2 className="text-4xl font-bold">Explore The History Of the Cafe</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad beatae velit esse minus nobis, sint possimus porro! Necessitatibus consequatur inventore sapiente minima est non itaque veniam impedit culpa, facilis quasi fugit quisquam mollitia voluptatum iusto ipsam reprehenderit nemo cum earum quibusdam minus debitis sunt aspernatur! A eaque ipsum praesentium repudiandae.</p>


                        <ul className="mt-16 space-y-4">
                            <li className="text-lg flex gap-4 items-center font-bold">
                                <img src={list1} className="w-8" alt="" />
                            Beverage Varieties
                            </li>
                            <li className="text-lg flex gap-4 items-center font-bold">
                                <img src={list2} className="w-8" alt="" />
                                Coffee Types
                            </li>
                            <li className="text-lg flex gap-4 items-center font-bold">
                                <img src={list3} className="w-8" alt="" />
                                French Bakery
                            </li>
                        </ul>
                    </div>
                    </div>


                    </div>

                   <div className="overflow-hidden">
                   <div className="relative">
                   <div className="rotate-circle   text-white  fsz-30 rotate-text d-inline-block text-uppercase ">
                                        <svg className="textcircle" viewBox="0 0 500 500">
                                            <defs>
                                                <path id="textcircle" d="M250,400 a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z">
                                                    
                                                </path>
                                            </defs>
                                            <text>
                                                <textPath xlinkHref="#textcircle" textLength="900" > cafee shop house restourant </textPath>
                                            </text>
                                        </svg>
                                        
                                    </div>
                                    <img src={anisvg} alt="" className="absolute top-[35%] left-[35%] z-10 w-32  "/>
                   </div>
                   
                   <img src={coffeemake} alt="" />
                   </div>
                    </section>
        </div>
    );
};

export default HistorySection;