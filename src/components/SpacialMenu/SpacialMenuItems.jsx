import { useEffect, useState } from "react";
import bg from "../../images/bg.png"
import cfe from "../../images/cfe1.jpg"
import { URL_PATH } from "../../utils/URL";
import { Link } from "react-router-dom";
const SpacialMenuItems = () => {
    const [index,setIndex] = useState(0);
    const [products,setProducts] = useState([]);
    const [filterProduct,setFilterProduct] = useState([])
   
    const changeIndex = (e) =>{
            const filter = (e.target.innerText)
           
        const tabIndex = (e.target.tabIndex);
            
        setIndex(tabIndex)
        if(filter == "All"){
            setFilterProduct(products)
        }else{
            const showProduct = products.filter(product => product.catagory == filter) || products
            setFilterProduct(showProduct)
        }
        
    }
   
    useEffect(()=>{
        const fetchProducts = async() => {
          
            try {
                const response = await fetch(`${URL_PATH}/api/products`)
                const data = await response.json();
                
                setProducts(data.result)
                setFilterProduct(data.result)
               
            } catch (error) {
             console.log(error);  
           
            }
        }
        fetchProducts()
    },[])

    return (
        <div className="mt-16" style={{background:`url(${bg}) right center no-repeat`}}>
                        <div role="tablist" className="p-4 border-gray-700  border rounded-3xl max-w-[800px] mx-auto md:flex grid grid-cols-2 grid-flow-row gap-6 justify-center text-gray-200">
                                <span onClick={(e)=>changeIndex(e)} tabIndex={0} className={`px-4 rounded-md py-1 ${index === 0 ? 'bg-secondary':''} cursor-pointer text-nowrap`}>
                                    All
                                </span>

                                <span onClick={(e)=>changeIndex(e)} tabIndex={1} className={`px-4 rounded-md py-1 ${index === 1 ? 'bg-secondary':''} cursor-pointer text-nowrap`}>
                                Black & white
                                </span>
                                <span onClick={(e)=>changeIndex(e)}  tabIndex={2} className={`px-4 rounded-md py-1 ${index === 2 ? 'bg-secondary':''} cursor-pointer text-nowrap`}>
                                Cold Coffee
                                </span>
                                <span onClick={(e)=>changeIndex(e)} tabIndex={3} className={`px-4 rounded-md py-1 ${index === 3 ? 'bg-secondary':''} cursor-pointer text-nowrap`}>
                                Robusta
                                </span>
                                <span onClick={(e)=>changeIndex(e)} tabIndex={4} className={`px-4 rounded-md py-1 ${index === 4 ? 'bg-secondary':''} cursor-pointer text-nowrap`}>
                                Arabica
                                </span>
                        </div>


                        <div  className="flex  flex-col gap-6 mt-6">
                            {
                              filterProduct&&   filterProduct.slice(0,4).map((product,index) => <SpacialCard key={product._id} product={product} index={index}/>)
                            }
                                
                                
                                
                                <button className="btn bg-secondary uppercase rounded-3xl inline-block mx-auto">
                                    <Link to="/spacial">view all Coffees</Link>
                                     </button>
                        </div>
                       
        </div>
    );
};

export default SpacialMenuItems;



function SpacialCard({product,index}){
    const {name,catagory,price,reguler_price} = product
    return (
        <div className="text-gray-300 grid md:grid-cols-[10rem_1.5fr_2fr_1fr]  items-center p-4">
                                        <span className="text-2xl font-bold">{index+1}</span>
                                        <div className="flex md:flex-row flex-col  gap-6 items-center">
                                            <img className="w-24 rounded-2xl" src={cfe} alt="" />
                                            <div className="text-center">
                                                <h2 className="text-2xl font-bold">{name}</h2>
                                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, perspiciatis.</p>
                                            </div>
                                        </div>

                                        <p className="text-center">
                                            {catagory}
                                        </p>
                                        <div className="flex flex-col items-end">
                                            <p className="text-xl font-bold">${price}</p>
                                            <span className="line-through text-sm text-red-300">${reguler_price}</span>
                                        </div>
                                </div>
    )
}





// https://i.ibb.co/CvkSkQc/1.jpg
// https://i.ibb.co/jJ3M0PH/2.jpg
// https://i.ibb.co/35KWwkz/3.jpg
// https://i.ibb.co/T0nZMVT/4.jpg
// https://i.ibb.co/PNF7qPf/cfe1.jpg
// https://i.ibb.co/g6tPMVT/sm-1.jpg
// https://i.ibb.co/0BXDR9k/sm-2.jpg
// https://i.ibb.co/hskYgtG/sm-3.jpg
// https://i.ibb.co/JKwQH1V/sm-4.jpg