import banner from "../images/inner_bg.jpg"

const PageHeader = ({children}) => {
    return (
        <div>
            <div className="h-[40vh] overflow-hidden relative" >
                <img src={banner} alt="" className="absolute  h-[40vh] object-cover object-left-bottom" />
                <div className="absolute  top-0 left-0 z-10 w-full bg-[#35272030] h-full ">
                    <section className="flex items-center h-[100%]">
                    <h2 className="text-gray-200 md:text-left text-center text-6xl font-semibold">{children}</h2>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PageHeader;