import React, { useEffect, useState } from "react";
import LinkedIn from "../../public/assets/Icon/linkedin.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/future/image";
import Link from "next/link";
const Footer = () => {
  const [isToTop, setIsToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
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
      <div className="bg-white-300 pt-44 pb-24">
        <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
          <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
            <Image
              src="/assets/logo_wigo1.png"
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
              <a href="https://www.linkedin.com/company/wigoindonesia/" className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
                <LinkedIn className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/wigoindonesia/" className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
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
