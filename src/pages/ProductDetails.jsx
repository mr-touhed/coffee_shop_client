import { useLoaderData } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import bg from "../images/video_bg.jpg"
const ProductDetails = () => {
    const productData = useLoaderData()?.product;
    console.log(productData);
    return (
        <div style={{backgroundImage:`url(${bg})`}} className="bg-cover bg-left bg-no-repeat">
            <PageHeader>
                    {productData.name}
            </PageHeader>

            <section className="grid grid-cols-2 gap-6 text-gray-200">
                <div className="flex justify-center">
                <img src={productData.img} alt="" className="max-w-[600px]"/>
                </div>
                <div className="flex flex-col gap-6">
                    <h2 className="text-4xl text-center">{productData.name}</h2>
                    <p className="text-center text-xl text-pretty  font-light mt-3">price: {productData.price}$ <br/>  <span className="line-through text-red-400 text-sm">regular-price:{productData.reguler_price}$</span></p>
                    <p>details: {productData.details}</p>

                    <p>catagory: <button className="uppercase px-4 py-2 border text-sm">{productData.catagory}</button></p>
                </div>
            </section>

        </div>
    );
};

export default ProductDetails;