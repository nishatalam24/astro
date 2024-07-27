import React from 'react';
// import { FaCircleDot, FaRegCircle } from 'react-icons/fa';
import { FaCircleDot } from "react-icons/fa6";
import { FaRegCircle } from "react-icons/fa";
const Jewellery = ({ data, isSelected, onClick,setjewellerycatlog ,setSelectedJewelleryIndex}) => {
  return (
    <div
  className={`w-[167px] h-[232px] bg-center bg-cover pt-[10px] pl-[10px] hover:border border-[#FF9263] rounded-[20px] hover:shadow-2xl ${isSelected ? "border border-[#FF9263]" : "border-0"} ${isSelected ? "border-[#FF9263]" : ""}`}
  style={{ backgroundImage: `url(${data})` }}
>
      {isSelected ? (
        <FaCircleDot
          className="text-[#FF9263] w-[20px] h-[20px] border-[#64738B] border rounded-full cursor-pointer"
          onClick={() => {onClick(data); setSelectedJewelleryIndex(null); setjewellerycatlog(null) }}
        />
      ) : (
        <FaRegCircle
          className="w-[20px] h-[20px] cursor-pointer"
          onClick={() => {onClick(data); setjewellerycatlog(data)}}
        />
      )}
    </div>
  );
};

export default Jewellery;
