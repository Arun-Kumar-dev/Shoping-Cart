import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import {Link} from 'react-router-dom'


const ProductItem = ({name,id,image,price}) => {
    const {currency} = useContext(ShopContext);
  return (
   <Link className="text-gray-700 cursor-pointer block p-2 transition-all duratin-300 bg-white rounded-lg shadow-sm hover:shadow-md" to={`/product/${id}`}>
    <div className="overflow-hidden w-full aspect-square rounded-sm">
        <img className="hover:scale-110 object-cover transition-transform ease-in-out w-full h-full duration-300" src={image[0]} alt="" />
    </div>
    <p className="pt-3 pb-1 text-sm">{name}</p>
    <p className="text-sm font-medium">{currency} {price}</p>
   </Link>
  )
}

export default ProductItem