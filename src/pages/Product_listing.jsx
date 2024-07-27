import React from "react";
import Sidebar from "../component/core/Product_listing/Sidebar";
import Categories_button from "../component/common/Categories_button";
import Cardcategories from "../component/common/Cardcategories";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const Product_listing = () => {
  const [categories, setcategories] = useState("");
  const categories_btn_data = ["Loose", "Rings", "Pendants", "Bracelets"];
  const card_data = [
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },
    {
    //   id: "1",
      title: "Ruby (Manik)",
      star_sign: "Virgo | Sagittarius | Cancer",
      para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      image:
        "https://s3-alpha-sig.figma.com/img/d91f/8466/b133ab5e4aa47c8581a27ff782f2b135?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FCEWn0u39RjIGslUxB~lwtD1q0TRvuKqFth4ShE94hqxlTXqII6J8Tc39YIajnMk0ARwpPsPTST~SGVsV0uluNFZ0iWdl1PEqv6r7siGqenvNrwXvHWv6O0pzL8hlDyvqWYzTF7btJO5A~EL3S-wjc7rAGitA4s~miv8xOEBsO1CkOFj3oGq~VNyP88~3ONKPb3hHFN59ZVIjPwz3F-BNYTnh3bUIUxAG8n3mHWPYcZPF7njsmkCStOOGu25epY0TrW9TL-UudwthMkFfCgCdOewJ4P-eJkta~CDYVqG5MwUjEwPz-gZBgNLHd5XnEtLl9DKWGPPv7GO7lPPxAGK3A__",
    },

  ];

  const navigator_data =[
  "Homepage",
  "Gemstone",
  "Sapphires",
  "Blue Sapphires"
  ]
  return (
    <div className="w-screen flex">
      <div className="w-[100%] flex gap-7">
      <Sidebar />


      <div className="flex flex-col gap-[11px] w-9/12">
<div className="py-[10px]  flex gap-[10px]">
{  navigator_data.map((data,index)=>(
<div key={index} className="flex gap-[2px] items-center text-[#64748B]">
<p className=" text-[14px] font-[400]">{data} </p>
<MdKeyboardArrowRight className="h-[20px] w-[20px] "/>
</div>
    ))

  }
  </div>

        <h1 className="font-[600] font-serif text-[30px] leading-[36px]">Blue Sapphires</h1>
        <div className="flex flex-col gap-[8px]">
        <p className="font-[300] ">
          Blue Sapphire (Neelam Stone) is a highly precious, blue-colored
          gemstone of the Corundum mineral family. Recognized as the most
          powerful and fastest-acting gemstone in Vedic astrology, Neelam Ratna
          brings instant wealth, fame, and success to the wearer’s life.
        </p>
        <p className="font-[300] text-[16px] text-[#475569]">For: Wealth | Fame | Success</p>
        </div>
        <div className="flex flex-col gap-[45px]">
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
        <div className="grid grid-cols-4  justify-center items-center gap-4 carousel_categories">
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

        </div>
        </div>

        </div>
      </div>
    </div>
  );
};

export default Product_listing;
