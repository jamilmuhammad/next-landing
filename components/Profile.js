import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Button from "./misc/Button";

const Profile = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="profile"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="overflow-hidden flex flex-col w-full">
          <ScrollAnimationWrapper className="items-center mx-auto">
            <motion.div className="grid mt-8">
              <motion.h3
                variants={scrollAnimation}
                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed"
              >
                Lorem ipsum dolor s
              </motion.h3>
              <motion.p
                variants={scrollAnimation}
                className="leading-normal w-10/12 sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
              >
                Let's choose the package that is best for you and explore it happily
                and cheerfully.
              </motion.p>
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
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Have interested <br /> Get Special Features!
                  </h5>
                  <p>Let's be merchant with us.</p>
                </div>
                <Button>Contact Us</Button>
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
