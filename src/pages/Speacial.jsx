import { useLoaderData } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";


const Speacial = () => {
        const products = useLoaderData().result
    return (
        <div>
            <PageHeader>
                    Menu Items
            </PageHeader>
            <section className="grid md:grid-cols-4 gap-6">
                    {
                        products.map(product => <Card spacial={true} key={product._id} product={product}/>)
                    }
            </section>
        </div>
    );
};

export default Speacial;