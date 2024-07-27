import React from 'react';

const Categories_button = ({ text, setcategories, categories }) => {
  function categorySetter() {
    // console.log(text);
    setcategories(text);
  }

  return (
    <div>
      {categories == text ? (
        <button
          className='py-[6px] px-[12px]  rounded-[8px] bg-[#2CB5BC] text-white border border-[#CBD5E1] w-[183px] h-[36px]'
          onClick={categorySetter}
        >
          {text}
        </button>
      ) : (
        <button
          className='py-[6px] px-[12px] bg-white rounded-[8px] text-black border border-[#CBD5E1] w-[183px] h-[36px]'
          onClick={categorySetter}
        >
          {text}
        </button>
      )}
    </div>
  );
};

export default Categories_button;
