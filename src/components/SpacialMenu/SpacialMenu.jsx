import cav from "../../images/fav_wh.svg"
import SpacialMenuItems from "./SpacialMenuItems";
const SpacialMenu = () => {
    return (
        <div className="bg-primary ">
                    <section className="mt-32 p-4">
                            <div className="flex text-center flex-col gap-6 text-gray-200 mx-auto max-w-[800px] justify-center items-center">
                                    <img src={cav} className="w-12" alt="" />
                                <h2 className="text-4xl font-semibold">Our Special Menus</h2>
                                <p>Proin at lorem justo. Sed maximus risus hendrerit ipsum sodales, vel consequat dui ultrices. Vestibulum ante ipsum primis in faucibus orci luctus.</p>

                            </div>

                           <SpacialMenuItems/>


                            
                    </section>
        </div>
    );
};

export default SpacialMenu;