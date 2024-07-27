import React, { useState } from 'react'
import { IoIosArrowUp ,IoIosArrowDown} from "react-icons/io";

const Sidebar = () => {
  const [toggledElements, setToggledElements] = useState([]);

  const togglesetter = (index) => {
    // Check if the element at the given index is already toggled
    if (toggledElements.includes(index)) {
      // If already toggled, remove it from the toggledElements array
      setToggledElements(toggledElements.filter((el) => el !== index));
    } else {
      // If not toggled, add it to the toggledElements array
      setToggledElements([...toggledElements, index]);
    }
  };

  const sidebar_elements=[
    {
      price: {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      carat: {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      Speciality: {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      Colour: {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      Shape: {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
     "Cutting Style": {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      Treatment: {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      "Zodiac Sign": {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      Rarity: {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      Rarity: {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      Clarity: {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      Certifications: {
      prices:[500,1000, 1500,2000,2500]
      }
    },
    {
      Discount: {
      prices:[500,1000, 1500,2000,2500]
      }
    },

  ]
  return (
    <div className='py-[20px] px-[30px] border-[0.5px] border-[#CBD5E1] min-w-[288px] bg-[#F8FAFC] flex flex-col gap-[24px]'>
<h5 className='font-[700] text-[18px] text-[#1E293B]'>Filter By</h5>

<div className=''>
      <div>
        {sidebar_elements.map((element, index) => (
          <div key={index}>
            <div className='flex justify-between items-center  py-[12px] border-b'>
              <h4 className='font-[600] text-[#334155] capitalize '>{Object.keys(element)[0]}</h4>
              {/* Toggle button */}
              {toggledElements.includes(index) ? (
                <IoIosArrowUp
                  onClick={() => togglesetter(index)}
                  className='h-[20px] w-[20px] text-[#0F172A] font-bold'
                />
              ) : (
                <IoIosArrowDown
                  onClick={() => togglesetter(index)}
                  className='h-[20px] w-[20px] text-[#0F172A] font-bold'
                />
              )}
            </div>

            <div>
            <div className=' '>
  {element.price && toggledElements.includes(index) && (
    <div className='flex flex-col gap-[16px]' key={`${index}-price`}>
      {/* Sort prices in ascending order */}
      {element.price.prices.sort((a, b) => a - b).map((price, priceIndex) => (
        <div key={priceIndex} className='flex gap-[8px] items-center text-[14px] font-[500] text-[#475569]'>

<input type="checkbox" class="h-6 w-6 rounded-md bg-orange-500 text-orange-600 focus:ring-2 focus:ring-orange-400 focus:ring-opacity-50"/>

          <p>₹ {price}</p>
          {(priceIndex < element.price.prices.length - 1 )?(<p>-</p>):(<p>{'<'}</p>)

          }

          {/* Display the next price if available */}
          {priceIndex < element.price.prices.length - 1 && (
            <div>
            <p>₹ {element.price.prices[priceIndex + 1]}</p>
            </div>
          )}

        </div>
      ))}
    </div>
  )}
</div>


<div className=''>


              {element.Speciality && toggledElements.includes(index) && (
                <div className='' key={`${index}-Speciality`}>
                  {element.Speciality.prices.map((price, priceIndex) => (
                    <p key={priceIndex}>{price}</p>
                  ))}
                </div>
              )}

</div>


            </div>
          </div>
        ))}
      </div>
    </div>


    </div>
  )
}

export default Sidebar