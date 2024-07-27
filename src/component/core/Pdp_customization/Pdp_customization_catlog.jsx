import React, { useState } from 'react'

const Pdp_customization_catlog = ({ catlog_data,index,catlogsetter,catlog}) => {

    function catlogsetter2(){
        catlogsetter(catlog_data)
    }


  return (

    <div className={`w-[80px] h-[80px] bg-cover bg-center rounded-[10px] border-[2px] `} onClick={catlogsetter2}  style={{backgroundImage:`url(${catlog_data})`}}>
        </div>
  )
}

export default Pdp_customization_catlog