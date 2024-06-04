import { Link, useLoaderData } from "react-router-dom";
import { URL_PATH } from "../../utils/URL";
import { useState } from "react";

const Allproducts = () => {
    const products_data = useLoaderData()?.result || [];
    const [products,setProducts] = useState(products_data)

    const delete_product = async (id) =>{
        try {
            const response = await fetch(`${URL_PATH}/api/product/${id}`,{
                    method:"DELETE",
                    headers:{
                        "content-type": "application/json",

                    },
                })
                const result = await response.json();
                if(result.status){
                    const update_products = products.filter(product => product._id !== id);
                    setProducts(update_products)
                }   
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name |</th>
        <th>Catagory</th>
        <th>Product Price</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        products_data.map((product,index) => {
            const {name,img,catagory,exclusive,price,reguler_price,_id} = product;
           return (<tr key={product._id}>
                <th>
                  <label>
                    {index +1 }
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={img} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{name}</div>
                      <div className="text-sm opacity-50">{catagory}</div>
                    </div>
                  </div>
                </td>
                <td>
                  
                  <br/>
                  {exclusive && <span className="badge badge-ghost badge-sm">exclusive</span>}
                </td>
                <td>
                   <p>offer: {price} $</p>
                   <p>regular: <span >{reguler_price} $</span></p>
                </td>
                <th>
                  <button className="btn btn-ghost btn-xs">
                    <Link to={`/dashboard/product/${_id}/edit`}>edit</Link>
                  </button>
                  <button onClick={()=>delete_product(_id)} className="btn btn-ghost btn-xs">delete</button>
                  <button className="btn btn-ghost btn-xs">
                    <Link to={`/product/${_id}`}>details</Link>
                  </button>
                </th>
              </tr>)
        })}
    
    </tbody>
    {/* foot */}
    
    
  </table>
</div>
        </div>
    );
};

export default Allproducts;