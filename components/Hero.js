import React, { useMemo } from "react";
import Image from "next/future/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Button, { BUTTON_TYPE_CLASS } from "./misc/Button";
import { Link } from "react-scroll";

const Hero = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="mx-auto"
      id="about"
    >
      <ScrollAnimationWrapper className="w-full h-screen bg-bromoscene bg-cover bg-center bg-no-repeat bg-fixed">
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-128 py-6 sm:py-16 max-w-screen-xl px-8 xl:px-16 mx-auto h-screen w-full"
          variants={scrollAnimation}>
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-white-500 leading-normal">
              <strong>WIGO</strong>
            </h1>
            <p className="text-white-300 mt-8 mb-2">
              Indonesia's 1st tourism-focused marketplace and social media platform. Connect with
              partners nationwide, enjoy unforgettable experiences. Prioritizing quality, usability, and
              safety, we benefit both users and partners. Join WIGO now for the best travel
              experiences in Indonesia.
            </p>
            <motion.div
              className="flex items-center justify-start sm:w-auto sm:mx-0 space-x-6"
              custom={{ duration: 2 }}
              variants={scrollAnimation}
            >
              <Link to="/">
                <Image src="/assets/appstore1.png" width={250} height={150} sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%" quality={75} alt="Wigo App Store"></Image>
              </Link>
              <Link to="/">
                <Image src="/assets/playstore1.png" width={250} height={150} sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%" quality={75} alt="Wigo Play Store"></Image>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
