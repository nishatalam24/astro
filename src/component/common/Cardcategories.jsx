import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { Carousel } from 'antd';
import { Link } from 'react-router-dom';

import "../../pages/homepage.css"
const Cardcategories = ({title,star_sign,para,image ,card_data}) => {
    const [wishlist,setwishlist] =useState(false)
    

  

    function wishlishtset(){
        setwishlist(!wishlist)
    }
    const contentStyle = {
        // height: '100%',
        // border:'2px solid red',
        // color: '#fff',
        // lineHeight: '160px',
        // textAlign: 'center',
        // background: '#364d79',
        // margin:"0 10px 0px 10px",
      };
    
    
  
    

  return (
    <div className='w-[232px] h-[326px] border rounded-[10px] overflow-hidden		cursor-pointer'>
      <Link to="/product-listing">
    <div className='h-[60%]'>
  <Carousel className="h-[100%] carousel_categories"  autoplay autoplaySpeed={2000}   >
    {
card_data.map((data,index)=>(
  <div className='' key={index}>

  <div className='bg-cover bg-center h-[195px] overflow-hidden  flex justify-end p-[10px]' style={{ ...contentStyle, color: 'white', backgroundImage: `url(${data.image})` }} >
  {
          wishlist ?(<FaHeart onClick={wishlishtset} className='w-[25px] h-[25px] text-red-600'/> ):( <CiHeart onClick={wishlishtset} className='w-[25px] h-[25px]'/>  )
      }

  </div>

    </div>
))
}
  </Carousel>
  </div>
  </Link>
  {
card_data.map((data,index)=>(
<div className='h-[40%] bg-[#F8FAFC] flex flex-col  px-[10px] py-[3px] gap-1 ' key={index}>

<div className='flex flex-col gap-[4px]'>
<p className='font-medium text-sm '>{data.title}</p>
<p className='text-xs text-[#475569] font-semibold'>  {data.star_sign}</p>
<p className='text-base  font-semibold'> <span>Rs</span> 3000</p>
</div>

<div className='flex justify-between gap-[6px]'>
<Link to="/product-listing">
<button className={`py-[6px] px-[12px] bg-[#FE7235] text-white rounded-lg  text-[14px]`}>Add to Cart</button>
</Link>
<Link to="/pdp-customization">
<button className={`py-[6px] px-[12px] bg-[#E5F1FF] text-black rounded-lg  text-[14px]`}>Customize</button>
</Link>
</div>


</div>
  ))
}


  </div>
  )
}

export default Cardcategories