import { useLoaderData } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import { useState } from "react";


const Speacial = () => {
        const productsData = useLoaderData().result;
        const [products,setProducts] = useState(productsData);

        const handel_search = (e) =>{
                const text = e.target.value;
                const showItems = productsData.filter(items => (items.name).toLowerCase().includes(text.toLowerCase()));
                setProducts(showItems)
        }
    return (
        <div>
            <PageHeader>
                    Menu Items
                    
            </PageHeader>
            <div className="flex justify-center mt-8">
                    <input onChange={(e)=> handel_search(e)} type="text" name="" id="" className="w-full rounded-xl text-center text-gray-200 h-[3rem] p-2 max-w-[800px] bg-transparent border placeholder:text-center" placeholder="search item " />
                </div>
            <section className="grid md:grid-cols-4 gap-6 text-gray-200">
                    {
                        products.map(product => <Card spacial={true} key={product._id} product={product}/>)
                    }
            </section>
        </div>
    );
};

export default Speacial;