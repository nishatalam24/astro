import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"

import CountryCode from "../../../data/countrycode.json"

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm()

  const submitContactForm = async (data) => {
    console.log("Form Data - ", data)

    try {
      setLoading(true)
    //   const res = await apiConnector(
    //     "POST",
    //     contactusEndpoint.CONTACT_US_API,
    //     data
    //   )
      // console.log("Email Res - ", res)
      setLoading(false)
    } catch (error) {
      console.log("ERROR MESSAGE - ", error.message)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        name: "",
        phoneNo: "",
      })
    }
  }, [reset, isSubmitSuccessful])

  return (
    <form
      className="flex flex-col gap-7 bg"
      onSubmit={handleSubmit(submitContactForm)}
    >
<div className="flex flex-col gap-2">
<input
  type="text"
  name="name"
  id="name"
  placeholder="Enter Name"
  className={`form-style border border-[#94A2B8]  focus:border-orange-500 focus:outline-none p-[5px] rounded-lg`}
  {...register("name", { required: true })}
/>
          {errors.name && (
            <span className="-mt-1 text-[12px] text-yellow-100">
              Please enter your name.
            </span>
          )}
      </div>

      <div className="flex flex-col gap-2">
       
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email address"
          className={`form-style border border-[#94A2B8]  focus:border-orange-500 focus:outline-none p-[5px] rounded-lg`}
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            Please enter your Email address.
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
       
        <div className="flex gap-5">
          <div className="flex w-[81px] flex-col gap-2">
            <select
              type="text"
              name="countrycode"
              id="countrycode"
              placeholder="Enter first name"
              className={`form-style border border-[#94A2B8]  focus:border-orange-500 focus:outline-none p-[5px] rounded-lg`}
              {...register("countrycode", { required: true })}
            >
              {CountryCode.map((ele, i) => {
                return (
                  <option key={i} value={ele.code}>
                    {ele.code} 
                  </option>
                )
              })}
            </select>
          </div>

          
          <div className="flex w-[calc(100%-90px)] flex-col gap-2">
            <input
              type="number"
              name="phonenumber"
              id="phonenumber"
              placeholder="12345 67890"
              className={`form-style border border-[#94A2B8]  focus:border-orange-500 focus:outline-none p-[5px] rounded-lg`}
              {...register("phoneNo", {
                required: {
                  value: true,
                  message: "Please enter your Phone Number.",
                },
                maxLength: { value: 12, message: "Invalid Phone Number" },
                minLength: { value: 10, message: "Invalid Phone Number" },
              })}
            />
          </div>
        </div>
        {errors.phoneNo && (
          <span className="-mt-1 text-[12px] text-yellow-100">
            {errors.phoneNo.message}
          </span>
        )}
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`rounded-md bg-yellow-50 px-6 py-3 text-center text-[13px] font-bold text-black shadow-[2px_2px_0px_0px_rgba(255,255,255,0.18)] 
         ${
           !loading &&
           "transition-all duration-200 hover:scale-95 hover:shadow-none"
         }  disabled:bg-richblack-500 sm:text-[16px] `}
      >
       Submit
      </button>
    </form>
  )
}

export default ContactUsForm