import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Button from "./misc/Button";
import Destination from "./Destination";

const Profile = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="profile"
    >
      <div className="max-w-screen-lg  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="overflow-hidden flex flex-col w-full">
          <ScrollAnimationWrapper className="items-center mx-auto">
            <motion.div className="grid my-6">
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
              >
                Connecting The World Tourism by <span className="underline underline-offset-[3px] relative text-primary-600">WIGO</span>
              </motion.h3>
            </motion.div>
            <motion.div className="relative overflow-hidden rounded-lg shadow-md dark:shadow-gray-800">
              <video controls loop >
                <source src="/assets/intro_wigo.mp4" type="video/mp4" />
              </video>
              {/* <div className="absolute bottom-1/2 top-1/2 left-2.8/4 right-2/4 text-center">
                  <a href="#!" data-type="youtube" data-id="yba7hPeTSjk" className="lightbox rounded-full shadow-lg dark:shadow-gray-500 inline-flex items-center justify-center bg-gray-100 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-indigo-600 text-indigo-600 hover:text-white duration-500 ease-in-out">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-20 h-20 inline-flex items-center justify-center stroke-primary-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                    </svg>
                  </a>
                </div> */}
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full pt-12" id="testimoni">
          <ScrollAnimationWrapper className="w-full flex flex-col py-6">
            <motion.div variants={scrollAnimation}>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
              >
                Now available on <span className="underline underline-offset-[3px] relative text-primary-600">WIGO</span>
              </motion.h3>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-6">
            <motion.div variants={scrollAnimation}>
              <Destination />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full pt-12" id="nextfeature">
          <ScrollAnimationWrapper className="w-full flex flex-col py-6">
            <motion.div variants={scrollAnimation}>
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
              >
                Our future development in <span className="underline underline-offset-[3px] relative text-primary-600">WIGO</span>
              </motion.h3>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <motion.div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 text-center">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>

              <div className="content mt-7">
                <a href="/" className="title h5 text-lg font-medium hover:text-indigo-600">Object Scanning</a>
                <p className="text-slate-400 mt-3">Experience easy 3D object viewing with Augmented Reality technology</p>

                <div className="mt-5">
                  <a href="/" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                </div>
              </div>
            </motion.div>

            <motion.div className="p-6 shadow-xl shadow-gray-100 dark:shadow-gray-800 transition duration-500 rounded-2xl mt-6 text-center">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>

              <div className="content mt-7">
                <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Inside Virtual Tour</a>
                <p className="text-slate-400 mt-3">Explore a new dimension of tourism with Virtual Reality technology</p>

                <div className="mt-5">
                  <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                </div>
              </div>
            </motion.div>

            <motion.div className="p-6 hover:shadow-xl hover:shadow-gray-100 dark:hover:shadow-gray-800 transition duration-500 rounded-2xl mt-6 text-center">
              <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>

              <div className="content mt-7">
                <a href="page-services.html" className="title h5 text-lg font-medium hover:text-indigo-600">Automate Security System</a>
                <p className="text-slate-400 mt-3">Automate your security with our advanced system</p>

                <div className="mt-5">
                  <a href="page-services.html" className="btn btn-link text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500 ease-in-out">Read More <i className="uil uil-arrow-right"></i></a>
                </div>
              </div>
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full my-10">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-4 sm:py-10 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Have Question? <br /> Get in touch!
                  </h5>
                  <p>If you have any questions or inquiries, please do not hesitate to contact us!</p>
                </div>
                <Button addClass="flex flex-row">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  Contact Us
                </Button>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 rounded-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Profile;
