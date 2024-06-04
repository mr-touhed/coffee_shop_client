import { Suspense, useEffect, useState } from "react";
import Card from "../Card";
import { URL_PATH } from "../../utils/URL";



const CoffeeItems = () => {
        const [exclusive,setExclusive] = useState([]);
        useEffect(()=>{
            const fetchExclusiveProduct = async() =>{
                try {
                    const response = await  fetch(`${URL_PATH}/api/products`);
                    const data =   await response.json();
                    setExclusive(data.result)
                } catch (error) {
                    console.log(error);
                }
            }
            fetchExclusiveProduct()
        },[])

        const showProduct = exclusive.filter(product => product.exclusive);
        
    return (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-y-6 mt-16">
            
            
            <Suspense fallback={'Loading.....'}>
                {
                      showProduct.map(product => <Card key={product._id} product={product}/>)  
                }
            </Suspense>
        </div>
    );
};

export default CoffeeItems;