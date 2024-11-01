import { useContext, useEffect, useState } from "react"
import { ShopContext } from "../context/ShopContext"
import Title from "./Title";
import ProductItem from "./ProductItem";


export default function LatestCollection() {

    const { products} = useContext(ShopContext);
    const [latestProduct, setLatestProducts] = useState([])

    useEffect(() => {
       setLatestProducts(products.slice(0,10))
    },[])

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
       <Title text1={'Última'}  text2={'Colección'}/>
       <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 ">Bienvenida a ℛ𝑜𝓅𝒶 𝒞𝒶𝓈𝓊𝒶𝓁 ℐ𝓈𝒶𝒷𝑒𝓁</p>
      </div>
      
      {/**Rendering Products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {
            latestProduct.map((item, index) => (
                <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
      </div>

    </div>
  )
}