import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Tittle from './Tittle';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const {products, search, showSearch} = useContext(ShopContext);
    const [latestProduct,setLatestProduct] = useState([]);

    useEffect(()=>{
        let filtered = products;

        if (showSearch && search) {
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(search.toLowerCase())
            );
        }
        setLatestProduct(filtered.slice(0,10));
    },[products, search, showSearch]);
    
  return (
    <div className='my-8'>
        <div className='text-center py-8 text-3xl'>
            <Tittle text1={'LATEST'} text2={'COLLECTIONS'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus autem placeat veritatis quasi accusantium dignissimos!</p>
        </div>

        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-col-5 gap-4 gap-y-6 z-[90] mt-4'>
            {
                latestProduct.map((item,index)=>(
                    <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
                ))
            }
        </div>
    </div>
  )
}

export default LatestCollection;