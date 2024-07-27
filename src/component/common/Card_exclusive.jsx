import React from 'react'
import { Link } from 'react-router-dom';

const Card_exclusive = ({title,star_sign,para,image}) => {
  return (
    <div className='w-[313px] h-[329px] border rounded-[10px] hover:shadow-2xl	hover:border hover:border-blue-300 overflow-hidden		'>

<Link to="/product-listing">
      <div className='h-[60%] overflow-hidden bg-cover bg-center' style={{backgroundImage:`url(${image})`}}>
      </div>
    </Link>
        <div className='h-[40%] bg-[#F8FAFC] flex flex-col px-[10px] py-[10px] '>
        <Link to="/product-listing">
<p className='font-bold text-lg '>{title}</p>
<p className='text-base text-[#475569] font-semibold'>{star_sign}</p>
<p className='text-[#475569] font-normal'>{para}</p>
</Link>
        </div>

  
        
        </div>
  )
}

export default Card_exclusive