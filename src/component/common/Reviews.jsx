import React from 'react'
import { Carousel, Button } from "antd";

const custom_reviews = [
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "4",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "5",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "4",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "5",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "5",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      star: "5",
      user_image:
        "https://s3-alpha-sig.figma.com/img/45ec/6ec5/d6d9fcc919205174ccce6f7da4052b83?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSqV8WoJl5MlFnq9vE3AyMZ3OWaeaOo6LsE12NE-k3SdQKOnCwIw5ANDjHk6mXJK7LNR8hSaPVSIPl6jZpYWOcDksg-cou34XndfYkvufTlFn9IzUYgo9oXNnx7wpuUYUBFrdBc2qZ52LAOxNi-KDKTGzUBetSgaV-n72gO5C24-qVUGs7AsGHa5l7hsxuUQsIDCL0YuP1MYhewL3hKhyRJe1FKnxeF11I-yS-yupuaHRjsUsBzwg8YvpwRXazEbXCwSPXxcZvXswZzmrMvzO~EybKUk~eSUGTn7mbASXYHe~qZsRGORA-qo-f9xkIZW-jFPgSImI9E0-bZJi485CA__",
      username: "Riya Kathuria",
      duration: "1 Month ago",
    },
  ];


const Reviews = () => {
  return (
    <div className="flex flex-col">
      <Carousel
        className="pb-[54px] carousel_categories"
        slidesToShow={4}
        autoplay
        autoplaySpeed={2000}
        responsive={[
          {
            breakpoint: 1345,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 1162,
            settings: {
              slidesToShow: 3,
            },
          },
          {
            breakpoint: 864,
            settings: {
              slidesToShow: 2,
            },
          },
          {
            breakpoint: 598,
            settings: {
              slidesToShow: 1,
            },
          },
        ]}
      >
        {custom_reviews.map((data, index) => (
          <div className="">
            <div
              className="p-[20px] w-[298px] h-[286px] bg-[#E5F1FF] flex flex-col gap-[24px]  rounded-[10px]"
              key={index}
            >
              <div className="flex justify-between">
                <svg
                  width="30"
                  height="23"
                  viewBox="0 0 30 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.63833 20.8683C0.921667 19.045 0 17 0 13.685C0 7.85166 4.095 2.62333 10.05 0.0383301L11.5383 2.335C5.98 5.34166 4.89333 9.24333 4.46 11.7033C5.355 11.24 6.52667 11.0783 7.675 11.185C10.6817 11.4633 13.0517 13.9317 13.0517 17C13.0517 18.5471 12.4371 20.0308 11.3431 21.1248C10.2492 22.2188 8.76543 22.8333 7.21833 22.8333C6.36276 22.8259 5.51723 22.6483 4.73094 22.3109C3.94465 21.9736 3.23331 21.4832 2.63833 20.8683ZM19.305 20.8683C17.5883 19.045 16.6667 17 16.6667 13.685C16.6667 7.85166 20.7617 2.62333 26.7167 0.0383301L28.205 2.335C22.6467 5.34166 21.56 9.24333 21.1267 11.7033C22.0217 11.24 23.1933 11.0783 24.3417 11.185C27.3483 11.4633 29.7183 13.9317 29.7183 17C29.7183 18.5471 29.1038 20.0308 28.0098 21.1248C26.9158 22.2188 25.4321 22.8333 23.885 22.8333C23.0294 22.8259 22.1839 22.6483 21.3976 22.3109C20.6113 21.9736 19.9 21.4832 19.305 20.8683Z"
                    fill="#475569"
                  />
                </svg>
                <div>
                  <svg
                    width="120"
                    height="24"
                    viewBox="0 0 120 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.0489 2.92705C11.3483 2.00574 12.6517 2.00574 12.9511 2.92705L14.4697 7.60081C14.6035 8.01284 14.9875 8.2918 15.4207 8.2918H20.335C21.3037 8.2918 21.7065 9.53141 20.9228 10.1008L16.947 12.9894C16.5966 13.244 16.4499 13.6954 16.5838 14.1074L18.1024 18.7812C18.4017 19.7025 17.3472 20.4686 16.5635 19.8992L12.5878 17.0106C12.2373 16.756 11.7627 16.756 11.4122 17.0106L7.43648 19.8992C6.65276 20.4686 5.59828 19.7025 5.89763 18.7812L7.41623 14.1074C7.55011 13.6954 7.40345 13.244 7.05296 12.9894L3.07722 10.1008C2.29351 9.53141 2.69628 8.2918 3.66501 8.2918H8.57929C9.01252 8.2918 9.39647 8.01284 9.53035 7.60081L11.0489 2.92705Z"
                      fill="#F5C544"
                    />
                    <path
                      d="M35.0489 2.92705C35.3483 2.00574 36.6517 2.00574 36.9511 2.92705L38.4697 7.60081C38.6035 8.01284 38.9875 8.2918 39.4207 8.2918H44.335C45.3037 8.2918 45.7065 9.53141 44.9228 10.1008L40.947 12.9894C40.5966 13.244 40.4499 13.6954 40.5838 14.1074L42.1024 18.7812C42.4017 19.7025 41.3472 20.4686 40.5635 19.8992L36.5878 17.0106C36.2373 16.756 35.7627 16.756 35.4122 17.0106L31.4365 19.8992C30.6528 20.4686 29.5983 19.7025 29.8976 18.7812L31.4162 14.1074C31.5501 13.6954 31.4034 13.244 31.053 12.9894L27.0772 10.1008C26.2935 9.53141 26.6963 8.2918 27.665 8.2918H32.5793C33.0125 8.2918 33.3965 8.01284 33.5303 7.60081L35.0489 2.92705Z"
                      fill="#F5C544"
                    />
                    <path
                      d="M59.0489 2.92705C59.3483 2.00574 60.6517 2.00574 60.9511 2.92705L62.4697 7.60081C62.6035 8.01284 62.9875 8.2918 63.4207 8.2918H68.335C69.3037 8.2918 69.7065 9.53141 68.9228 10.1008L64.947 12.9894C64.5966 13.244 64.4499 13.6954 64.5838 14.1074L66.1024 18.7812C66.4017 19.7025 65.3472 20.4686 64.5635 19.8992L60.5878 17.0106C60.2373 16.756 59.7627 16.756 59.4122 17.0106L55.4365 19.8992C54.6528 20.4686 53.5983 19.7025 53.8976 18.7812L55.4162 14.1074C55.5501 13.6954 55.4034 13.244 55.053 12.9894L51.0772 10.1008C50.2935 9.53141 50.6963 8.2918 51.665 8.2918H56.5793C57.0125 8.2918 57.3965 8.01284 57.5303 7.60081L59.0489 2.92705Z"
                      fill="#F5C544"
                    />
                    <path
                      d="M83.0489 2.92705C83.3483 2.00574 84.6517 2.00574 84.9511 2.92705L86.4697 7.60081C86.6035 8.01284 86.9875 8.2918 87.4207 8.2918H92.335C93.3037 8.2918 93.7065 9.53141 92.9228 10.1008L88.947 12.9894C88.5966 13.244 88.4499 13.6954 88.5838 14.1074L90.1024 18.7812C90.4017 19.7025 89.3472 20.4686 88.5635 19.8992L84.5878 17.0106C84.2373 16.756 83.7627 16.756 83.4122 17.0106L79.4365 19.8992C78.6528 20.4686 77.5983 19.7025 77.8976 18.7812L79.4162 14.1074C79.5501 13.6954 79.4034 13.244 79.053 12.9894L75.0772 10.1008C74.2935 9.53141 74.6963 8.2918 75.665 8.2918H80.5793C81.0125 8.2918 81.3965 8.01284 81.5303 7.60081L83.0489 2.92705Z"
                      fill="#F5C544"
                    />
                    <path
                      d="M107.049 2.92705C107.348 2.00574 108.652 2.00574 108.951 2.92705L110.47 7.60081C110.604 8.01284 110.987 8.2918 111.421 8.2918H116.335C117.304 8.2918 117.706 9.53141 116.923 10.1008L112.947 12.9894C112.597 13.244 112.45 13.6954 112.584 14.1074L114.102 18.7812C114.402 19.7025 113.347 20.4686 112.564 19.8992L108.588 17.0106C108.237 16.756 107.763 16.756 107.412 17.0106L103.436 19.8992C102.653 20.4686 101.598 19.7025 101.898 18.7812L103.416 14.1074C103.55 13.6954 103.403 13.244 103.053 12.9894L99.0772 10.1008C98.2935 9.53141 98.6963 8.2918 99.665 8.2918H104.579C105.013 8.2918 105.396 8.01284 105.53 7.60081L107.049 2.92705Z"
                      fill="#F5C544"
                    />
                  </svg>
                </div>
              </div>

              <p className="text-[18px] leading-[28px]">{data.comment}</p>

              <div className="flex gap-[8px]">
                <div
                  className="w-[36px] h-[36px] rounded-full bg-cover"
                  style={{ backgroundImage: `url(${data.user_image})` }}
                ></div>

                <div className="flex flex-col">
                  <p className="capitalize text-[14px] font-bold  text-[#0F172A] 	">
                    {data.username}
                  </p>
                  <p className="capitalize text-[12px] text-[#475569] tetx-[12px] ">
                    {data.duration}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Reviews