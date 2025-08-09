import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../Context/ShopContext'
import { assets } from '../assets/assets';
import Tittle from '../Components/Tittle';
import ProductItem from '../Components/ProductItem'

export const Collection = () => {
  const {products, search , showSearch} = useContext(ShopContext);

  const [showFilter,setShowFilter] = useState(false);
  const [filterProducts,setFilterProducts] = useState([]);
  const [category,setCatgory] = useState([]);
  const [subCategory,setSubCategory] = useState([]);
  const [sortType, setShortType] = useState('relavent');

  const tooglecategory = (e) =>{
    if(category.includes(e.target.value)){
      setCatgory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setCatgory(prev => [...prev,e.target.value])
    }
  }


  const subtoggleCategory =(e) =>{
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubCategory(prev => [...prev,e.target.value])
    }
  }

   const applyFilter = () =>{
    let productsCopy = products.slice();

    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }
     if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
    }
    setFilterProducts(productsCopy);
   }
      const sortProduct = () =>{
        let fbCopy = filterProducts.slice();
        switch (sortType){
          case 'low-high' :
            setFilterProducts(fbCopy.sort((a,b)=>(a.price - b.price)));
            break;

            case 'high-low' :
              setFilterProducts(fbCopy.sort((a,b)=>(b.price - a.price)));
              break;
            default:
              applyFilter();
              break;  
        }
      }

  useEffect(()=>{
    applyFilter();
  },[category,subCategory,search,showSearch])

  useEffect(()=>{
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row border-t gap-1 sm:gap-12 pt-10'>
      <div className='w-full sm:w-45'>
        <p onClick={()=>setShowFilter(!showFilter)} className= 'text-xl my-2 flex items-center cursor-pointer'>FILTERS
          <img className={`h-5 sm:hidden duration-300 ${showFilter ? 'rotate-0' : 'rotate-270'}`} src={assets.DropDown} alt="" />
        </p>
        <div className={`border border-gray-300 py-3 pl-5 mt-5 ${showFilter ? '' :'hidden'} sm:block`}>
          <p className='mb-3 font-medium text-sm'>CATEGORIES</p>
          <div className='text-gray-600 flex flex-col gap-2 font-light text-sm'>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Men'} onChange={tooglecategory}/>Men
           </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Women'} onChange={tooglecategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Kids'} onChange={tooglecategory}/> Kids
            </p>
          </div>
        </div>
        {/* SUBCATRGORIES */}
        <div className={`border border-gray-300 py-3 my-5 pl-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='font-medium text-sm mb-3'>TYPE</p>
          <div className='text-gray-700 flex flex-col font-light text-sm gap-2'>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Topwear'} onChange={subtoggleCategory}/> Topwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Bottomwear'} onChange={subtoggleCategory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" value={'Winterwear'} onChange={subtoggleCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className=' flex justify-between text-base sm:text-2xl mb-4'>
          <Tittle text1={'ALL'} text2={'COLLECTIONS'}/>
          {/* Product Sort */}
          <select onChange={(e)=>setShortType(e.target.value)} className='border-2 border-gray-300 text-sm mb-4'>
            <option value="relavent">Sort by: Relavent</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 sm:grid-cols-2 gap-4 gap-y-6'>
          {
            filterProducts.map((item,index)=>(
              <ProductItem key={index} name={item.name} id={item.id} image={item.image} price={item.price}/>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Collection