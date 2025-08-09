import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import {Link} from 'react-router-dom'


const ProductItem = ({name,id,image,price}) => {
    const {currency} = useContext(ShopContext);
  return (
   <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
    <div className="overflow-hidden w-[230px] h-[230px]">
        <img className="hover:scale-110 transition ease-in-out w-full h-full" src={image[0]} alt="" />
    </div>
    <p className="pt-3 pb-1 text-sm">{name}</p>
    <p className="text-sm font-medium">{currency} {price}</p>
   </Link>
  )
}

export default ProductItem