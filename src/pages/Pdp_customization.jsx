import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import Pdp_customization_catlog from "../component/core/Pdp_customization/Pdp_customization_catlog";
import { MdDiamond } from "react-icons/md";
import { GiDiamondRing, GiGemPendant } from "react-icons/gi";
import { FaRing } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import img2 from "../assets/logo/img2.png";
import Reviews from "../component/common/Reviews";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import Faq_comp from "../component/common/Faq_comp";
import Why_astro from "../component/core/Pdp_customization/Why_astro";
import Jewellery from '../component/core/Pdp_customization/Jewellery';
// import Jewellery from "../component/core/Pdp_customization/Jewellery";
const Pdp_customization = () => {
  const [custToggle, setcustToggle] = useState(false);
  const [jewellerycatlog, setjewellerycatlog] = useState(null);

 

  function custTogglesetter() {
    custToggle ? setcustToggle(false) : setcustToggle(true);
  }

  const navigator_data = [
    "Homepage",
    "Gemstone",
    "Sapphires",
    "Blue Sapphires",
  ];

  const catlog_data = [
    "https://s3-alpha-sig.figma.com/img/a9e0/e9a1/6e5fcd6ca936dd48b4d61afec9321266?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qj1H7Hvb9dwqgJzipNsG36zQ9Q909PkktZwz2cfOpaEBZooQ3LrI5bVof0cke2OAmlO4q1TIqErNfrJv1UAhbUshGCzoOV86jbxXT1w5vPTj7lpcly4GTTtUa7ZjKObVQysLjzLTl2I3KGSZ7bQF~TaJrOFZmfMrRWQTdjVr3vML0mOr6dYI7fByNc9YjJNP9N25WUVN8s4KRZWAjOZsQwtxO0Sgzeic4re3TfSf9~o4Cwp5G9BTqOdXX1t39c9nGv-KMF5I0JEwuykqdjqYwXktCSdYU8wYEl3PvfXwVt3T-73grcPIndJ6P0DXyhb7OkxSKLSNSYA~BWGv2Z2a-Q__",
    "https://s3-alpha-sig.figma.com/img/0861/1f97/b69d3608e1fbed81246350bfb70111a2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PNLMCJfwmtrNXZavvC7Ex54~UpoJkBDSU14RFGucQe3a-L9QXWKMK8yu8xj8zQ1HKIwB33hiI0BZxj2NtV5~-Vle8f~0LcUsgv42oq0Onp0OpO3fkq-0Oti3KOa6CZXutdzPiik5l8VKOvF--aQKOJWY84Kq1y8UJ5DvsyhtH4t8Lk0nOOe94XtMbpSsbrz~vACnsoQxbURv5L5v~ZzXXp9dMS0DK1QCKqDHaa~J0tIZ9aMn3EHWmzaQfQCQWAgZvgY32xsdJKxGKaUxdBOq2y~Qt6K16G7Ra6CcUmA6u9iQ-PWZzSnxfykQVidarkvRu2~7X7Zq9wDncNj7cQlJgA__",
    "https://s3-alpha-sig.figma.com/img/2502/378f/8aaeabc4838c48919e2876f7d6eaa817?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DA9WG9wf0BdQcmWT2STLJ2Nxu~OVed7jzACNdCr44j-t3ALjaL-IzLcQZnnSJOYSEkWHPswwXxfJgj~p8w5JCOxGDc9-XqJ61zX8aVL~Hva2jeFCNur~Jsrw5376-o-yUosEJs1zjk3MUYAH0mf2VtprHZ2Ax0MYUybDX2v2eHJDYfqd4CveHZRPKT9gkA9~lv9vsDICxUUy5eciiEOK-XhgGXn55KvL0i0i~KDj6i~nMqtLDmr4~Z3Tg69BhiVZ3xHqKm3yAeYeFiDrWNSq2em7SYihmb-LbCaVFK6-VSzQTTEjRNDvFUv2XNOYpP0YVXiIIW8OnAqg0jtIsesUYg__",
    "https://s3-alpha-sig.figma.com/img/16ba/79f5/bb2e8b8622e0294203331401ba6de2ba?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eK2xjQKgo-KVWtdpKPb3MwbB92lhBHaXkWXCIMf1j3tYg~sRwG7IoxBqLLGFMlm-WZHQVak-IAvrBN3W4~LJm2iVV8njz2TLpgH4fLtoLt23Q0k20KGdL5NvHPsoUHr8JEj3FNyc~xbhVFnorHw9ejJcPyDznBBtkbfq5VPZh8GVWgKkXujEzFL0gi~ESPyLpbMnmfnGl1kp3So3bGk42iGZG0eBsuukmHbBW7fYUr0NH4F1Pm3neT2mu7F85L4qyVIrmRSVBZgJKYnyaZA8apMsYDJo-BJWKFeZ8FPv4jihEJE4sy4gLs9m22eewTP1s81~PFfzqDG6VxQeWgeMDg__",
    "https://s3-alpha-sig.figma.com/img/7bdf/1e0c/c4609368f6515b5a26527b57c60fd96f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ePyVEcF6Dk~vt-F-hzvS2OFLhvm4XmUSdETWkOMdTDJC7ArBrqoTDPkTgV~mq6EdGR-e4~l7kzCbweNnuwotDv4~LjGkrmS-PJJMSn-Ea93DpFDEKo2qselEiX4IpgAG2CaKsm2XC-q3MiUCreS3fV8CZP9T5XruHR9v~vVel2ZxqVcz3I~ecfhXWCI4-HOrj38ZG9lo2WNXL~tyuiqfdcb8j2OOkZF40qrRBBp6H00-sZoDM5j8N3sgOiamE8oZPArpH2~wysv9uKEdYw377eM2oUGKYkZ5qFJEvGnV2O1uicq-l7ISCvNp8y~odfictc-hJpPCLvJqbcTH1cQ6JQ__",
  ];

  const [catlog, setcatlog] = useState(catlog_data[0]);

  function catlogsetter(data) {
    setcatlog(data);
    console.log(data);
  }

  const IconMap = {
    MdDiamond: MdDiamond,
    GiDiamondRing: GiDiamondRing,
    GiGemPendant: GiGemPendant,
    FaRing: FaRing,
  };

  const jewellery_selector = [
    { icon: "MdDiamond", title: "Loose Gemstone" },
    { icon: "GiDiamondRing", title: "Ring" },
    { icon: "GiGemPendant", title: "Pendant" },
    { icon: "FaRing", title: "Bracelet" },
  ];

  const Specifications = [
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
    {
      title: "Gemstone",
      specs: "Blue Sapphire",
    },
  ];

  const jewellery_data =[
    "https://s3-alpha-sig.figma.com/img/2c6f/9f2b/ca9b9e6042f0837686d885a69d7189b8?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqS8GxsLAQrzslNLktokXWUl~TNBGaQybfvkpmqe9Hp1gdToAaVe-OrCrt35zumK6u1mbT2-rU2trYZ4Lrppuo839-HSLGjAqDgTimunqwdsPHpWuSv2gvgVMWhn~4T~Dl3coe34AtZfWxqfd7DDYR3GnxK~Faur6csnIH61TQsMDC9bl9L3tgWmVl7jju~bSJ24Zw1VF60~K7pzBMvS3W3vRTDr3MqOXWj3woj88WHtkcEd7DkHI7NJVFXzqAJyM-QBSy~86ntiPNOj-TSiHBMtP-wiBP9gbwWIZ0vVqBzJErxubW-DrJuU5TZ~~fcs-SWKvVQT00JT-2qMNFEZIw__",
    "https://s3-alpha-sig.figma.com/img/16ba/79f5/bb2e8b8622e0294203331401ba6de2ba?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eK2xjQKgo-KVWtdpKPb3MwbB92lhBHaXkWXCIMf1j3tYg~sRwG7IoxBqLLGFMlm-WZHQVak-IAvrBN3W4~LJm2iVV8njz2TLpgH4fLtoLt23Q0k20KGdL5NvHPsoUHr8JEj3FNyc~xbhVFnorHw9ejJcPyDznBBtkbfq5VPZh8GVWgKkXujEzFL0gi~ESPyLpbMnmfnGl1kp3So3bGk42iGZG0eBsuukmHbBW7fYUr0NH4F1Pm3neT2mu7F85L4qyVIrmRSVBZgJKYnyaZA8apMsYDJo-BJWKFeZ8FPv4jihEJE4sy4gLs9m22eewTP1s81~PFfzqDG6VxQeWgeMDg__",
    "https://s3-alpha-sig.figma.com/img/be8d/6639/5af25722441b3c1ecb168c6caff790f3?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZzXQOLjTeyZmsBa7S5aLmqg-JBGQqCxWJMQiNHtrMCbUfaWG5vd35U3hE44d~i3yLdWICtEK4zSBweTG4mA6d72iWAVpL36sIi1YXLY1eueOsIyrBk32cIH6UQv9O9t0m7h59-Gyi3s4tyOIwT2nVzTH-Wa8zlrKO-SeZm2uKCdwxY2Cdvrsl4NJlpuyXhjMFlBx5J2OwLoergprPJ90AFcvOAhCKat4mkjQgXEYZ93w~n2kV3HvgVG0NJw47UPVVrxlmqsn~Xwx6M3s5QL~nG1sgs2l9Z3qYJ-ygbREbZnErAtmhF4A0kgh4tHKH04pM9TYBCPODHtjEeDwCeQbyg__",
    "https://s3-alpha-sig.figma.com/img/7bdf/1e0c/c4609368f6515b5a26527b57c60fd96f?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ePyVEcF6Dk~vt-F-hzvS2OFLhvm4XmUSdETWkOMdTDJC7ArBrqoTDPkTgV~mq6EdGR-e4~l7kzCbweNnuwotDv4~LjGkrmS-PJJMSn-Ea93DpFDEKo2qselEiX4IpgAG2CaKsm2XC-q3MiUCreS3fV8CZP9T5XruHR9v~vVel2ZxqVcz3I~ecfhXWCI4-HOrj38ZG9lo2WNXL~tyuiqfdcb8j2OOkZF40qrRBBp6H00-sZoDM5j8N3sgOiamE8oZPArpH2~wysv9uKEdYw377eM2oUGKYkZ5qFJEvGnV2O1uicq-l7ISCvNp8y~odfictc-hJpPCLvJqbcTH1cQ6JQ__",
    "https://s3-alpha-sig.figma.com/img/2c6f/9f2b/ca9b9e6042f0837686d885a69d7189b8?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqS8GxsLAQrzslNLktokXWUl~TNBGaQybfvkpmqe9Hp1gdToAaVe-OrCrt35zumK6u1mbT2-rU2trYZ4Lrppuo839-HSLGjAqDgTimunqwdsPHpWuSv2gvgVMWhn~4T~Dl3coe34AtZfWxqfd7DDYR3GnxK~Faur6csnIH61TQsMDC9bl9L3tgWmVl7jju~bSJ24Zw1VF60~K7pzBMvS3W3vRTDr3MqOXWj3woj88WHtkcEd7DkHI7NJVFXzqAJyM-QBSy~86ntiPNOj-TSiHBMtP-wiBP9gbwWIZ0vVqBzJErxubW-DrJuU5TZ~~fcs-SWKvVQT00JT-2qMNFEZIw__",
    "https://s3-alpha-sig.figma.com/img/2c6f/9f2b/ca9b9e6042f0837686d885a69d7189b8?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lqS8GxsLAQrzslNLktokXWUl~TNBGaQybfvkpmqe9Hp1gdToAaVe-OrCrt35zumK6u1mbT2-rU2trYZ4Lrppuo839-HSLGjAqDgTimunqwdsPHpWuSv2gvgVMWhn~4T~Dl3coe34AtZfWxqfd7DDYR3GnxK~Faur6csnIH61TQsMDC9bl9L3tgWmVl7jju~bSJ24Zw1VF60~K7pzBMvS3W3vRTDr3MqOXWj3woj88WHtkcEd7DkHI7NJVFXzqAJyM-QBSy~86ntiPNOj-TSiHBMtP-wiBP9gbwWIZ0vVqBzJErxubW-DrJuU5TZ~~fcs-SWKvVQT00JT-2qMNFEZIw__",
    ]
    
    
    const handleJewelleryClick = (index) => {
      setSelectedJewelleryIndex(index);
      // Do something with the selected jewellery data, e.g., open a modal
    };
  
    const [selectedJewelleryIndex, setSelectedJewelleryIndex] = useState(null);
  return (
    <div className="w-11/12 flex flex-col justify-center  gap-[80px]">
      <div className="py-[10px]  flex gap-[10px]">
        {navigator_data.map((data, index) => (
          <div
            key={index}
            className="flex gap-[2px] items-center text-[#64748B]"
          >
            <p className=" text-[14px] font-[400]">{data} </p>
            <MdKeyboardArrowRight className="h-[20px] w-[20px] " />
          </div>
        ))}
      </div>

      <div className="flex  gap-[94px]">

<div className="flex flex-col items-center gap-[200px]">

        <div className="flex gap-[32px]">

          <div className="flex flex-col gap-[8px]">
            {catlog_data.map((data, index) => (
              <div key={index}>
                <Pdp_customization_catlog
                  catlog_data={data}
                  index={index}
                  catlogsetter={catlogsetter}
                  catlog={catlog}
                  setcatlog={setcatlog}
                />
              </div>
            ))}
          </div>

          <div
            className="w-[500px] h-[432px] border-[1px] border-[#F1F5F9] rounded-[20px] bg-cover bg-center"
            style={{ backgroundImage: `url(${catlog})` }}
          ></div>

        </div>

<div className={`h-[400px] w-[400px] bg-center bg-cover  ${custToggle ? "hidden" : "block"} ` } style={{ backgroundImage: `url(${jewellerycatlog})` }} >

</div>
        </div>


        <div className="flex flex-col gap-[48px] ">
          <div className="flex flex-col gap-[16px]">
            <p className="font-[600] text-[24px] font-serif text-[#1E293B]">
              Blue Sapphire (Heated) - 0.16 Carat
            </p>

            <div className="flex justify-between">
              <p className="font-[500] text-[22px] text-[#0F172A] ">Rs. 4000</p>
              <p className="border border-[#DC5B22] py-[5px] px-[15px]">
                1 Left
              </p>
            </div>

            <p className="font-[300] text-[#64748B] text-[16px]">
              SKU: GP68591 | Origin: Sri Lanka (Ceylon)
            </p>
            <p className="font-[500] text-[18px] text-[#334155]">
              Helath and wellness | <span>Prosperity</span>
            </p>
          </div>

          <div className={`flex flex-col gap-[px] `}>
            <div>
              <button
                className={`py-[10px] px-[40px] rounded-l-[8px]  w-[306.5px] ${
                  custToggle ? "bg-[#F1F5F9]" : "bg-[#B7D9FF]"
                }`}
                onClick={() => setcustToggle(false)}
              >
                Customisation
              </button>
              <button
                className={`py-[10px] px-[40px]  rounded-r-[8px]  w-[306.5px] ${
                  custToggle ? "bg-[#B7D9FF]" : "bg-[#F1F5F9]"
                }`}
                onClick={() => setcustToggle(true)}
              >
                Specifications
              </button>
            </div>
            <div
              className={`flex flex-col gap-[32px] pt-[32px] ${
                custToggle ? "hidden" : "block"
              }`}
            >
              <div className="flex flex-col gap-[24px]">
                <div className="flex justify-between">
                  <p className="font-[500]">Certification</p>
                  <select class="select_pdp block w-[375px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
                <div className="flex justify-between">
                  <p className="font-[500]">Pooja / Energization</p>
                  <select class="select_pdp block w-[375px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    <option className="">Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-[16px]">
                <h1 className="font-[500]  ">
                  Select for Ring / Pendant / Bracelet
                </h1>

                <div className="flex gap-[16px]">
                  {jewellery_selector.map((iconName, index) => {
                    const IconComponent = IconMap[iconName.icon];
                    return (
                      <div className="w-[142px] h-[108px] rounded-[10px] border flex flex-col items-center justify-center">
                        <IconComponent
                          key={index}
                          className="text-[orange] h-[48px] w-[48px] "
                        />
                        <p className="font-[300] text-[16px] text-[orange]">
                          {iconName.title}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-[32px]">
                  <div className="flex justify-between">
                  <h1 className="font-[500]  ">
                  Metal
                  </h1>

                  <select class="select_pdp block w-[141px] px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </select>

                  </div>

<div className="grid grid-cols-3 gap-[16px]">

{jewellery_data.map((data, index) => (
        <div key={index}>
          <Jewellery
            data={data}
            isSelected={index === selectedJewelleryIndex}
            setSelectedJewelleryIndex={setSelectedJewelleryIndex}
            onClick={() => handleJewelleryClick(index)}
            setjewellerycatlog={setjewellerycatlog}
          />
        </div>
      ))}

</div>

                </div>
                <button className="bg-[#FE7235] py-[16px] px-[50px] flex items-center justify-center gap-[8px] text-[white] rounded-[8px]">
                  <CiCirclePlus className="h-[20.7px] w-[20.7px] font-extrabold" />{" "}
                  Add to Cart <span className="font-[500]">| Rs. 4000 </span>{" "}
                </button>
              </div>
            </div>

            <div
              className={` pt-[32px] pb-[20px] pl-[20px] grid grid-cols-3 gap-[48px] ${
                custToggle ? "block" : "hidden"
              } border border-t-0 rounded-[10px]`}
            >
              {Specifications.map((data, index) => (
                <div className="" key={index}>
                  <h5 className="font-[600] text-[#0F172A]">{data.title}</h5>
                  <p className="font-300 text-[#475569]">{data.specs}</p>
                </div>
              ))}
            </div>
          </div>
        </div>


      </div>

      <div className="flex flex-col justify-center items-center gap-[24px]">
        <h1 className="font-serif font-semibold text-3xl">
          Why Maharani Astro Ratan
        </h1>

        <Why_astro />
      </div>

      <div className="flex flex-col  gap-[24px]">
        <div className="flex flex-col items-center">
          <h1 className="font-serif font-semibold text-3xl text">
            Customer Reviews
          </h1>
        </div>

        <Reviews />
      </div>

      <div className="w-[92vw] flex flex-col items-center gap-[32px]">
        <h1 className="font-serif font-semibold text-3xl">
          Frequently Asked Questions
        </h1>

        <Faq_comp />
      </div>
    </div>
  );
};

export default Pdp_customization;
