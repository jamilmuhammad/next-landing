import React, { useEffect, useState } from "react";
import LinkedIn from "../../public/assets/Icon/linkedin.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/future/image";
import Link from "next/link";
import { useGlobalContext } from "../../contexts";
const Footer = () => {
  const [isToTop, setIsToTop] = useState(false);
  const {darkMode, setDarkMode} = useGlobalContext();

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo(0, 0);
  }

  const changeTheme = (event) => {
    event.preventDefault();
    setDarkMode(!darkMode);
    const htmlTag = document.getElementsByTagName("html")[0];

    if (htmlTag.className.includes("dark")) {
      htmlTag.className = 'light'
  } else {
      htmlTag.className = 'dark'
  }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setIsToTop(window.scrollY > 500);
    });
  }, []);
  return (
    <>
      <a href="#" onClick={scrollToTop} className={"fixed mx-2 rounded-full items-center justify-center flex p-2 shadow-md z-10 bottom-5 end-5 h-9 w-9 text-center bg-primary-600 text-white leading-9 " + (isToTop ? ' block' : ' hidden')}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-white-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
        </svg>
      </a>
      <div className="fixed top-[30%] -right-2 z-50">
        <span className="relative inline-block rotate-90">
          <input type="checkbox" checked={darkMode} readOnly className=" checkbox opacity-0 absolute" id="chk" />
          <label onClick={changeTheme} className={" label bg-black-500 dark:bg-white-300 shadow dark:shadow-gray-800 cursor-pointer rounded-full flex justify-between items-center p-1 w-14 h-8"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-6 stroke-yellow-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-6 stroke-yellow-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
            <span className={" ball bg-white-300 dark:bg-black-500 rounded-full absolute top-0.5 left-0.5 w-7 h-7"}></span>
          </label>
        </span>
      </div>
      <div className="bg-white-300 dark:bg-black-600 pt-44 pb-24">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
          <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
            <Image
              src={darkMode ? "/assets/logo_wigo_w1.png" : "/assets/logo_wigo1.png"}
              width={65}
              height={65}

              alt="Wigo Indonesia"
            />
            <p className="my-4">
              Indonesia's 1st tourism-focused marketplace and social media platform. Connect with
              partners nationwide, enjoy unforgettable experiences. Join WIGO now for the best
              travel experiences in Indonesia.
            </p>
            <div className="flex w-full mt-2 mb-8 -mx-2">
              <a href="https://www.linkedin.com/company/wigoindonesia/" className="mx-2 bg-white-500 dark:bg-black-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <LinkedIn className="h-6 w-6 fill-white-500" />
              </a>
              <a href="https://www.instagram.com/wigoindonesia/" className="mx-2 bg-white-500 dark:bg-black-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
            <p className="text-gray-400">©{new Date().getFullYear()} - PT Jelajah Wisata Digital</p>
          </div>
          <div className=" row-span-2 sm:col-span-2 sm:col-start-5 sm:col-end-7 flex flex-col">
            <p className="text-black-600 mb-4 font-medium text-lg">Company</p>
            <ul className="text-black-500 ">
              <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
                <a href="https://wondergo.id/privacy/">
                  User Privacy & Policy
                </a>
              </li>
              <li className="my-2 hover:text-primary-500 cursor-pointer transition-all">
                <a href="https://wondergo.id/terms-and-condition/">
                  User Terms & Condition
                </a>
              </li>
            </ul>
          </div>
          <div className="row-span-6 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
            <div
              className=" items-center justify-start sm:w-auto sm:mx-0 space-x-6"
            >
              <Link href="https://apps.apple.com/app/wigo/id1607730751">
                <a><Image src="/assets/appstore1.png" width={250} height={100} sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%" quality={75} alt="Wigo App Store"></Image></a>
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=id.wigo.app">
                <a><Image src="/assets/playstore1.png" width={250} height={100} sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%" quality={75} alt="Wigo Play Store"></Image></a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
