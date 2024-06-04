import { useState } from "react";
import { URL_PATH } from "../../utils/URL";


const AddProduct = () => {
    const [product,setProduct] = useState({name:'',price:'',img:'',catagory:'',details:'',exclusive:false,reguler_price:''});

    const handel_change_input = (e) =>{
        setProduct(prev => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const checked = (update) =>{
        setProduct({...product, exclusive:update})
    }
    const handel_add_product = async (e) =>{
        e.preventDefault()
        try {
            const response = await fetch(`${URL_PATH}/api/product`,{
                method:"POST",
                headers:{
                    "content-type":"application/json"
                },
                body:JSON.stringify(product)
            })
            const result = await response.json();
            if(result.status){
                //
                setProduct({name:'',price:'',img:'',catagory:'',exclusive:false,reguler_price:''})
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="bg-zinc-600 h-[100vh]  text-gray-100">
            <form onSubmit={handel_add_product} className="grid grid-cols-2 p-4 gap-6 text-gray-500">
            <label className="form-control w-full ">
                    <div className="label text-gray-200">
                        <span className="label-text">Product Name</span>
                        
                    </div>
                    <input onChange={(e)=>handel_change_input(e)} value={product.name} type="text" name="name" placeholder="Product Name" className="input input-bordered w-full " />
                    
            </label>
            <label className=" flex w-full gap-2">
                   <div>
                   <div className="label text-gray-200">
                        <span className="label-text">Offer Price</span>
                        
                    </div>
                    <input onChange={(e)=>handel_change_input(e)} value={product.price} type="text" name="price" placeholder="offer Price" className="input input-bordered w-full " />
                   </div>
                   <div>
                   <div className="label text-gray-200">
                        <span className="label-text">Regular Price</span>
                        
                    </div>
                    <input onChange={(e)=>handel_change_input(e)} value={product.reguler_price} type="text" name="reguler_price" placeholder="regular Price" className="input input-bordered w-full " />
                   </div>
                    
            </label>
            <label className="form-control w-full ">
                    <div className="label text-gray-200">
                        <span className="label-text">Product Image URL</span>
                        
                    </div>
                    <input onChange={(e)=>handel_change_input(e)} value={product.img} type="text" name="img" placeholder="Image URL" className="input input-bordered w-full " />
                    
            </label>
            <label className="form-control w-full ">
                    <div className="label text-gray-200">
                        <span className="label-text">Product Catagory</span>
                        
                    </div>
                    <select onChange={(e)=>handel_change_input(e)} value={product.catagory} name="catagory" className="select select-bordered w-full text-gray-500">
                                <option disabled selected>type?</option>
                                <option value="Latte">Latte</option>
                                <option value="Black & white">Black & white</option>
                                <option value="Cold Coffee">Cold Coffee</option>
                                <option value="Robusta">Robusta</option>
                                <option value="Arabica">Arabica</option>
                                </select>
                    
            </label>
                         <label className="form-control w-full col-span-2">
                            <div className="label text-gray-200">
                                <span className="label-text">details</span>

                            </div>
                            <textarea onChange={(e)=>handel_change_input(e)} value={product.details} name="details" className="textarea textarea-bordered h-36 w-full" placeholder="Bio"></textarea>
                            
                            </label>
                            <div>
                                <input className="btn btn-primary mx-auto block" type="submit" value="add product" />
                            </div>
                                <div className=" gap-6 max-w-sm flex text-gray-200">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Exclusive</span> 
                                    <input onClick={()=>checked(true)} value={product.exclusive} type="radio" name="exclusive" className="radio checked:bg-blue-500"  checked={product.exclusive}/>
                                </label>
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-2">Regular</span> 
                                    <input onClick={()=>checked(false)} value={product.exclusive} type="radio" name="exclusive" className="radio checked:bg-red-500" checked={!product.exclusive} />
                                </label>
                                </div>
                           
            </form>
        </div>
    );
};

export default AddProduct;