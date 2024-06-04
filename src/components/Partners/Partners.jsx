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
                                    <h2 className="md:text-3xl text-1xl absolute -top-6 left-1/2 -translate-x-1/2 font-extrabold inline-block bg-secondary px-6 py-2 text-gray-200 rounded-2xl">Our Clients</h2>



                                <div className="grid md:grid-cols-6 grid-cols-3 px-4 md:px-0 w-full mt-32 justify-center items-center">
                                            <img src={img1} className="md:w-24 w-16" alt="" />
                                            <img src={img2} className="md:w-24 w-16" alt="" />
                                            <img src={img3} className="md:w-24 w-16" alt="" />
                                            <img src={img4} className="md:w-24 w-16" alt="" />
                                            <img src={img5} className="md:w-24 w-16" alt="" />
                                            <img src={img6} className="md:w-24 w-16" alt="" />
                                </div>

                </section>
            
        </div>
    );
};

export default Partners;