import React from 'react'
import Button from './Button'

const Herosection = ({bg,text}) => {
  return (
    <div className='w-screen backdrop-blur  bg-cover p-[100px]' style={{ backgroundImage: `url(${bg})` }}>

        <div className='w-3/6 flex flex-col items-start gap-5'>

<p className='text-[#0051AD] font-medium text-6xl font-serif leading-[60px]'>
Adorn Your Elegance with Exquisite Gemstone Jewelry
</p>
<p className='font-semibold leading-7 text-2xl'>Elevate Your Style and Spirit with Handcrafted Brilliance</p>

<Button text={"Buy Now"}/>
</div>





    </div>
  )
}

export default Herosection