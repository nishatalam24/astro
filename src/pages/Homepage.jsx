import React, { useEffect } from "react";
import bg from "../assets/bgimage/bg-homepage.png";
import Herosection from "../component/common/Herosection";
import Card_exclusive from "../component/common/Card_exclusive";
import Cardcategories from "../component/common/Cardcategories";
import "./homepage.css";
import Form from "../component/core/Homepage/Form";
import { Carousel, Button } from "antd";
import { useState } from "react";
import Categories_button from "../component/common/Categories_button";
import { useRef } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import img1 from "../assets/logo/img1.jpeg";
import banner1 from "../assets/bgimage/banner1.jpeg";
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6";
import Reviews from "../component/common/Reviews";
import Faq_comp from "../component/common/Faq_comp";

const Homepage = () => {
  const [categories, setcategories] = useState("");

  const carouselRef = useRef(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.prev();
    }
  };
  useEffect(() => {
    // Check if the button text is "Best Seller" and set isActive to true initially
    setcategories(categories_btn_data[0]);
  }, []);

  const categories_btn_data = [
    "Best Seller",
    "Birth Sign",
    "Colour",
    "Health & Wellbeing",
    "Rare & Unique",
    "Jewellery",
  ];

  const card_data = [
    {
      id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
      id: "2",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/6e19/c344/32d0900fea5fdad79755be32eafd0e27?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HnG64JY2OH9NCzngTCz119~-5jxVDkdnjw8A3jPw5m5Fxk1oSv5C1Ygbyukegb0hZlerMR9o3QVUGbZ4g1fsH8FM9vf9UHvlOswt5-ZlbpOekzrRAERdfzH6BQuQqD68rWLRxauWVdF3OuGvX4n6P8H-1MOw0LWa2Xz1f5eQb6rGM~4GPWmxFMOqu9B227dt1x9pPT9f9jWHQ7yU-CLwIjxQPxppsgLbPC1lBI4qechyp5bRW98-8CNx0RNuBOSkqqXsDNoLYAztQQN1eG3kaPZj-2qGOCpq2WPlnmZJryWlSKOEr~e8BWL1wGm1K5OMgyvThfZPPEsCYqgqZsbHwA__",
    },
    {
      id: "3",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/9db2/7bea/239dd16583f4abdd0dad5a252d567ad5?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OJWyzI4ln0De-P5lobLA42LWwIS2cijAdMOvNXqDAJe9ugau2n2x7Mt8h162cqzL2sjIj4Ppjh9UQiI4AY5J0Q04Y5dThf12q~ytYJHcc-WLC9gKDrMPwG2lQFxXwie1OccsFygsWEqWKVkemexcAG0NZXBaRWilctvjnsQKK5P-8docdawIkDhBKvITjkNsZvzDsZTMJCImxBNOeJULHqlSD9D9WY9zkqAFcWgKZkD0Ob8SJVFRtZTW5VNELedFL7mA459eVtkB52-olWkDarrRXm2WieUeiQwA0MdQi-lcouwo9fmR2RqiUrL-CD5MAfFSb2e9ZIyYYhvEW7KgTw__",
    },
    {
      id: "4",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/3303/e52c/48807637a6b6e9efd3374c22d5d6e914?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OA02tWrw7L0avW~8YzWW5PU-uAQ7rN-aD29Yl5cPKDcRAxDfVnX3o55k7P1TD4EggtFgvJrFyfKBQ42TUlDb9TUQ1gJ2uweLLyXhtzgc1pJyqLWCzqYWPb6L27~vTvCalWfK9g~aGJJ09plhUuNOrDApb1~jHzW1WBU~5L3YQVexS4Jdo3GCWjFh4UihgredfUAbobLWDlQsi8G05X4Q7-7pwefzxMY2EvGcVuEuWf7Z9YT3qg~4eMyhVxHu5bb5x1VDvyerrO0Wt4SlOpT7xwwY-Guq0h32PZmOKPosjcMuduT6Zqb8iewbpiwyrTMoNGH4OTRaNmMt1~NQYTga8g__",
    },
    {
      id: "5",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/2cc4/24fb/453a5b23114aff5465944f7cf4331cb8?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hEZ13KgW-p5f-9VanX~55e2MIWYjK2K04vmupKb0cwq1KYEhkD5XUjPvxY-kT0JiMNrxnxIpFKFzssBue~nRJiNZzSwHII3VZHT685BbijNg0TMXv4VMq7MNb2t-e-U8PzAlSfBQ6METRyQH0ZMNvPMGcW-VRA-gNxibYaIgbGAr-125JyVYjCn9uTfw70b0R3XMOEHi0vhG-zYdPH~zit6OSGxIt7utzZIaeh3Xu1S6OzVTr35uoOVyfXyzVh87yaXY0Y8msX50OEnkes1R3KClBcfIB1xetOnUmHZIny~sKSR5KQPJQ7-9fHa4z9pAlbChXILIOmfIeev7qPr8Jw__",
    },
    {
      id: "6",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/f238/4ed9/3cd92de4165aa7f1d2143c311d0d890d?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=g8vK9Heo5Jag3ABk3OKbaaptlOnYOiHEV0~P5CZsQ3yBEKIBaR2W1TNpkmpGA1DCzVyZT9M6n9aSQ~1iqujYPTmY8TNDbrV8pvEUyiQu8ifixYN18prQEbJeo1n4CXvgCC9zo0VcTPeAPRir~HUUJLo3ZPdcluHH9CK7RxEdSHYNGH8ih~N1x3lcCIofyc~Ocx7Nv0Msl3UdRSFheuQn31rHozD~T7yFNpE9DylNp1j1ZEVk~vnaeWOGEY5X8YYvAeHuGw-qDacbQXuqcSg77JiIh41l6P8NwVjtUnSI3SnPT0Hp4rezkUMGNw1yQ96IhhLUB81wb8j3j9qAiBfmSQ__",
    },
    {
      id: "7",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/77f5/555d/b4d1c3b53f8c9df5bebbc45e46ee0476?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DThb9L4jvzsYnQwnfuvCAiYK2nlZg5CD3~lgr2uiaYoSxbnZUiUczJBsKpjEexSE6s37jWbppTjsMiLPZoQEkb24Lst0uDEOPDKsURH3Gpdn0E7wCqN7EieLwDmSqvH-TxxIWaSHptr~h4gslCtQi8jdcOyAKSUEF7~PYmrtG9JyFZAc0MVZrlbl9I2Sww8yWYlL77QsSwtLGucyWlW5AsjsBoj6FAzILfE~j~gij8OeMG4H71LQTsaY384tBgSy3~tRG5nFg1NKPzwz0bCWAlwAZqdz~dJ9fdG17wUHmiVSQPZct3~i2NDda-H-CyK8hnM9lHnpTVBwzdIpkMi7jw__",
    },
    {
      id: "8",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/13f8/1bd6/ebb0ffa18a5991cc9f11b24e3d15ec84?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=SCMgupoHad7PHJsEJHdKPyouLw3dsG9BOZ~zqaF35t5ePjRJhZoCstEJJlP-vKkvK2Hfi33pi8oGd-ZHbXpPrzb7PA5O6-CU27hmrYk~IDaz6aqnN2RNiwSkVLTgDIsmythAHI0NwwZAUsyvOFW2CntiJtwfZGWBcCY-oAb1vQ~hMO3qhYlBevNoYzpB7QsjJN1uinUwS52Fy5nm2FC35e4Acjd9ThaMFZeFvrcstMRXQosbIIUXiLgbruL3B6byqSs-8MSJ2OQmWkVBDtuXkDkBeoIpAOWgHRhsUkvzfRl83O179p6DDyiFwowVHT7lIa~lYXBtBUsmOvgY71vmeg__",
    },
  ];

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

  const banner_data = [
    {
      title: "Gemstones",
      img: "https://s3-alpha-sig.figma.com/img/9957/2866/c3da4e83fe79f3535f29eb4a67416818?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PWPUCRTuyJB2J2~Ry98PgS8mnu6Ub4FtB12Tuw9XItOvLgPlVsyvWTMpx8yppApvXrH2FIE8EDAPer-L-JPJ4Vin35R8XmVHSWf27XvSiA5aWN8fUoxEqpBPCYCxozbE3CtYROoSTbLNriz5ER6daHVnkjQjx9pdVmONeTyVu5n3RdYHrBmR1UGEQ3mx3Jle6eH~AXHYoe4ozWt1y1wxK7nJwbb~u5kKRv3q4ZikWwbc9EXDUkrMHxmCXwx~oyRlJo7vjV2HU0B7RYiQEJJKXkwnxAw9DW7hVTRe-vm7swM8FElxXktHXY6nicrPwvn03C8GJOp1MVq8sHMCpnCjzg__",
    },
    {
      title: "Rings",
      img: "https://s3-alpha-sig.figma.com/img/2bc1/2fa8/6ac507ab4281e55576c30361e3a4aeb4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JR1JyLFAdQKdKcJxQKWB6lj6OQuRB2KlCiwNW8R26o6l5AgVbCv61G8yx3XGrABGj~8pzziPPK7U~MMPi7wMjJw0cMiHfMso06gXNQ3ZVS7P3px7PQ1hCccTMfe4jibZleObvjG2OiJj1cEBE2Q7sOwAcFVfKbgVgSQXlkD6RFOB4Y3nq1cGcex7LRUVK5kAUXD2eEaohPZQdZBu30wHMSEGw-oZNsU4oXai4c6Bar0woNyStN44Z9nQwTCiJkoNIQGhkp7aQoe4XrLOWJqRTblAgRdNLQtfw-Em0XNDvwiAYZ9azAWPY0Bd9Z3GlIrKfyltoG6Vc4iFZ26Sgz2sbw__",
    },
    {
      title: "Pendants",
      img: "https://s3-alpha-sig.figma.com/img/af81/2a99/a4f55483a0cfd49373131dcf58210600?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DoXjVZXnBRDyQWndTstIne-klTMFDea9OtBluEGN2tIakdCIjOpiMJwg-nxFcx2yK0-GZMaJr-UYryhMjxwh1RYYQaMm3gORuQULA1ek5p2oIDw6pCi8~ZURoImBKb-tr~163GMLq6l5PaL5fvdetesuWQlJIyw5wDDoe6JVvv9-BhI~a5aiZnzkL2k1qdCG3QShfx~U6nl4mULRssZoyYNxeGwNoIhGp8vVCRb-YHf7LRbYfttgbO6vOn4Pekky8BPaKu5FkTq-ytkHxcvD~YxNkB4lYSs5SQkJvvlDCgJXE3wo~u8jxOYZ8sCTOuXRURtv3hfcZ52vHFJDvrYSHQ__",
    },
    {
      title: "Bracelets",
      img: "https://s3-alpha-sig.figma.com/img/5816/404c/7680cc77b51afec271143ab043f63ea7?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DOTWWSskSWIwwiwmwW8CnM0cfsx728DZUxJmAQXLrnK0fmXS7~XjtCZVND98f3qDGkbS5M3kwXeSQTTH4c0uA4iX43L6FlVblg9aIqro742iLXSbDNJtgtIadZpwIDZX~2DVU31-um6TvHm3pA1hD13iCI0Lk2eCX4~9tDjqbIH78Wl7zriShqLM4gD8L7JgmkhVjiIlcQe18jPm1txz2DsiaRX8e4oZbOc05iGJUkfbHcziKKb9nVHpZd0bvcVtftXAhtHDbnwySnUDR8mEOTmR2Bf61QMJyEEVJ95YyspGMJ904~ssh-ScAQdzY0lO6ZNYT8njF1HSig5B8WIDUA__",
    },
  ];

  const other_services = [
    {
      title: "Pooja Energisation",
      img: "https://s3-alpha-sig.figma.com/img/9529/748a/2dd2156d143627301d7174fdd7968abe?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GvQwMvPFIM-Hj-ttAZ-TwO4c1DhJtQa0VO0JXqxdknSRs7uw963odXHcwkJiZpaaE-w4StzWeEFbwLCFN6S0~nF~6m3NdNm8wMTQ~aZNPCCUb1ow6ISj5pI~X0RCjlFuM51N0KlaRIDBGS0fdNTQJuRBYF6M1tU34qSNWmvcQGbF5TtXPXZsmrG5ZtUihf0XhxOX4WLDM9Bk4D89y9pPRaitNmJ3NC9iVoVBGDZ747Og6YkN4Q5d-v7Jvzki4VCpAfiKXxW3FjGn0iEBzqh~WCus9j5LLvKsx-hKa9T~dFuN8xTuGx8C64j7n4sLxTGCwRii~ni8cB0gECafgRysKQ__",
    },
    {
      title: "Gemstone Recommendation",
      img: "https://s3-alpha-sig.figma.com/img/2b09/a7a5/4147788b86973fac1eb8a29a4d541de0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BSbub-5NMuHyZ0NeuTG4jPFwk7~wKtP874tOzbVz9jpDp4vbjjKlgtHjdDVp2f7URI9gDnh5RqDqp0XkYDKDdFjnn3VFoUh2JWlcO3dPzTLBbqh-k09r9MTWjAHa5xoA5Mxs6sBJ1clEcZxp5bJk0BQHmsZKTBilLl2LdtF6MPCM8Tj6bUJaQdqkzqK0NrLpsejPDfJqU8Rj9BPC2J9EHbE99-4Shw~8CqTWZcK4jkSwO3DJhOtvsSLJ7o7Y~S1IKoaRkyzX~BUoINHLTNQ9Hj4TQatrSdrzbUdRwwt3YTEh7zAM4KZytXl81snkmxKd7CYrrx~L6hbs0cE8-sUYjg__",
    },
  ];

  const Buying_Guide = [
    {
      title: "Clarity",
      heading:
        "Heading: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      bg: "https://s3-alpha-sig.figma.com/img/a109/0926/e51ab9006b3b5449f5b7d77f003039e8?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MkqSK2jQag0WZkqw4lG~IJu-MREYdlsCwJGiHfykjXRvNbAuHpE4iIKBaf3YhVKJ3dT380mVllx29zV160pf147Rk3p2V3VNriM3DK6xumoo9ly2CRtoRkvhZZw5IQ2pEdFiM26eJ1nEz9loUxbQmnOxahByw1HwNKSXxYf8eb2klnlG9~vHKjHF6ZedXD23nIQj6VL8kNKaJFwWnK0XO6WhQlIUB-qfNkUnq0284Tg8aKnabfsfUbtO5wJkLOWj~D8V0GUw1CE2F~T65JOFI0m6lQ8SdJIb3TbQH5GDNTgz4i2ToN4-RATFZwm6m0CP3DaT6Atgj02ht1myNRJ6GA__",
      para: "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo harum recusandae eligendi quis beatae tenetur. Quam, facere? Cupiditate eveniet cumque aliquam quisquam possimus. Rerum sit totam, ut deserunt sunt aliquid vel, ab quasi voluptatum, similique vitae consequatur ex tempore doloribus? Culpa, alias.",
      para2:
        "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo harum recusandae eligendi quis beatae tenetur. Quam, facere? .",
      para3:
        "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo harum recusandae eligendi quis beatae tenetur. Quam, facere? ",
    },

    {
      title: "Weight",
      heading:
        "Heading: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      bg: "https://s3-alpha-sig.figma.com/img/bdf4/790d/88871d9d832908e04168034c249163f2?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ll9san8jywU9ChKT3jbA6nP72wZ8BlKdGvyIe3kctRPogEKQUfwr~Tc5fb2HFQQ1KZjsgE4KKVcAWv1psY3cZfpflyC8ECC~mwZK87-OgXoo0PK~XVNNlEWLp0TSR-Ci9AdlyR26C7AHPA9IJKL0Mn5a-eQ5m8IlLWmX8X9UJv3Z5EVjnTzbOAPXBEIBeE~nmAsTUB9jAlmea7sRMjmKVzPLuuOUtAegBB9KCwO7wWrQh0N6RRn8MvMpQzLPQdNNsYVaneuVBZSKD4nLne5OYb74-e3cqiX6kUtCcL69f7Yj36P8Oud19aWBm5vp8LQji8cl7nTs43d7iPCfQ-nSrQ__",
      para: "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo harum recusandae eligendi quis beatae tenetur. Quam, facere? Cupiditate eveniet cumque aliquam quisquam possimus. Rerum sit totam, ut deserunt sunt aliquid vel, ab quasi voluptatum, similique vitae consequatur ex tempore doloribus? Culpa, alias.",

      para2:
        "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo harum recusandae eligendi quis beatae tenetur. Quam, facere? .",
      para3:
        "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo harum recusandae eligendi quis beatae tenetur. Quam, facere? ",
    },
    {
      title: "Clarification",
      heading:
        "Heading: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ",
      bg: "https://s3-alpha-sig.figma.com/img/59c9/ce8f/1262d59af66a1ee03e9c46a49847eaaa?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kgESVyNfqQC8fJvLnHzGik4BgivXSDi92YxhtHO7MhBF3dRTuNfCs1ZSR3jTB4gq~8287SoSR~h4BDgX40ML0Na~WHJUCbwWv9K7VJblRAyMzGUdAKagtVItlCQhLXAKexjVY5MUwLYzrLHoUT70NfOZSptv21IsYu-ekDa8XYqpZmsVNYwNyu-IqPCE33qBHZn4O9vNpIw6pLqfPoAB93ECdjqzZsihbLj2zJKwpv4CqhJ80F7K6ztGRo4sU9OsJBXh-BJ3Nj2lueVAICxgg7~J0dnRg3uTuTgBVI7jD5W9g0Q6jt4wPMNJlgHUaL3g3zb-St5bBt~Kk~XZSVOqsw__",
      para: "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo harum recusandae eligendi quis beatae tenetur. Quam, facere? Cupiditate eveniet cumque aliquam quisquam possimus. Rerum sit totam, ut deserunt sunt aliquid vel, ab quasi voluptatum, similique vitae consequatur ex tempore doloribus? Culpa, alias.",

      para2:
        "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo harum recusandae eligendi quis beatae tenetur. Quam, facere? .",
      para3:
        "       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem quo harum recusandae eligendi quis beatae tenetur. Quam, facere? ",
    },
  ];

  const freq_ask_ques = [
    {
      questions:
        "FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answers:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      questions:
        "FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answers:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      questions:
        "FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answers:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      questions:
        "FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answers:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      questions:
        "FAQ 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      answers:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];
  const our_blog = [
    {
      img: "https://s3-alpha-sig.figma.com/img/16b1/a151/8bf02e08c72d1ed59240ef762204f333?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k~SNjjym31LMSY26BIys~YP0WRIiYccZX8aTmZE9PU9jXvjA1G0Q6h95fZ6uyg5NGjtNeDkzmRzrIJQ-WY-gFNSb51EGsXA-iyatKUsRdgCE8UlZnAdQKzDDZmWByGaXZknNUdxxmk7oVsynsrD30uqB~oRN9uq19Qq6qPGY3zSDkDg5Ga-t4OVSFpPzVH~6viViJ4Jnz4Bwzsx3IDM4C8Ewj~r~GGKNKNL3h7qm0Tv-OduLLKvZCC1lENNndGccSpJIBs8IwP61Ejx1GBJ6Hn9DFpozeLAfzsYlByttYPeFurSLfRwUQWDIjCZQA21-SjOZPbCPTanIEjxLEPMlKg__",
      heading: "Heading: Lorem ipsum dolor sit amet, consectetur adipiscing ",
      tile: "",
      usernmame: "Nandita Shukla",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/16b1/a151/8bf02e08c72d1ed59240ef762204f333?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k~SNjjym31LMSY26BIys~YP0WRIiYccZX8aTmZE9PU9jXvjA1G0Q6h95fZ6uyg5NGjtNeDkzmRzrIJQ-WY-gFNSb51EGsXA-iyatKUsRdgCE8UlZnAdQKzDDZmWByGaXZknNUdxxmk7oVsynsrD30uqB~oRN9uq19Qq6qPGY3zSDkDg5Ga-t4OVSFpPzVH~6viViJ4Jnz4Bwzsx3IDM4C8Ewj~r~GGKNKNL3h7qm0Tv-OduLLKvZCC1lENNndGccSpJIBs8IwP61Ejx1GBJ6Hn9DFpozeLAfzsYlByttYPeFurSLfRwUQWDIjCZQA21-SjOZPbCPTanIEjxLEPMlKg__",
      heading: "Heading: Lorem ipsum dolor sit amet, consectetur adipiscing ",
      tile: "",
      usernmame: "Nandita Shukla",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/16b1/a151/8bf02e08c72d1ed59240ef762204f333?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k~SNjjym31LMSY26BIys~YP0WRIiYccZX8aTmZE9PU9jXvjA1G0Q6h95fZ6uyg5NGjtNeDkzmRzrIJQ-WY-gFNSb51EGsXA-iyatKUsRdgCE8UlZnAdQKzDDZmWByGaXZknNUdxxmk7oVsynsrD30uqB~oRN9uq19Qq6qPGY3zSDkDg5Ga-t4OVSFpPzVH~6viViJ4Jnz4Bwzsx3IDM4C8Ewj~r~GGKNKNL3h7qm0Tv-OduLLKvZCC1lENNndGccSpJIBs8IwP61Ejx1GBJ6Hn9DFpozeLAfzsYlByttYPeFurSLfRwUQWDIjCZQA21-SjOZPbCPTanIEjxLEPMlKg__",
      heading: "Heading: Lorem ipsum dolor sit amet, consectetur adipiscing ",
      tile: "",
      usernmame: "Nandita Shukla",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/16b1/a151/8bf02e08c72d1ed59240ef762204f333?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k~SNjjym31LMSY26BIys~YP0WRIiYccZX8aTmZE9PU9jXvjA1G0Q6h95fZ6uyg5NGjtNeDkzmRzrIJQ-WY-gFNSb51EGsXA-iyatKUsRdgCE8UlZnAdQKzDDZmWByGaXZknNUdxxmk7oVsynsrD30uqB~oRN9uq19Qq6qPGY3zSDkDg5Ga-t4OVSFpPzVH~6viViJ4Jnz4Bwzsx3IDM4C8Ewj~r~GGKNKNL3h7qm0Tv-OduLLKvZCC1lENNndGccSpJIBs8IwP61Ejx1GBJ6Hn9DFpozeLAfzsYlByttYPeFurSLfRwUQWDIjCZQA21-SjOZPbCPTanIEjxLEPMlKg__",
      heading: "Heading: Lorem ipsum dolor sit amet, consectetur adipiscing ",
      tile: "",
      usernmame: "Nandita Shukla",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
    {
      img: "https://s3-alpha-sig.figma.com/img/16b1/a151/8bf02e08c72d1ed59240ef762204f333?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=k~SNjjym31LMSY26BIys~YP0WRIiYccZX8aTmZE9PU9jXvjA1G0Q6h95fZ6uyg5NGjtNeDkzmRzrIJQ-WY-gFNSb51EGsXA-iyatKUsRdgCE8UlZnAdQKzDDZmWByGaXZknNUdxxmk7oVsynsrD30uqB~oRN9uq19Qq6qPGY3zSDkDg5Ga-t4OVSFpPzVH~6viViJ4Jnz4Bwzsx3IDM4C8Ewj~r~GGKNKNL3h7qm0Tv-OduLLKvZCC1lENNndGccSpJIBs8IwP61Ejx1GBJ6Hn9DFpozeLAfzsYlByttYPeFurSLfRwUQWDIjCZQA21-SjOZPbCPTanIEjxLEPMlKg__",
      heading: "Heading: Lorem ipsum dolor sit amet, consectetur adipiscing ",
      tile: "",
      usernmame: "Nandita Shukla",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    },
  ];

  const [faqStates, setFaqStates] = useState(
    Array(freq_ask_ques.length).fill(false)
  );

  const faqSetter = (index) => {
    const updatedFaqStates = [...faqStates];
    updatedFaqStates[index] = !updatedFaqStates[index];
    setFaqStates(updatedFaqStates);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-[80px]">
      <Herosection bg={bg} className="xl:hidden" />

      <div className="w-[92vw] custom-xl-max:w-[85vw]  flex flex-col gap-[22px] ">
        <h1 className="font-serif font-semibold text-3xl">
          Explore Our Exclusive Range
        </h1>
        <div className="grid  custom-xl-min:grid-cols-4  grid-cols-2 md:grid-cols-1 gap-10  place-items-center">
          {card_data.map((data, index) => (
            <div className="" key={index}>
              <Card_exclusive
                title={data.title}
                star_sign={data.star_sign}
                para={data.para}
                image={data.image}
                key={index}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#0064D6]  flex items-center justify-between w-full  py-[20px] px-[177px]">
        <svg
          width="148"
          height="92"
          viewBox="0 0 148 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74 5.25C69.5005 5.25 65.102 6.58426 61.3608 9.08407C57.6196 11.5839 54.7036 15.1369 52.9818 19.294C51.2599 23.451 50.8093 28.0252 51.6871 32.4383C52.565 36.8514 54.7317 40.905 57.9133 44.0867C61.095 47.2683 65.1486 49.4351 69.5617 50.3129C73.9748 51.1907 78.549 50.7402 82.7061 49.0183C86.8631 47.2964 90.4161 44.3804 92.9159 40.6392C95.4157 36.898 96.75 32.4995 96.75 28C96.7436 21.9683 94.3447 16.1854 90.0797 11.9204C85.8146 7.65528 80.0317 5.25637 74 5.25ZM83.9881 23.9881L71.7381 36.2381C71.5756 36.4008 71.3826 36.5299 71.1702 36.618C70.9577 36.706 70.73 36.7514 70.5 36.7514C70.27 36.7514 70.0423 36.706 69.8299 36.618C69.6174 36.5299 69.4244 36.4008 69.2619 36.2381L64.0119 30.9881C63.6835 30.6598 63.499 30.2144 63.499 29.75C63.499 29.2856 63.6835 28.8402 64.0119 28.5119C64.3403 28.1835 64.7856 27.999 65.25 27.999C65.7144 27.999 66.1598 28.1835 66.4881 28.5119L70.5 32.5259L81.5119 21.5119C81.6745 21.3493 81.8675 21.2203 82.0799 21.1323C82.2924 21.0443 82.5201 20.999 82.75 20.999C82.98 20.999 83.2076 21.0443 83.4201 21.1323C83.6325 21.2203 83.8255 21.3493 83.9881 21.5119C84.1507 21.6745 84.2797 21.8675 84.3677 22.0799C84.4557 22.2924 84.501 22.5201 84.501 22.75C84.501 22.9799 84.4557 23.2076 84.3677 23.4201C84.2797 23.6325 84.1507 23.8255 83.9881 23.9881Z"
            fill="white"
          />
          <path
            d="M7.87081 84.18C6.46681 84.18 5.27881 83.916 4.30681 83.388C3.34681 82.86 2.61481 82.11 2.11081 81.138C1.60681 80.166 1.35481 79.014 1.35481 77.682C1.35481 76.674 1.49881 75.768 1.78681 74.964C2.08681 74.16 2.51281 73.476 3.06481 72.912C3.62881 72.336 4.31281 71.898 5.11681 71.598C5.92081 71.286 6.83281 71.13 7.85281 71.13C8.52481 71.13 9.19681 71.214 9.86881 71.382C10.5528 71.538 11.1948 71.808 11.7948 72.192C11.9988 72.324 12.1308 72.486 12.1908 72.678C12.2628 72.87 12.2748 73.068 12.2268 73.272C12.1788 73.464 12.0888 73.632 11.9568 73.776C11.8248 73.92 11.6568 74.01 11.4528 74.046C11.2608 74.082 11.0448 74.034 10.8048 73.902C10.3488 73.638 9.88681 73.446 9.41881 73.326C8.95081 73.206 8.42881 73.146 7.85281 73.146C6.96481 73.146 6.21481 73.326 5.60281 73.686C4.99081 74.034 4.52881 74.544 4.21681 75.216C3.91681 75.888 3.76681 76.71 3.76681 77.682C3.76681 79.158 4.12081 80.28 4.82881 81.048C5.53681 81.816 6.58681 82.2 7.97881 82.2C8.45881 82.2 8.94481 82.152 9.43681 82.056C9.92881 81.96 10.4088 81.828 10.8768 81.66L10.4268 82.686V78.852H8.44681C8.14681 78.852 7.91281 78.774 7.74481 78.618C7.58881 78.462 7.51081 78.252 7.51081 77.988C7.51081 77.712 7.58881 77.502 7.74481 77.358C7.91281 77.214 8.14681 77.142 8.44681 77.142H11.4168C11.7168 77.142 11.9448 77.226 12.1008 77.394C12.2688 77.55 12.3528 77.778 12.3528 78.078V82.452C12.3528 82.716 12.2988 82.938 12.1908 83.118C12.0948 83.298 11.9328 83.43 11.7048 83.514C11.1768 83.706 10.5708 83.868 9.88681 84C9.20281 84.12 8.53081 84.18 7.87081 84.18ZM19.1447 84.18C18.1487 84.18 17.2907 83.994 16.5707 83.622C15.8507 83.25 15.2927 82.722 14.8967 82.038C14.5127 81.354 14.3207 80.544 14.3207 79.608C14.3207 78.696 14.5067 77.898 14.8787 77.214C15.2627 76.53 15.7847 75.996 16.4447 75.612C17.1167 75.216 17.8787 75.018 18.7307 75.018C19.3547 75.018 19.9127 75.12 20.4047 75.324C20.9087 75.528 21.3347 75.822 21.6827 76.206C22.0427 76.59 22.3127 77.058 22.4927 77.61C22.6847 78.15 22.7807 78.762 22.7807 79.446C22.7807 79.662 22.7027 79.83 22.5467 79.95C22.4027 80.058 22.1927 80.112 21.9167 80.112H16.1387V78.816H21.1967L20.9087 79.086C20.9087 78.534 20.8247 78.072 20.6567 77.7C20.5007 77.328 20.2667 77.046 19.9547 76.854C19.6547 76.65 19.2767 76.548 18.8207 76.548C18.3167 76.548 17.8847 76.668 17.5247 76.908C17.1767 77.136 16.9067 77.466 16.7147 77.898C16.5347 78.318 16.4447 78.822 16.4447 79.41V79.536C16.4447 80.52 16.6727 81.258 17.1287 81.75C17.5967 82.23 18.2807 82.47 19.1807 82.47C19.4927 82.47 19.8407 82.434 20.2247 82.362C20.6207 82.278 20.9927 82.14 21.3407 81.948C21.5927 81.804 21.8147 81.744 22.0067 81.768C22.1987 81.78 22.3487 81.846 22.4567 81.966C22.5767 82.086 22.6487 82.236 22.6727 82.416C22.6967 82.584 22.6607 82.758 22.5647 82.938C22.4807 83.118 22.3307 83.274 22.1147 83.406C21.6947 83.67 21.2087 83.868 20.6567 84C20.1167 84.12 19.6127 84.18 19.1447 84.18ZM25.6786 84.144C25.3186 84.144 25.0426 84.048 24.8506 83.856C24.6586 83.652 24.5626 83.364 24.5626 82.992V76.188C24.5626 75.816 24.6586 75.534 24.8506 75.342C25.0426 75.15 25.3126 75.054 25.6606 75.054C26.0086 75.054 26.2786 75.15 26.4706 75.342C26.6626 75.534 26.7586 75.816 26.7586 76.188V77.412L26.5606 76.962C26.8246 76.326 27.2326 75.846 27.7846 75.522C28.3486 75.186 28.9846 75.018 29.6926 75.018C30.4006 75.018 30.9826 75.15 31.4386 75.414C31.8946 75.678 32.2366 76.08 32.4646 76.62C32.6926 77.148 32.8066 77.82 32.8066 78.636V82.992C32.8066 83.364 32.7106 83.652 32.5186 83.856C32.3266 84.048 32.0506 84.144 31.6906 84.144C31.3306 84.144 31.0486 84.048 30.8446 83.856C30.6526 83.652 30.5566 83.364 30.5566 82.992V78.744C30.5566 78.06 30.4246 77.562 30.1606 77.25C29.9086 76.938 29.5126 76.782 28.9726 76.782C28.3126 76.782 27.7846 76.992 27.3886 77.412C27.0046 77.82 26.8126 78.366 26.8126 79.05V82.992C26.8126 83.76 26.4346 84.144 25.6786 84.144ZM38.2779 84.18C37.5459 84.18 36.9399 84.048 36.4599 83.784C35.9799 83.508 35.6199 83.1 35.3799 82.56C35.1519 82.02 35.0379 81.348 35.0379 80.544V76.188C35.0379 75.804 35.1339 75.522 35.3259 75.342C35.5179 75.15 35.7939 75.054 36.1539 75.054C36.5139 75.054 36.7899 75.15 36.9819 75.342C37.1859 75.522 37.2879 75.804 37.2879 76.188V80.58C37.2879 81.204 37.4139 81.666 37.6659 81.966C37.9179 82.266 38.3199 82.416 38.8719 82.416C39.4719 82.416 39.9639 82.212 40.3479 81.804C40.7319 81.384 40.9239 80.832 40.9239 80.148V76.188C40.9239 75.804 41.0199 75.522 41.2119 75.342C41.4039 75.15 41.6799 75.054 42.0399 75.054C42.3999 75.054 42.6759 75.15 42.8679 75.342C43.0719 75.522 43.1739 75.804 43.1739 76.188V82.992C43.1739 83.76 42.8079 84.144 42.0759 84.144C41.7279 84.144 41.4579 84.048 41.2659 83.856C41.0739 83.652 40.9779 83.364 40.9779 82.992V81.624L41.2299 82.164C40.9779 82.812 40.5939 83.31 40.0779 83.658C39.5739 84.006 38.9739 84.18 38.2779 84.18ZM46.6317 84.126C46.2717 84.126 45.9957 84.018 45.8037 83.802C45.6117 83.586 45.5157 83.286 45.5157 82.902V76.296C45.5157 75.9 45.6117 75.6 45.8037 75.396C45.9957 75.18 46.2717 75.072 46.6317 75.072C46.9917 75.072 47.2677 75.18 47.4597 75.396C47.6637 75.6 47.7657 75.9 47.7657 76.296V82.902C47.7657 83.286 47.6697 83.586 47.4777 83.802C47.2857 84.018 47.0037 84.126 46.6317 84.126ZM46.6317 73.398C46.2117 73.398 45.8817 73.296 45.6417 73.092C45.4137 72.876 45.2997 72.582 45.2997 72.21C45.2997 71.826 45.4137 71.532 45.6417 71.328C45.8817 71.124 46.2117 71.022 46.6317 71.022C47.0637 71.022 47.3937 71.124 47.6217 71.328C47.8497 71.532 47.9637 71.826 47.9637 72.21C47.9637 72.582 47.8497 72.876 47.6217 73.092C47.3937 73.296 47.0637 73.398 46.6317 73.398ZM51.2196 84.144C50.8596 84.144 50.5836 84.048 50.3916 83.856C50.1996 83.652 50.1036 83.364 50.1036 82.992V76.188C50.1036 75.816 50.1996 75.534 50.3916 75.342C50.5836 75.15 50.8536 75.054 51.2016 75.054C51.5496 75.054 51.8196 75.15 52.0116 75.342C52.2036 75.534 52.2996 75.816 52.2996 76.188V77.412L52.1016 76.962C52.3656 76.326 52.7736 75.846 53.3256 75.522C53.8896 75.186 54.5256 75.018 55.2336 75.018C55.9416 75.018 56.5236 75.15 56.9796 75.414C57.4356 75.678 57.7776 76.08 58.0056 76.62C58.2336 77.148 58.3476 77.82 58.3476 78.636V82.992C58.3476 83.364 58.2516 83.652 58.0596 83.856C57.8676 84.048 57.5916 84.144 57.2316 84.144C56.8716 84.144 56.5896 84.048 56.3856 83.856C56.1936 83.652 56.0976 83.364 56.0976 82.992V78.744C56.0976 78.06 55.9656 77.562 55.7016 77.25C55.4496 76.938 55.0536 76.782 54.5136 76.782C53.8536 76.782 53.3256 76.992 52.9296 77.412C52.5456 77.82 52.3536 78.366 52.3536 79.05V82.992C52.3536 83.76 51.9756 84.144 51.2196 84.144ZM64.9709 84.18C63.9749 84.18 63.1169 83.994 62.3969 83.622C61.6769 83.25 61.1189 82.722 60.7229 82.038C60.3389 81.354 60.1469 80.544 60.1469 79.608C60.1469 78.696 60.3329 77.898 60.7049 77.214C61.0889 76.53 61.6109 75.996 62.2709 75.612C62.9429 75.216 63.7049 75.018 64.5569 75.018C65.1809 75.018 65.7389 75.12 66.2309 75.324C66.7349 75.528 67.1609 75.822 67.5089 76.206C67.8689 76.59 68.1389 77.058 68.3189 77.61C68.5109 78.15 68.6069 78.762 68.6069 79.446C68.6069 79.662 68.5289 79.83 68.3729 79.95C68.2289 80.058 68.0189 80.112 67.7429 80.112H61.9649V78.816H67.0229L66.7349 79.086C66.7349 78.534 66.6509 78.072 66.4829 77.7C66.3269 77.328 66.0929 77.046 65.7809 76.854C65.4809 76.65 65.1029 76.548 64.6469 76.548C64.1429 76.548 63.7109 76.668 63.3509 76.908C63.0029 77.136 62.7329 77.466 62.5409 77.898C62.3609 78.318 62.2709 78.822 62.2709 79.41V79.536C62.2709 80.52 62.4989 81.258 62.9549 81.75C63.4229 82.23 64.1069 82.47 65.0069 82.47C65.3189 82.47 65.6669 82.434 66.0509 82.362C66.4469 82.278 66.8189 82.14 67.1669 81.948C67.4189 81.804 67.6409 81.744 67.8329 81.768C68.0249 81.78 68.1749 81.846 68.2829 81.966C68.4029 82.086 68.4749 82.236 68.4989 82.416C68.5229 82.584 68.4869 82.758 68.3909 82.938C68.3069 83.118 68.1569 83.274 67.9409 83.406C67.5209 83.67 67.0349 83.868 66.4829 84C65.9429 84.12 65.4389 84.18 64.9709 84.18ZM76.3915 87.384C76.0315 87.384 75.7555 87.288 75.5635 87.096C75.3715 86.904 75.2755 86.622 75.2755 86.25V76.188C75.2755 75.816 75.3715 75.534 75.5635 75.342C75.7555 75.15 76.0255 75.054 76.3735 75.054C76.7335 75.054 77.0095 75.15 77.2015 75.342C77.3935 75.534 77.4895 75.816 77.4895 76.188V77.592L77.2915 77.052C77.4715 76.44 77.8375 75.948 78.3895 75.576C78.9535 75.204 79.6075 75.018 80.3515 75.018C81.1195 75.018 81.7915 75.204 82.3675 75.576C82.9555 75.948 83.4115 76.476 83.7355 77.16C84.0595 77.832 84.2215 78.642 84.2215 79.59C84.2215 80.526 84.0595 81.342 83.7355 82.038C83.4115 82.722 82.9615 83.25 82.3855 83.622C81.8095 83.994 81.1315 84.18 80.3515 84.18C79.6195 84.18 78.9775 84 78.4255 83.64C77.8735 83.268 77.5015 82.788 77.3095 82.2H77.5255V86.25C77.5255 86.622 77.4235 86.904 77.2195 87.096C77.0275 87.288 76.7515 87.384 76.3915 87.384ZM79.7215 82.47C80.1655 82.47 80.5555 82.362 80.8915 82.146C81.2275 81.93 81.4855 81.612 81.6655 81.192C81.8575 80.76 81.9535 80.226 81.9535 79.59C81.9535 78.63 81.7495 77.916 81.3415 77.448C80.9335 76.968 80.3935 76.728 79.7215 76.728C79.2775 76.728 78.8875 76.836 78.5515 77.052C78.2155 77.256 77.9515 77.574 77.7595 78.006C77.5795 78.426 77.4895 78.954 77.4895 79.59C77.4895 80.538 77.6935 81.258 78.1015 81.75C78.5095 82.23 79.0495 82.47 79.7215 82.47ZM87.2204 84.144C86.8484 84.144 86.5604 84.048 86.3564 83.856C86.1644 83.652 86.0684 83.364 86.0684 82.992V76.188C86.0684 75.816 86.1644 75.534 86.3564 75.342C86.5484 75.15 86.8184 75.054 87.1664 75.054C87.5144 75.054 87.7844 75.15 87.9764 75.342C88.1684 75.534 88.2644 75.816 88.2644 76.188V77.322H88.0844C88.2524 76.602 88.5824 76.056 89.0744 75.684C89.5664 75.312 90.2204 75.09 91.0364 75.018C91.2884 74.994 91.4864 75.06 91.6304 75.216C91.7864 75.36 91.8764 75.588 91.9004 75.9C91.9244 76.2 91.8524 76.446 91.6844 76.638C91.5284 76.818 91.2884 76.926 90.9644 76.962L90.5684 76.998C89.8364 77.07 89.2844 77.298 88.9124 77.682C88.5404 78.054 88.3544 78.582 88.3544 79.266V82.992C88.3544 83.364 88.2584 83.652 88.0664 83.856C87.8744 84.048 87.5924 84.144 87.2204 84.144ZM96.9906 84.18C96.0786 84.18 95.2866 83.994 94.6146 83.622C93.9426 83.25 93.4206 82.722 93.0486 82.038C92.6766 81.342 92.4906 80.526 92.4906 79.59C92.4906 78.882 92.5926 78.252 92.7966 77.7C93.0126 77.136 93.3186 76.656 93.7146 76.26C94.1106 75.852 94.5846 75.546 95.1366 75.342C95.6886 75.126 96.3066 75.018 96.9906 75.018C97.9026 75.018 98.6946 75.204 99.3666 75.576C100.039 75.948 100.561 76.476 100.933 77.16C101.305 77.844 101.491 78.654 101.491 79.59C101.491 80.298 101.383 80.934 101.167 81.498C100.963 82.062 100.663 82.548 100.267 82.956C99.8706 83.352 99.3966 83.658 98.8446 83.874C98.2926 84.078 97.6746 84.18 96.9906 84.18ZM96.9906 82.47C97.4346 82.47 97.8246 82.362 98.1606 82.146C98.4966 81.93 98.7546 81.612 98.9346 81.192C99.1266 80.76 99.2226 80.226 99.2226 79.59C99.2226 78.63 99.0186 77.916 98.6106 77.448C98.2026 76.968 97.6626 76.728 96.9906 76.728C96.5466 76.728 96.1566 76.836 95.8206 77.052C95.4846 77.256 95.2206 77.574 95.0286 78.006C94.8486 78.426 94.7586 78.954 94.7586 79.59C94.7586 80.538 94.9626 81.258 95.3706 81.75C95.7786 82.23 96.3186 82.47 96.9906 82.47ZM106.732 84.18C105.964 84.18 105.286 83.994 104.698 83.622C104.122 83.25 103.672 82.722 103.348 82.038C103.024 81.342 102.862 80.526 102.862 79.59C102.862 78.642 103.024 77.832 103.348 77.16C103.672 76.476 104.122 75.948 104.698 75.576C105.286 75.204 105.964 75.018 106.732 75.018C107.464 75.018 108.1 75.198 108.64 75.558C109.192 75.918 109.564 76.392 109.756 76.98H109.558V72.3C109.558 71.928 109.654 71.646 109.846 71.454C110.038 71.262 110.314 71.166 110.674 71.166C111.034 71.166 111.31 71.262 111.502 71.454C111.706 71.646 111.808 71.928 111.808 72.3V82.992C111.808 83.364 111.712 83.652 111.52 83.856C111.328 84.048 111.052 84.144 110.692 84.144C110.332 84.144 110.056 84.048 109.864 83.856C109.672 83.652 109.576 83.364 109.576 82.992V81.588L109.774 82.128C109.594 82.752 109.228 83.25 108.676 83.622C108.124 83.994 107.476 84.18 106.732 84.18ZM107.362 82.47C107.806 82.47 108.196 82.362 108.532 82.146C108.868 81.93 109.126 81.612 109.306 81.192C109.498 80.76 109.594 80.226 109.594 79.59C109.594 78.63 109.39 77.916 108.982 77.448C108.574 76.968 108.034 76.728 107.362 76.728C106.918 76.728 106.528 76.836 106.192 77.052C105.856 77.256 105.592 77.574 105.4 78.006C105.22 78.426 105.13 78.954 105.13 79.59C105.13 80.538 105.334 81.258 105.742 81.75C106.15 82.23 106.69 82.47 107.362 82.47ZM117.327 84.18C116.595 84.18 115.989 84.048 115.509 83.784C115.029 83.508 114.669 83.1 114.429 82.56C114.201 82.02 114.087 81.348 114.087 80.544V76.188C114.087 75.804 114.183 75.522 114.375 75.342C114.567 75.15 114.843 75.054 115.203 75.054C115.563 75.054 115.839 75.15 116.031 75.342C116.235 75.522 116.337 75.804 116.337 76.188V80.58C116.337 81.204 116.463 81.666 116.715 81.966C116.967 82.266 117.369 82.416 117.921 82.416C118.521 82.416 119.013 82.212 119.397 81.804C119.781 81.384 119.973 80.832 119.973 80.148V76.188C119.973 75.804 120.069 75.522 120.261 75.342C120.453 75.15 120.729 75.054 121.089 75.054C121.449 75.054 121.725 75.15 121.917 75.342C122.121 75.522 122.223 75.804 122.223 76.188V82.992C122.223 83.76 121.857 84.144 121.125 84.144C120.777 84.144 120.507 84.048 120.315 83.856C120.123 83.652 120.027 83.364 120.027 82.992V81.624L120.279 82.164C120.027 82.812 119.643 83.31 119.127 83.658C118.623 84.006 118.023 84.18 117.327 84.18ZM128.633 84.18C127.709 84.18 126.905 83.994 126.221 83.622C125.537 83.238 125.009 82.698 124.637 82.002C124.265 81.306 124.079 80.49 124.079 79.554C124.079 78.846 124.181 78.216 124.385 77.664C124.601 77.1 124.907 76.626 125.303 76.242C125.699 75.846 126.179 75.546 126.743 75.342C127.307 75.126 127.937 75.018 128.633 75.018C129.029 75.018 129.455 75.072 129.911 75.18C130.379 75.288 130.817 75.468 131.225 75.72C131.417 75.84 131.543 75.984 131.603 76.152C131.663 76.32 131.675 76.494 131.639 76.674C131.603 76.842 131.525 76.992 131.405 77.124C131.297 77.244 131.159 77.322 130.991 77.358C130.823 77.382 130.637 77.34 130.433 77.232C130.169 77.076 129.899 76.962 129.623 76.89C129.347 76.806 129.083 76.764 128.831 76.764C128.435 76.764 128.087 76.83 127.787 76.962C127.487 77.082 127.229 77.262 127.013 77.502C126.809 77.73 126.653 78.018 126.545 78.366C126.437 78.714 126.383 79.116 126.383 79.572C126.383 80.46 126.593 81.162 127.013 81.678C127.445 82.182 128.051 82.434 128.831 82.434C129.083 82.434 129.341 82.398 129.605 82.326C129.881 82.254 130.157 82.14 130.433 81.984C130.637 81.876 130.817 81.84 130.973 81.876C131.141 81.912 131.279 81.996 131.387 82.128C131.495 82.248 131.561 82.398 131.585 82.578C131.609 82.746 131.585 82.914 131.513 83.082C131.453 83.25 131.333 83.388 131.153 83.496C130.757 83.736 130.337 83.91 129.893 84.018C129.449 84.126 129.029 84.18 128.633 84.18ZM137.122 84.18C136.342 84.18 135.688 84.048 135.16 83.784C134.644 83.52 134.26 83.136 134.008 82.632C133.756 82.116 133.63 81.48 133.63 80.724V76.89H132.694C132.406 76.89 132.184 76.818 132.028 76.674C131.872 76.518 131.794 76.308 131.794 76.044C131.794 75.768 131.872 75.558 132.028 75.414C132.184 75.27 132.406 75.198 132.694 75.198H133.63V73.56C133.63 73.188 133.726 72.906 133.918 72.714C134.122 72.522 134.404 72.426 134.764 72.426C135.124 72.426 135.4 72.522 135.592 72.714C135.784 72.906 135.88 73.188 135.88 73.56V75.198H137.788C138.076 75.198 138.298 75.27 138.454 75.414C138.61 75.558 138.688 75.768 138.688 76.044C138.688 76.308 138.61 76.518 138.454 76.674C138.298 76.818 138.076 76.89 137.788 76.89H135.88V80.598C135.88 81.174 136.006 81.606 136.258 81.894C136.51 82.182 136.918 82.326 137.482 82.326C137.686 82.326 137.866 82.308 138.022 82.272C138.178 82.236 138.316 82.212 138.436 82.2C138.58 82.188 138.7 82.236 138.796 82.344C138.892 82.44 138.94 82.644 138.94 82.956C138.94 83.196 138.898 83.412 138.814 83.604C138.742 83.784 138.604 83.91 138.4 83.982C138.244 84.03 138.04 84.072 137.788 84.108C137.536 84.156 137.314 84.18 137.122 84.18ZM143.22 84.18C142.704 84.18 142.158 84.126 141.582 84.018C141.006 83.91 140.49 83.724 140.034 83.46C139.842 83.34 139.704 83.202 139.62 83.046C139.548 82.878 139.518 82.716 139.53 82.56C139.554 82.392 139.614 82.248 139.71 82.128C139.818 82.008 139.95 81.93 140.106 81.894C140.274 81.858 140.454 81.888 140.646 81.984C141.126 82.212 141.576 82.374 141.996 82.47C142.416 82.554 142.83 82.596 143.238 82.596C143.814 82.596 144.24 82.5 144.516 82.308C144.804 82.104 144.948 81.84 144.948 81.516C144.948 81.24 144.852 81.03 144.66 80.886C144.48 80.73 144.204 80.616 143.832 80.544L142.032 80.202C141.288 80.058 140.718 79.788 140.322 79.392C139.938 78.984 139.746 78.462 139.746 77.826C139.746 77.25 139.902 76.752 140.214 76.332C140.538 75.912 140.982 75.588 141.546 75.36C142.11 75.132 142.758 75.018 143.49 75.018C144.018 75.018 144.51 75.078 144.966 75.198C145.434 75.306 145.884 75.48 146.316 75.72C146.496 75.816 146.616 75.942 146.676 76.098C146.748 76.254 146.766 76.416 146.73 76.584C146.694 76.74 146.622 76.884 146.514 77.016C146.406 77.136 146.268 77.214 146.1 77.25C145.944 77.274 145.764 77.238 145.56 77.142C145.188 76.95 144.828 76.812 144.48 76.728C144.144 76.644 143.82 76.602 143.508 76.602C142.92 76.602 142.482 76.704 142.194 76.908C141.918 77.112 141.78 77.382 141.78 77.718C141.78 77.97 141.864 78.18 142.032 78.348C142.2 78.516 142.458 78.63 142.806 78.69L144.606 79.032C145.386 79.176 145.974 79.44 146.37 79.824C146.778 80.208 146.982 80.724 146.982 81.372C146.982 82.248 146.64 82.938 145.956 83.442C145.272 83.934 144.36 84.18 143.22 84.18Z"
            fill="white"
          />
        </svg>

        <svg
          width="106"
          height="92"
          viewBox="0 0 106 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M51.6659 46.6672L63.0059 23.9639H55.1659V9.3339L43.4993 32.0372H51.6659V46.6672ZM52.8326 4.66724C59.2493 4.66724 64.7326 7.00057 69.2826 11.5506C73.8326 16.1006 76.1659 21.5839 76.1659 28.0006C76.1659 34.4172 73.8326 39.9006 69.2826 44.4506C64.7326 49.0006 59.2493 51.3339 52.8326 51.3339C46.4159 51.3339 40.9326 49.0006 36.3826 44.4506C31.8326 39.9006 29.4993 34.4172 29.4993 28.0006C29.4993 21.5839 31.8326 16.1006 36.3826 11.5506C40.9326 7.00057 46.4159 4.66724 52.8326 4.66724Z"
            fill="white"
          />
          <path
            d="M3.29774 84C2.90174 84 2.59574 83.898 2.37974 83.694C2.17574 83.478 2.07374 83.172 2.07374 82.776V72.534C2.07374 72.138 2.17574 71.838 2.37974 71.634C2.59574 71.418 2.90174 71.31 3.29774 71.31H9.72374C10.0237 71.31 10.2517 71.388 10.4077 71.544C10.5757 71.7 10.6597 71.922 10.6597 72.21C10.6597 72.51 10.5757 72.744 10.4077 72.912C10.2517 73.068 10.0237 73.146 9.72374 73.146H4.28774V76.638H9.32774C9.63974 76.638 9.87374 76.716 10.0297 76.872C10.1857 77.028 10.2637 77.256 10.2637 77.556C10.2637 77.856 10.1857 78.084 10.0297 78.24C9.87374 78.396 9.63974 78.474 9.32774 78.474H4.28774V82.164H9.72374C10.0237 82.164 10.2517 82.242 10.4077 82.398C10.5757 82.554 10.6597 82.782 10.6597 83.082C10.6597 83.382 10.5757 83.61 10.4077 83.766C10.2517 83.922 10.0237 84 9.72374 84H3.29774ZM13.714 84.144C13.354 84.144 13.078 84.048 12.886 83.856C12.694 83.652 12.598 83.364 12.598 82.992V76.188C12.598 75.816 12.694 75.534 12.886 75.342C13.078 75.15 13.348 75.054 13.696 75.054C14.044 75.054 14.314 75.15 14.506 75.342C14.698 75.534 14.794 75.816 14.794 76.188V77.412L14.596 76.962C14.86 76.326 15.268 75.846 15.82 75.522C16.384 75.186 17.02 75.018 17.728 75.018C18.436 75.018 19.018 75.15 19.474 75.414C19.93 75.678 20.272 76.08 20.5 76.62C20.728 77.148 20.842 77.82 20.842 78.636V82.992C20.842 83.364 20.746 83.652 20.554 83.856C20.362 84.048 20.086 84.144 19.726 84.144C19.366 84.144 19.084 84.048 18.88 83.856C18.688 83.652 18.592 83.364 18.592 82.992V78.744C18.592 78.06 18.46 77.562 18.196 77.25C17.944 76.938 17.548 76.782 17.008 76.782C16.348 76.782 15.82 76.992 15.424 77.412C15.04 77.82 14.848 78.366 14.848 79.05V82.992C14.848 83.76 14.47 84.144 13.714 84.144ZM27.4653 84.18C26.4693 84.18 25.6113 83.994 24.8913 83.622C24.1713 83.25 23.6133 82.722 23.2173 82.038C22.8333 81.354 22.6413 80.544 22.6413 79.608C22.6413 78.696 22.8273 77.898 23.1993 77.214C23.5833 76.53 24.1053 75.996 24.7653 75.612C25.4373 75.216 26.1993 75.018 27.0513 75.018C27.6753 75.018 28.2333 75.12 28.7253 75.324C29.2293 75.528 29.6553 75.822 30.0033 76.206C30.3633 76.59 30.6333 77.058 30.8133 77.61C31.0053 78.15 31.1013 78.762 31.1013 79.446C31.1013 79.662 31.0233 79.83 30.8673 79.95C30.7233 80.058 30.5133 80.112 30.2373 80.112H24.4593V78.816H29.5173L29.2293 79.086C29.2293 78.534 29.1453 78.072 28.9773 77.7C28.8213 77.328 28.5873 77.046 28.2753 76.854C27.9753 76.65 27.5973 76.548 27.1413 76.548C26.6373 76.548 26.2053 76.668 25.8453 76.908C25.4973 77.136 25.2273 77.466 25.0353 77.898C24.8553 78.318 24.7653 78.822 24.7653 79.41V79.536C24.7653 80.52 24.9933 81.258 25.4493 81.75C25.9173 82.23 26.6013 82.47 27.5013 82.47C27.8133 82.47 28.1613 82.434 28.5453 82.362C28.9413 82.278 29.3133 82.14 29.6613 81.948C29.9133 81.804 30.1353 81.744 30.3273 81.768C30.5193 81.78 30.6693 81.846 30.7773 81.966C30.8973 82.086 30.9693 82.236 30.9933 82.416C31.0173 82.584 30.9813 82.758 30.8853 82.938C30.8013 83.118 30.6513 83.274 30.4353 83.406C30.0153 83.67 29.5293 83.868 28.9773 84C28.4373 84.12 27.9333 84.18 27.4653 84.18ZM34.0351 84.144C33.6631 84.144 33.3751 84.048 33.1711 83.856C32.9791 83.652 32.8831 83.364 32.8831 82.992V76.188C32.8831 75.816 32.9791 75.534 33.1711 75.342C33.3631 75.15 33.6331 75.054 33.9811 75.054C34.3291 75.054 34.5991 75.15 34.7911 75.342C34.9831 75.534 35.0791 75.816 35.0791 76.188V77.322H34.8991C35.0671 76.602 35.3971 76.056 35.8891 75.684C36.3811 75.312 37.0351 75.09 37.8511 75.018C38.1031 74.994 38.3011 75.06 38.4451 75.216C38.6011 75.36 38.6911 75.588 38.7151 75.9C38.7391 76.2 38.6671 76.446 38.4991 76.638C38.3431 76.818 38.1031 76.926 37.7791 76.962L37.3831 76.998C36.6511 77.07 36.0991 77.298 35.7271 77.682C35.3551 78.054 35.1691 78.582 35.1691 79.266V82.992C35.1691 83.364 35.0731 83.652 34.8811 83.856C34.6891 84.048 34.4071 84.144 34.0351 84.144ZM43.8953 87.42C43.2473 87.42 42.6173 87.36 42.0053 87.24C41.4053 87.12 40.8593 86.934 40.3673 86.682C40.1393 86.562 39.9833 86.418 39.8993 86.25C39.8273 86.082 39.8033 85.908 39.8273 85.728C39.8633 85.56 39.9353 85.41 40.0433 85.278C40.1633 85.146 40.3073 85.056 40.4753 85.008C40.6433 84.96 40.8173 84.984 40.9973 85.08C41.5253 85.344 42.0233 85.512 42.4913 85.584C42.9713 85.668 43.3793 85.71 43.7153 85.71C44.5193 85.71 45.1193 85.512 45.5153 85.116C45.9233 84.732 46.1273 84.156 46.1273 83.388V81.768H46.2893C46.1093 82.38 45.7313 82.872 45.1553 83.244C44.5913 83.604 43.9493 83.784 43.2293 83.784C42.4373 83.784 41.7473 83.604 41.1593 83.244C40.5713 82.872 40.1153 82.356 39.7913 81.696C39.4673 81.036 39.3053 80.268 39.3053 79.392C39.3053 78.732 39.3953 78.138 39.5753 77.61C39.7673 77.07 40.0313 76.608 40.3673 76.224C40.7153 75.84 41.1293 75.546 41.6093 75.342C42.1013 75.126 42.6413 75.018 43.2293 75.018C43.9733 75.018 44.6213 75.204 45.1733 75.576C45.7373 75.936 46.1033 76.416 46.2713 77.016L46.0913 77.466V76.188C46.0913 75.816 46.1873 75.534 46.3793 75.342C46.5833 75.15 46.8593 75.054 47.2073 75.054C47.5673 75.054 47.8433 75.15 48.0353 75.342C48.2273 75.534 48.3233 75.816 48.3233 76.188V83.118C48.3233 84.546 47.9453 85.62 47.1893 86.34C46.4333 87.06 45.3353 87.42 43.8953 87.42ZM43.8413 82.074C44.3093 82.074 44.7113 81.966 45.0473 81.75C45.3833 81.534 45.6413 81.228 45.8213 80.832C46.0133 80.424 46.1093 79.944 46.1093 79.392C46.1093 78.564 45.9053 77.916 45.4973 77.448C45.0893 76.968 44.5373 76.728 43.8413 76.728C43.3733 76.728 42.9713 76.836 42.6353 77.052C42.2993 77.268 42.0353 77.574 41.8433 77.97C41.6633 78.366 41.5733 78.84 41.5733 79.392C41.5733 80.22 41.7773 80.874 42.1853 81.354C42.5933 81.834 43.1453 82.074 43.8413 82.074ZM51.7706 84.126C51.4106 84.126 51.1346 84.018 50.9426 83.802C50.7506 83.586 50.6546 83.286 50.6546 82.902V76.296C50.6546 75.9 50.7506 75.6 50.9426 75.396C51.1346 75.18 51.4106 75.072 51.7706 75.072C52.1306 75.072 52.4066 75.18 52.5986 75.396C52.8026 75.6 52.9046 75.9 52.9046 76.296V82.902C52.9046 83.286 52.8086 83.586 52.6166 83.802C52.4246 84.018 52.1426 84.126 51.7706 84.126ZM51.7706 73.398C51.3506 73.398 51.0206 73.296 50.7806 73.092C50.5526 72.876 50.4386 72.582 50.4386 72.21C50.4386 71.826 50.5526 71.532 50.7806 71.328C51.0206 71.124 51.3506 71.022 51.7706 71.022C52.2026 71.022 52.5326 71.124 52.7606 71.328C52.9886 71.532 53.1026 71.826 53.1026 72.21C53.1026 72.582 52.9886 72.876 52.7606 73.092C52.5326 73.296 52.2026 73.398 51.7706 73.398ZM55.7825 84C55.5545 84 55.3625 83.946 55.2065 83.838C55.0625 83.718 54.9665 83.568 54.9185 83.388C54.8705 83.208 54.8705 83.016 54.9185 82.812C54.9785 82.596 55.0925 82.392 55.2605 82.2L59.9225 76.35V76.89H55.6745C55.3985 76.89 55.1825 76.818 55.0265 76.674C54.8825 76.518 54.8105 76.308 54.8105 76.044C54.8105 75.768 54.8825 75.558 55.0265 75.414C55.1825 75.27 55.3985 75.198 55.6745 75.198H61.0025C61.2665 75.198 61.4825 75.258 61.6505 75.378C61.8185 75.486 61.9265 75.63 61.9745 75.81C62.0345 75.99 62.0405 76.182 61.9925 76.386C61.9445 76.59 61.8365 76.782 61.6685 76.962L56.9165 82.902V82.308H61.4165C61.9925 82.308 62.2805 82.59 62.2805 83.154C62.2805 83.418 62.2025 83.628 62.0465 83.784C61.9025 83.928 61.6925 84 61.4165 84H55.7825ZM66.578 84.18C65.942 84.18 65.372 84.06 64.868 83.82C64.376 83.568 63.986 83.232 63.698 82.812C63.422 82.392 63.284 81.918 63.284 81.39C63.284 80.742 63.452 80.232 63.788 79.86C64.124 79.476 64.67 79.2 65.426 79.032C66.182 78.864 67.196 78.78 68.468 78.78H69.368V80.076H68.486C67.742 80.076 67.148 80.112 66.704 80.184C66.26 80.256 65.942 80.382 65.75 80.562C65.57 80.73 65.48 80.97 65.48 81.282C65.48 81.678 65.618 82.002 65.894 82.254C66.17 82.506 66.554 82.632 67.046 82.632C67.442 82.632 67.79 82.542 68.09 82.362C68.402 82.17 68.648 81.912 68.828 81.588C69.008 81.264 69.098 80.892 69.098 80.472V78.402C69.098 77.802 68.966 77.37 68.702 77.106C68.438 76.842 67.994 76.71 67.37 76.71C67.022 76.71 66.644 76.752 66.236 76.836C65.84 76.92 65.42 77.064 64.976 77.268C64.748 77.376 64.544 77.406 64.364 77.358C64.196 77.31 64.064 77.214 63.968 77.07C63.872 76.914 63.824 76.746 63.824 76.566C63.824 76.386 63.872 76.212 63.968 76.044C64.064 75.864 64.226 75.732 64.454 75.648C65.006 75.42 65.534 75.258 66.038 75.162C66.554 75.066 67.022 75.018 67.442 75.018C68.306 75.018 69.014 75.15 69.566 75.414C70.13 75.678 70.55 76.08 70.826 76.62C71.102 77.148 71.24 77.832 71.24 78.672V82.992C71.24 83.364 71.15 83.652 70.97 83.856C70.79 84.048 70.532 84.144 70.196 84.144C69.86 84.144 69.596 84.048 69.404 83.856C69.224 83.652 69.134 83.364 69.134 82.992V82.128H69.278C69.194 82.548 69.026 82.914 68.774 83.226C68.534 83.526 68.228 83.76 67.856 83.928C67.484 84.096 67.058 84.18 66.578 84.18ZM77.5558 84.18C76.7758 84.18 76.1218 84.048 75.5938 83.784C75.0778 83.52 74.6938 83.136 74.4418 82.632C74.1898 82.116 74.0638 81.48 74.0638 80.724V76.89H73.1278C72.8398 76.89 72.6178 76.818 72.4618 76.674C72.3058 76.518 72.2278 76.308 72.2278 76.044C72.2278 75.768 72.3058 75.558 72.4618 75.414C72.6178 75.27 72.8398 75.198 73.1278 75.198H74.0638V73.56C74.0638 73.188 74.1598 72.906 74.3518 72.714C74.5558 72.522 74.8378 72.426 75.1978 72.426C75.5578 72.426 75.8338 72.522 76.0258 72.714C76.2178 72.906 76.3138 73.188 76.3138 73.56V75.198H78.2218C78.5098 75.198 78.7318 75.27 78.8878 75.414C79.0438 75.558 79.1218 75.768 79.1218 76.044C79.1218 76.308 79.0438 76.518 78.8878 76.674C78.7318 76.818 78.5098 76.89 78.2218 76.89H76.3138V80.598C76.3138 81.174 76.4398 81.606 76.6918 81.894C76.9438 82.182 77.3518 82.326 77.9158 82.326C78.1198 82.326 78.2998 82.308 78.4558 82.272C78.6118 82.236 78.7498 82.212 78.8698 82.2C79.0138 82.188 79.1338 82.236 79.2298 82.344C79.3258 82.44 79.3738 82.644 79.3738 82.956C79.3738 83.196 79.3318 83.412 79.2478 83.604C79.1758 83.784 79.0378 83.91 78.8338 83.982C78.6778 84.03 78.4738 84.072 78.2218 84.108C77.9698 84.156 77.7478 84.18 77.5558 84.18ZM81.7765 84.126C81.4165 84.126 81.1405 84.018 80.9485 83.802C80.7565 83.586 80.6605 83.286 80.6605 82.902V76.296C80.6605 75.9 80.7565 75.6 80.9485 75.396C81.1405 75.18 81.4165 75.072 81.7765 75.072C82.1365 75.072 82.4125 75.18 82.6045 75.396C82.8085 75.6 82.9105 75.9 82.9105 76.296V82.902C82.9105 83.286 82.8145 83.586 82.6225 83.802C82.4305 84.018 82.1485 84.126 81.7765 84.126ZM81.7765 73.398C81.3565 73.398 81.0265 73.296 80.7865 73.092C80.5585 72.876 80.4445 72.582 80.4445 72.21C80.4445 71.826 80.5585 71.532 80.7865 71.328C81.0265 71.124 81.3565 71.022 81.7765 71.022C82.2085 71.022 82.5385 71.124 82.7665 71.328C82.9945 71.532 83.1085 71.826 83.1085 72.21C83.1085 72.582 82.9945 72.876 82.7665 73.092C82.5385 73.296 82.2085 73.398 81.7765 73.398ZM89.2624 84.18C88.3504 84.18 87.5584 83.994 86.8864 83.622C86.2144 83.25 85.6924 82.722 85.3204 82.038C84.9484 81.342 84.7624 80.526 84.7624 79.59C84.7624 78.882 84.8644 78.252 85.0684 77.7C85.2844 77.136 85.5904 76.656 85.9864 76.26C86.3824 75.852 86.8564 75.546 87.4084 75.342C87.9604 75.126 88.5784 75.018 89.2624 75.018C90.1744 75.018 90.9664 75.204 91.6384 75.576C92.3104 75.948 92.8324 76.476 93.2044 77.16C93.5764 77.844 93.7624 78.654 93.7624 79.59C93.7624 80.298 93.6544 80.934 93.4384 81.498C93.2344 82.062 92.9344 82.548 92.5384 82.956C92.1424 83.352 91.6684 83.658 91.1164 83.874C90.5644 84.078 89.9464 84.18 89.2624 84.18ZM89.2624 82.47C89.7064 82.47 90.0964 82.362 90.4324 82.146C90.7684 81.93 91.0264 81.612 91.2064 81.192C91.3984 80.76 91.4944 80.226 91.4944 79.59C91.4944 78.63 91.2904 77.916 90.8824 77.448C90.4744 76.968 89.9344 76.728 89.2624 76.728C88.8184 76.728 88.4284 76.836 88.0924 77.052C87.7564 77.256 87.4924 77.574 87.3004 78.006C87.1204 78.426 87.0304 78.954 87.0304 79.59C87.0304 80.538 87.2344 81.258 87.6424 81.75C88.0504 82.23 88.5904 82.47 89.2624 82.47ZM96.7355 84.144C96.3755 84.144 96.0995 84.048 95.9075 83.856C95.7155 83.652 95.6195 83.364 95.6195 82.992V76.188C95.6195 75.816 95.7155 75.534 95.9075 75.342C96.0995 75.15 96.3695 75.054 96.7175 75.054C97.0655 75.054 97.3355 75.15 97.5275 75.342C97.7195 75.534 97.8155 75.816 97.8155 76.188V77.412L97.6175 76.962C97.8815 76.326 98.2895 75.846 98.8415 75.522C99.4055 75.186 100.041 75.018 100.749 75.018C101.457 75.018 102.039 75.15 102.495 75.414C102.951 75.678 103.293 76.08 103.521 76.62C103.749 77.148 103.863 77.82 103.863 78.636V82.992C103.863 83.364 103.767 83.652 103.575 83.856C103.383 84.048 103.107 84.144 102.747 84.144C102.387 84.144 102.105 84.048 101.901 83.856C101.709 83.652 101.613 83.364 101.613 82.992V78.744C101.613 78.06 101.481 77.562 101.217 77.25C100.965 76.938 100.569 76.782 100.029 76.782C99.3695 76.782 98.8415 76.992 98.4455 77.412C98.0615 77.82 97.8695 78.366 97.8695 79.05V82.992C97.8695 83.76 97.4915 84.144 96.7355 84.144Z"
            fill="white"
          />
        </svg>

        <div className="flex flex-col justify-center items-center gap-[8px] text-[18px] font-medium text-white">
          <img
            src={img1}
            alt=""
            className="w-[56px] h-[56px] rounded-full"
            loading="lazy"
          />
          <p>100% Satisfation </p>
        </div>

        <svg
          width="111"
          height="92"
          viewBox="0 0 111 92"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="27.5" width="56" height="56" rx="28" fill="white" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M37.5 14.5426C37.5 14.1335 37.6724 13.7411 37.9793 13.4518C38.2862 13.1625 38.7024 13 39.1364 13H57.1364C57.5704 13 57.9866 13.1625 58.2934 13.4518C58.6003 13.7411 58.7727 14.1335 58.7727 14.5426V22.2557H65.3182C66.3926 22.2557 67.4566 22.4552 68.4492 22.8428C69.4419 23.2304 70.3438 23.7986 71.1036 24.5148C71.8634 25.231 72.466 26.0813 72.8772 27.0171C73.2884 27.9529 73.5 28.9559 73.5 29.9688V36.1393C73.5002 37.1323 73.1616 38.0991 72.5343 38.8969C71.907 39.6947 71.0241 40.2811 70.0162 40.5697C69.7161 41.5029 69.1109 42.323 68.287 42.9128C67.4631 43.5025 66.4627 43.8319 65.4284 43.8538C64.3942 43.8757 63.3791 43.589 62.5279 43.0347C61.6768 42.4804 61.0332 41.6868 60.6889 40.7671H50.3127C49.9685 41.6868 49.3248 42.4804 48.4737 43.0347C47.6226 43.589 46.6074 43.8757 45.5732 43.8538C44.539 43.8319 43.5385 43.5025 42.7146 42.9128C41.8908 42.323 41.2856 41.5029 40.9855 40.5697C39.9772 40.2814 39.094 39.695 38.4664 38.8973C37.8387 38.0995 37.4999 37.1325 37.5 36.1393V29.9688H47.3182C47.7522 29.9688 48.1684 29.8063 48.4753 29.517C48.7821 29.2277 48.9545 28.8353 48.9545 28.4262C48.9545 28.017 48.7821 27.6247 48.4753 27.3354C48.1684 27.0461 47.7522 26.8836 47.3182 26.8836H37.5V23.7983H44.0455C44.4794 23.7983 44.8957 23.6358 45.2025 23.3465C45.5094 23.0572 45.6818 22.6648 45.6818 22.2557C45.6818 21.8466 45.5094 21.4542 45.2025 21.1649C44.8957 20.8756 44.4794 20.7131 44.0455 20.7131H37.5V14.5426ZM58.7727 37.6819H60.6889C61.0124 36.8187 61.6002 36.0654 62.3779 35.5172C63.1557 34.969 64.0884 34.6505 65.0581 34.6022C66.0279 34.5538 66.9911 34.7776 67.8258 35.2454C68.6606 35.7131 69.3295 36.4037 69.7478 37.2299C69.9 37.0868 70.0207 36.9168 70.103 36.7297C70.1852 36.5425 70.2275 36.3419 70.2273 36.1393V29.9688C70.2273 28.7414 69.7101 27.5643 68.7894 26.6964C67.8688 25.8285 66.6202 25.3409 65.3182 25.3409H58.7727V37.6819ZM47.3182 39.2245C47.3182 38.8154 47.1458 38.423 46.8389 38.1337C46.532 37.8444 46.1158 37.6819 45.6818 37.6819C45.2478 37.6819 44.8316 37.8444 44.5247 38.1337C44.2179 38.423 44.0455 38.8154 44.0455 39.2245C44.0455 39.6336 44.2179 40.026 44.5247 40.3153C44.8316 40.6046 45.2478 40.7671 45.6818 40.7671C46.1158 40.7671 46.532 40.6046 46.8389 40.3153C47.1458 40.026 47.3182 39.6336 47.3182 39.2245ZM64.1613 38.1339C64.0089 38.2768 63.888 38.4467 63.8057 38.6339C63.7234 38.8211 63.6813 39.0219 63.6818 39.2245C63.6817 39.5814 63.8129 39.9273 64.053 40.2032C64.2932 40.4791 64.6273 40.6681 64.9986 40.7377C65.3699 40.8074 65.7554 40.7536 66.0893 40.5854C66.4232 40.4173 66.6849 40.1451 66.8299 39.8154C66.9748 39.4857 66.994 39.1188 66.8842 38.7773C66.7743 38.4357 66.5423 38.1407 66.2275 37.9423C65.9128 37.744 65.5348 37.6547 65.1581 37.6896C64.7813 37.7245 64.429 37.8815 64.1613 38.1339Z"
            fill="#0064D6"
          />
          <path
            d="M3.05447 84.144C2.68247 84.144 2.38847 84.042 2.17247 83.838C1.96847 83.622 1.86647 83.316 1.86647 82.92V72.534C1.86647 72.138 1.96847 71.838 2.17247 71.634C2.38847 71.418 2.69447 71.31 3.09047 71.31H9.37247C9.68447 71.31 9.91847 71.388 10.0745 71.544C10.2305 71.7 10.3085 71.922 10.3085 72.21C10.3085 72.51 10.2305 72.744 10.0745 72.912C9.91847 73.068 9.68447 73.146 9.37247 73.146H4.17047V76.728H8.99447C9.29447 76.728 9.52247 76.806 9.67847 76.962C9.84647 77.118 9.93047 77.34 9.93047 77.628C9.93047 77.928 9.84647 78.162 9.67847 78.33C9.52247 78.486 9.29447 78.564 8.99447 78.564H4.17047V82.92C4.17047 83.736 3.79847 84.144 3.05447 84.144ZM14.3043 84.18C13.6683 84.18 13.0983 84.06 12.5943 83.82C12.1023 83.568 11.7123 83.232 11.4243 82.812C11.1483 82.392 11.0103 81.918 11.0103 81.39C11.0103 80.742 11.1783 80.232 11.5143 79.86C11.8503 79.476 12.3963 79.2 13.1523 79.032C13.9083 78.864 14.9223 78.78 16.1943 78.78H17.0943V80.076H16.2123C15.4683 80.076 14.8743 80.112 14.4303 80.184C13.9863 80.256 13.6683 80.382 13.4763 80.562C13.2963 80.73 13.2063 80.97 13.2063 81.282C13.2063 81.678 13.3443 82.002 13.6203 82.254C13.8963 82.506 14.2803 82.632 14.7723 82.632C15.1683 82.632 15.5163 82.542 15.8163 82.362C16.1283 82.17 16.3743 81.912 16.5543 81.588C16.7343 81.264 16.8243 80.892 16.8243 80.472V78.402C16.8243 77.802 16.6923 77.37 16.4283 77.106C16.1643 76.842 15.7203 76.71 15.0963 76.71C14.7483 76.71 14.3703 76.752 13.9623 76.836C13.5663 76.92 13.1463 77.064 12.7023 77.268C12.4743 77.376 12.2703 77.406 12.0903 77.358C11.9223 77.31 11.7903 77.214 11.6943 77.07C11.5983 76.914 11.5503 76.746 11.5503 76.566C11.5503 76.386 11.5983 76.212 11.6943 76.044C11.7903 75.864 11.9523 75.732 12.1803 75.648C12.7323 75.42 13.2603 75.258 13.7643 75.162C14.2803 75.066 14.7483 75.018 15.1683 75.018C16.0323 75.018 16.7403 75.15 17.2923 75.414C17.8563 75.678 18.2763 76.08 18.5523 76.62C18.8283 77.148 18.9663 77.832 18.9663 78.672V82.992C18.9663 83.364 18.8763 83.652 18.6963 83.856C18.5163 84.048 18.2583 84.144 17.9223 84.144C17.5863 84.144 17.3223 84.048 17.1303 83.856C16.9503 83.652 16.8603 83.364 16.8603 82.992V82.128H17.0043C16.9203 82.548 16.7523 82.914 16.5003 83.226C16.2603 83.526 15.9543 83.76 15.5823 83.928C15.2103 84.096 14.7843 84.18 14.3043 84.18ZM24.4721 84.18C23.9561 84.18 23.4101 84.126 22.8341 84.018C22.2581 83.91 21.7421 83.724 21.2861 83.46C21.0941 83.34 20.9561 83.202 20.8721 83.046C20.8001 82.878 20.7701 82.716 20.7821 82.56C20.8061 82.392 20.8661 82.248 20.9621 82.128C21.0701 82.008 21.2021 81.93 21.3581 81.894C21.5261 81.858 21.7061 81.888 21.8981 81.984C22.3781 82.212 22.8281 82.374 23.2481 82.47C23.6681 82.554 24.0821 82.596 24.4901 82.596C25.0661 82.596 25.4921 82.5 25.7681 82.308C26.0561 82.104 26.2001 81.84 26.2001 81.516C26.2001 81.24 26.1041 81.03 25.9121 80.886C25.7321 80.73 25.4561 80.616 25.0841 80.544L23.2841 80.202C22.5401 80.058 21.9701 79.788 21.5741 79.392C21.1901 78.984 20.9981 78.462 20.9981 77.826C20.9981 77.25 21.1541 76.752 21.4661 76.332C21.7901 75.912 22.2341 75.588 22.7981 75.36C23.3621 75.132 24.0101 75.018 24.7421 75.018C25.2701 75.018 25.7621 75.078 26.2181 75.198C26.6861 75.306 27.1361 75.48 27.5681 75.72C27.7481 75.816 27.8681 75.942 27.9281 76.098C28.0001 76.254 28.0181 76.416 27.9821 76.584C27.9461 76.74 27.8741 76.884 27.7661 77.016C27.6581 77.136 27.5201 77.214 27.3521 77.25C27.1961 77.274 27.0161 77.238 26.8121 77.142C26.4401 76.95 26.0801 76.812 25.7321 76.728C25.3961 76.644 25.0721 76.602 24.7601 76.602C24.1721 76.602 23.7341 76.704 23.4461 76.908C23.1701 77.112 23.0321 77.382 23.0321 77.718C23.0321 77.97 23.1161 78.18 23.2841 78.348C23.4521 78.516 23.7101 78.63 24.0581 78.69L25.8581 79.032C26.6381 79.176 27.2261 79.44 27.6221 79.824C28.0301 80.208 28.2341 80.724 28.2341 81.372C28.2341 82.248 27.8921 82.938 27.2081 83.442C26.5241 83.934 25.6121 84.18 24.4721 84.18ZM33.9833 84.18C33.2033 84.18 32.5493 84.048 32.0213 83.784C31.5053 83.52 31.1213 83.136 30.8693 82.632C30.6173 82.116 30.4913 81.48 30.4913 80.724V76.89H29.5553C29.2673 76.89 29.0453 76.818 28.8893 76.674C28.7332 76.518 28.6552 76.308 28.6552 76.044C28.6552 75.768 28.7332 75.558 28.8893 75.414C29.0453 75.27 29.2673 75.198 29.5553 75.198H30.4913V73.56C30.4913 73.188 30.5873 72.906 30.7793 72.714C30.9833 72.522 31.2653 72.426 31.6253 72.426C31.9853 72.426 32.2613 72.522 32.4533 72.714C32.6453 72.906 32.7413 73.188 32.7413 73.56V75.198H34.6493C34.9373 75.198 35.1593 75.27 35.3153 75.414C35.4713 75.558 35.5493 75.768 35.5493 76.044C35.5493 76.308 35.4713 76.518 35.3153 76.674C35.1593 76.818 34.9373 76.89 34.6493 76.89H32.7413V80.598C32.7413 81.174 32.8673 81.606 33.1193 81.894C33.3713 82.182 33.7793 82.326 34.3433 82.326C34.5473 82.326 34.7273 82.308 34.8833 82.272C35.0393 82.236 35.1773 82.212 35.2973 82.2C35.4413 82.188 35.5613 82.236 35.6573 82.344C35.7533 82.44 35.8013 82.644 35.8013 82.956C35.8013 83.196 35.7593 83.412 35.6753 83.604C35.6033 83.784 35.4653 83.91 35.2613 83.982C35.1053 84.03 34.9013 84.072 34.6493 84.108C34.3973 84.156 34.1753 84.18 33.9833 84.18ZM43.1862 84C42.7902 84 42.4842 83.898 42.2682 83.694C42.0642 83.478 41.9622 83.172 41.9622 82.776V72.534C41.9622 72.138 42.0642 71.838 42.2682 71.634C42.4842 71.418 42.7902 71.31 43.1862 71.31H46.6782C48.8022 71.31 50.4402 71.856 51.5922 72.948C52.7562 74.04 53.3382 75.606 53.3382 77.646C53.3382 78.666 53.1882 79.572 52.8882 80.364C52.6002 81.144 52.1682 81.804 51.5922 82.344C51.0282 82.884 50.3322 83.298 49.5042 83.586C48.6882 83.862 47.7462 84 46.6782 84H43.1862ZM44.2662 82.092H46.5342C47.2782 82.092 47.9202 82.002 48.4602 81.822C49.0122 81.63 49.4682 81.354 49.8282 80.994C50.2002 80.622 50.4762 80.16 50.6562 79.608C50.8362 79.044 50.9262 78.39 50.9262 77.646C50.9262 76.158 50.5602 75.048 49.8282 74.316C49.0962 73.584 47.9982 73.218 46.5342 73.218H44.2662V82.092ZM59.7951 84.18C58.7991 84.18 57.9411 83.994 57.2211 83.622C56.5011 83.25 55.9431 82.722 55.5471 82.038C55.1631 81.354 54.9711 80.544 54.9711 79.608C54.9711 78.696 55.1571 77.898 55.5291 77.214C55.9131 76.53 56.4351 75.996 57.0951 75.612C57.7671 75.216 58.5291 75.018 59.3811 75.018C60.0051 75.018 60.5631 75.12 61.0551 75.324C61.5591 75.528 61.9851 75.822 62.3331 76.206C62.6931 76.59 62.9631 77.058 63.1431 77.61C63.3351 78.15 63.4311 78.762 63.4311 79.446C63.4311 79.662 63.3531 79.83 63.1971 79.95C63.0531 80.058 62.8431 80.112 62.5671 80.112H56.7891V78.816H61.8471L61.5591 79.086C61.5591 78.534 61.4751 78.072 61.3071 77.7C61.1511 77.328 60.9171 77.046 60.6051 76.854C60.3051 76.65 59.9271 76.548 59.4711 76.548C58.9671 76.548 58.5351 76.668 58.1751 76.908C57.8271 77.136 57.5571 77.466 57.3651 77.898C57.1851 78.318 57.0951 78.822 57.0951 79.41V79.536C57.0951 80.52 57.3231 81.258 57.7791 81.75C58.2471 82.23 58.9311 82.47 59.8311 82.47C60.1431 82.47 60.4911 82.434 60.8751 82.362C61.2711 82.278 61.6431 82.14 61.9911 81.948C62.2431 81.804 62.4651 81.744 62.6571 81.768C62.8491 81.78 62.9991 81.846 63.1071 81.966C63.2271 82.086 63.2991 82.236 63.3231 82.416C63.3471 82.584 63.3111 82.758 63.2151 82.938C63.1311 83.118 62.9811 83.274 62.7651 83.406C62.3451 83.67 61.8591 83.868 61.3071 84C60.7671 84.12 60.2631 84.18 59.7951 84.18ZM68.219 84.18C67.223 84.18 66.473 83.898 65.969 83.334C65.465 82.758 65.213 81.918 65.213 80.814V72.3C65.213 71.928 65.309 71.646 65.501 71.454C65.693 71.262 65.969 71.166 66.329 71.166C66.689 71.166 66.965 71.262 67.157 71.454C67.361 71.646 67.463 71.928 67.463 72.3V80.706C67.463 81.258 67.577 81.666 67.805 81.93C68.045 82.194 68.381 82.326 68.813 82.326C68.909 82.326 68.999 82.326 69.083 82.326C69.167 82.314 69.251 82.302 69.335 82.29C69.503 82.266 69.617 82.314 69.677 82.434C69.737 82.542 69.767 82.77 69.767 83.118C69.767 83.418 69.707 83.652 69.587 83.82C69.467 83.988 69.269 84.09 68.993 84.126C68.873 84.138 68.747 84.15 68.615 84.162C68.483 84.174 68.351 84.18 68.219 84.18ZM72.077 84.126C71.717 84.126 71.441 84.018 71.249 83.802C71.057 83.586 70.961 83.286 70.961 82.902V76.296C70.961 75.9 71.057 75.6 71.249 75.396C71.441 75.18 71.717 75.072 72.077 75.072C72.437 75.072 72.713 75.18 72.905 75.396C73.109 75.6 73.211 75.9 73.211 76.296V82.902C73.211 83.286 73.115 83.586 72.923 83.802C72.731 84.018 72.449 84.126 72.077 84.126ZM72.077 73.398C71.657 73.398 71.327 73.296 71.087 73.092C70.859 72.876 70.745 72.582 70.745 72.21C70.745 71.826 70.859 71.532 71.087 71.328C71.327 71.124 71.657 71.022 72.077 71.022C72.509 71.022 72.839 71.124 73.067 71.328C73.295 71.532 73.409 71.826 73.409 72.21C73.409 72.582 73.295 72.876 73.067 73.092C72.839 73.296 72.509 73.398 72.077 73.398ZM79.1129 84.144C78.8129 84.144 78.5489 84.066 78.3209 83.91C78.1049 83.754 77.9249 83.514 77.7809 83.19L74.9189 76.548C74.8109 76.284 74.7689 76.038 74.7929 75.81C74.8289 75.582 74.9369 75.402 75.1169 75.27C75.3089 75.126 75.5669 75.054 75.8909 75.054C76.1669 75.054 76.3889 75.12 76.5569 75.252C76.7249 75.372 76.8749 75.606 77.0069 75.954L79.4369 82.02H78.8969L81.3989 75.936C81.5309 75.6 81.6809 75.372 81.8489 75.252C82.0289 75.12 82.2689 75.054 82.5689 75.054C82.8329 75.054 83.0429 75.126 83.1989 75.27C83.3549 75.402 83.4509 75.582 83.4869 75.81C83.5229 76.026 83.4809 76.266 83.3609 76.53L80.4449 83.19C80.3129 83.514 80.1329 83.754 79.9049 83.91C79.6889 84.066 79.4249 84.144 79.1129 84.144ZM89.2033 84.18C88.2073 84.18 87.3493 83.994 86.6293 83.622C85.9093 83.25 85.3513 82.722 84.9553 82.038C84.5713 81.354 84.3793 80.544 84.3793 79.608C84.3793 78.696 84.5653 77.898 84.9373 77.214C85.3213 76.53 85.8433 75.996 86.5033 75.612C87.1753 75.216 87.9373 75.018 88.7893 75.018C89.4133 75.018 89.9713 75.12 90.4633 75.324C90.9673 75.528 91.3933 75.822 91.7413 76.206C92.1013 76.59 92.3713 77.058 92.5513 77.61C92.7433 78.15 92.8393 78.762 92.8393 79.446C92.8393 79.662 92.7613 79.83 92.6053 79.95C92.4613 80.058 92.2513 80.112 91.9753 80.112H86.1973V78.816H91.2553L90.9673 79.086C90.9673 78.534 90.8833 78.072 90.7153 77.7C90.5593 77.328 90.3253 77.046 90.0133 76.854C89.7133 76.65 89.3353 76.548 88.8793 76.548C88.3753 76.548 87.9433 76.668 87.5833 76.908C87.2353 77.136 86.9653 77.466 86.7733 77.898C86.5933 78.318 86.5033 78.822 86.5033 79.41V79.536C86.5033 80.52 86.7313 81.258 87.1873 81.75C87.6553 82.23 88.3393 82.47 89.2393 82.47C89.5513 82.47 89.8993 82.434 90.2833 82.362C90.6793 82.278 91.0513 82.14 91.3993 81.948C91.6513 81.804 91.8733 81.744 92.0653 81.768C92.2573 81.78 92.4073 81.846 92.5153 81.966C92.6353 82.086 92.7073 82.236 92.7313 82.416C92.7553 82.584 92.7193 82.758 92.6233 82.938C92.5393 83.118 92.3893 83.274 92.1733 83.406C91.7533 83.67 91.2673 83.868 90.7153 84C90.1753 84.12 89.6713 84.18 89.2033 84.18ZM95.7732 84.144C95.4012 84.144 95.1132 84.048 94.9092 83.856C94.7172 83.652 94.6212 83.364 94.6212 82.992V76.188C94.6212 75.816 94.7172 75.534 94.9092 75.342C95.1012 75.15 95.3712 75.054 95.7192 75.054C96.0672 75.054 96.3372 75.15 96.5292 75.342C96.7212 75.534 96.8172 75.816 96.8172 76.188V77.322H96.6372C96.8052 76.602 97.1352 76.056 97.6272 75.684C98.1192 75.312 98.7732 75.09 99.5892 75.018C99.8412 74.994 100.039 75.06 100.183 75.216C100.339 75.36 100.429 75.588 100.453 75.9C100.477 76.2 100.405 76.446 100.237 76.638C100.081 76.818 99.8412 76.926 99.5172 76.962L99.1212 76.998C98.3892 77.07 97.8372 77.298 97.4652 77.682C97.0932 78.054 96.9072 78.582 96.9072 79.266V82.992C96.9072 83.364 96.8112 83.652 96.6192 83.856C96.4272 84.048 96.1452 84.144 95.7732 84.144ZM104.447 87.384C104.183 87.384 103.967 87.312 103.799 87.168C103.631 87.036 103.529 86.856 103.493 86.628C103.469 86.4 103.511 86.16 103.619 85.908L104.843 83.19V84.126L101.567 76.548C101.459 76.284 101.423 76.038 101.459 75.81C101.495 75.582 101.603 75.402 101.783 75.27C101.975 75.126 102.233 75.054 102.557 75.054C102.833 75.054 103.055 75.12 103.223 75.252C103.391 75.372 103.541 75.606 103.673 75.954L106.103 82.02H105.563L108.047 75.936C108.179 75.6 108.335 75.372 108.515 75.252C108.695 75.12 108.935 75.054 109.235 75.054C109.499 75.054 109.709 75.126 109.865 75.27C110.021 75.402 110.117 75.582 110.153 75.81C110.189 76.026 110.147 76.266 110.027 76.53L105.653 86.52C105.497 86.856 105.329 87.084 105.149 87.204C104.969 87.324 104.735 87.384 104.447 87.384Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="flex gap-[26px]">
        {banner_data.map((data, index) => (
          <div
            className="h-[503px] w-[312px] flex flex-col items-center justify-end gap-[5px] pb-[20px] "
            key={index}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.48)), url(${data.img})`,
            }}
          >
            <p className="font-semibold text-white text-[30px] font-serif">
              {data.title}
            </p>
            <p className="font-bold text-white text-[16px] cursor-pointer  ">
              Shop Now
            </p>
          </div>
        ))}
      </div>

      <div
        className="w-[92vw] h-[408px] bg-cover bg-no-repeat flex  items-center justify-center  "
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <div className="  relative left-[170px]">
          <div className="">
            <p className="text-[48px] font-serif font-semibold">
              Consult with an Astrologer
            </p>
          </div>

          <div className="w-[70%] flex flex-col items-start gap-[24px]">
            <p className="text-18px font-semibold leading-[28px] text-start">
              Connect with our Gem Experts with years of experience in types of
              vedic astrology for best consultation
            </p>
            <div className="flex gap-[24px]">
              <button
                className={`py-[6px] px-[12px] bg-[#FE7235] text-white rounded-lg text-[14px]`}
              >
                Call Astrologer
              </button>
              <button
                className={`py-[6px] px-[12px] bg-[#E5F1FF] text-black rounded-lg text-[14px] `}
              >
                Chat with Astrologer
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[92vw] custom-xl-max:w-[85vw] flex flex-col gap-[32px]">
        <h1 className="font-serif font-semibold text-3xl">
          Select Based on Categories
        </h1>

        <div
          className="flex gap-[24px] overflow-x-auto"
          style={{ scrollbarWidth: "none" }}
        >
          {categories_btn_data.map((data, index) => (
            <div key={index}>
              <Categories_button
                text={data}
                setcategories={setcategories}
                categories={categories}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col ">
          <Carousel
            className="pb-[54px] carousel_categories"
            ref={carouselRef}
            slidesToShow={5}
            autoplay
            autoplaySpeed={2000}
            responsive={[
              {
                breakpoint: 1345,
                settings: {
                  slidesToShow: 4,
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
            {card_data.map((data, index) => (
              <div className="" key={index}>
                <Cardcategories
                  title={data.title}
                  star_sign={data.star_sign}
                  para={data.para}
                  image={data.image}
                  key={index}
                  card_data={card_data}
                />
              </div>
            ))}
          </Carousel>

          <div className="flex gap-5">
            <MdKeyboardArrowLeft
              onClick={handlePrev}
              className="h-[40px] w-[40px] cursor-pointer"
            />
            <MdKeyboardArrowRight
              onClick={handleNext}
              className="h-[40px] w-[40px] cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="w-11/12 bg-[#0064D6] flex p-[50px] items-center justify-between">
        <div className="w-[40%]  flex flex-col text-white gap-4">
          <p className="font-semibold text-[36px] leading-[40px] font-serif ">
            Confused about which gemstone to buy?
          </p>
          <p className="font-light text-[18px] leading-[28px]">
            Unlock the secrets of celestial wisdom! Connect with our expert
            astrologer for personalized gemstone guidance and embark on a
            journey of cosmic alignment
          </p>
        </div>

        <div className="">
          <Form />
        </div>
      </div>

      <div className="w-[92vw] custom-xl-max:w-[92vw] flex flex-col gap-[32px]">
        <h1 className="font-serif font-semibold text-3xl">Customer Reviews</h1>
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
      </div>

      <div className="flex flex-col gap-[32px] w-[92vw] custom-xl-max:w-[85vw]">
        <h1 className="font-serif font-semibold text-3xl">Other Services</h1>

        <div className="flex gap-[32px]">
          {other_services.map((data, index) => (
            <div
              className="w-[650px] h-[481px] bg-cover pb-[30px] text-white font-semibold text-[36px] font-serif flex justify-center items-end"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.52)), url(${data.img})`,
              }}
            >
              {data.title}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-[32px]">
        <h1 className="font-serif font-semibold text-3xl  ">
          Gemstone Buying Guide
        </h1>

        <div className="flex flex-col justify-center  items-center  w-[92vw]  rounded-[10px] ">
          <div className="flex gap-[20px]  w-screen  items-center justify-center ">
            {Buying_Guide.map((data, index) => (
              <div
                className="thisdiv hover:overflow-y-auto w-[427px] h-[471px] p-[20px] flex flex-col gap-[16px] group bg-cover rounded-[10px] hover:shadow-2xl "
                key={index}
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(255, 255, 255, 0), rgba(0, 0, 0, 0.99)), url(${data.bg})`,
                }}
              >
                <h6 className="font-extrabold text-[14px] text-white">
                  {data.title}
                </h6>
                <p className="hidde font-serif text-[20px] leading-[28px] font-bold  text-white">
                  {data.heading}
                </p>
                <p className="hidde text-[16px] text-[#FE7235] ">Read More</p>
                <p className="activ absolut opacity-0 bottom-[170px] text-[#475569] font-normal">
                  {data.para}
                </p>
                <p className="activ absolut opacity-0 bottom-[170px] text-[#475569] font-normal">
                  {data.para2}
                </p>
                <p className="activ absolut opacity-0 bottom-[170px] text-[#475569] font-normal">
                  {data.para3}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-[92vw] custom-xl-max:w-[92vw] flex flex-col gap-[32px]">
        <h1 className="font-serif font-semibold text-3xl">Customer Reviews</h1>

        <Reviews />
      </div>

      <div className="w-[92vw] flex flex-col  gap-[32px]">
        <h1 className="font-serif font-semibold text-3xl">
          Frequently Asked Questions
        </h1>
        <Faq_comp />
      </div>
    </div>
  );
};

export default Homepage;
