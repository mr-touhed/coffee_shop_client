import img1 from "../../images/1.png"
import img2 from "../../images/2.png"
import img3 from "../../images/3.png"
import img4 from "../../images/4.png"
import img5 from "../../images/5.png"
import img6 from "../../images/6.png"
const Partners = () => {
    return (
        <div className="bg-primary  pt-32">
                <section className="relative   border-t border-dotted">
                                    <h2 className="text-3xl absolute -top-6 left-1/2 -translate-x-1/2 font-extrabold inline-block bg-secondary px-6 py-2 text-gray-200 rounded-2xl">Our Clients</h2>



                                <div className="grid grid-cols-6 w-full mt-32 items-center">
                                            <img src={img1} className="w-24" alt="" />
                                            <img src={img2} className="w-24" alt="" />
                                            <img src={img3} className="w-24" alt="" />
                                            <img src={img4} className="w-24" alt="" />
                                            <img src={img5} className="w-24" alt="" />
                                            <img src={img6} className="w-24" alt="" />
                                </div>

                </section>
            
        </div>
    );
};

export default Partners;