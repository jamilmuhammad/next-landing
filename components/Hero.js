import React, { useMemo } from "react";
import Image from "next/image";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Button, { BUTTON_TYPE_CLASS } from "./misc/Button";

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
              One stop recreation only on <strong>WIGO</strong>.
            </h1>
            <p className="text-white-300 mt-8 mb-2">
              WIGO adalah platform yang dibuat oleh anak bangsa khusus untuk pariwisata, anda bisa mendapatkan referensi tempat wisata, mulai dari wisata halal, desa wisata, eat & view, hidden gems, dan lain-lain.
            </p>
            <motion.div
              className="flex items-center justify-start sm:justify-start py-4 sm:py-6 w-8
              /12 sm:w-auto sm:mx-0 space-x-6"
              custom={{ duration: 2 }}
              variants={scrollAnimation}
            >
              <Button buttonType={BUTTON_TYPE_CLASS.playstore} ></Button>
              <Button buttonType={BUTTON_TYPE_CLASS.appstore} ></Button>
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Hero;
