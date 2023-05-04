import Image from "next/image";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";
import Link from "next/link";

const features = [
  "Powerfull online protection.",
  "Easy to maintain transaction records",
  "No specific time limits."
]

const Feature = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="max-w-screen-xl mt-8 mb-6 sm:mt-14 sm:mb-14 px-6 sm:px-8 lg:px-16 mx-auto"
      id="feature"
    >
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/wigo_app.png"
              alt="Wigo App"
              layout="responsive"
              quality={100}
              height={55}
              width={45}
            />
          </motion.div>
        </ScrollAnimationWrapper>
        <ScrollAnimationWrapper>

          <motion.div className="flex flex-col items-end justify-center ml-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We Provide Payment Online Method
            </h3>
            <p className="my-2 text-black-500">
              Pengunjung dapat membeli tiket melalui platform WIGO
              dan juga dapat membeli merchandise melalui QRIS.
            </p>
            <ul className="text-black-500 self-start list-inside">
              {features.map((feature, index) => (
                <motion.li
                  className="relative custom-list flex flex-row"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-primary-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {feature}
                </motion.li>
              )
              )}
            </ul>
            <motion.div className="mr-auto mt-4">
              <Link href="mailto:hello@wondergo.id">
                <a className="text-primary-100 capitalize tracking-wide hover:text-orange-500 transition-all flex flex-row items-center">
                  Find out more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
      <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-2 gap-8 p  y-8 my-12">
        <ScrollAnimationWrapper>

          <motion.div className="flex flex-col items-start justify-center mr-auto w-full lg:w-9/12" variants={scrollAnimation}>
            <h3 className="text-3xl lg:text-4xl font-medium leading-relaxed text-black-600">
              We Provide Analytic for Merchant
            </h3>
            <p className="my-2 text-black-500">
              Sebagai mitra Anda, Kami menyediakan dashboard analitik
              untuk pertumbuhan obyek wisata Anda.
            </p>
            <ul className="text-black-500 self-start list-inside">
              {features.map((feature, index) => (
                <motion.li
                  className="relative custom-list flex flex-row"
                  custom={{ duration: 2 + index }}
                  variants={scrollAnimation}
                  key={feature}
                  whileHover={{
                    scale: 1.1,
                    transition: {
                      duration: .2
                    }
                  }}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 stroke-primary-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {feature}
                </motion.li>
              )
              )}
            </ul>
            <motion.div className="mr-auto mt-4">
              <Link href="mailto:hello@wondergo.id">
                <a className="text-primary-100 capitalize tracking-wide hover:text-orange-500 transition-all flex flex-row items-center">
                  Find out more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </a>
              </Link>
            </motion.div>
          </motion.div>
        </ScrollAnimationWrapper>

        <ScrollAnimationWrapper className="flex w-full justify-end">
          <motion.div className="h-full w-full p-4" variants={scrollAnimation}>
            <Image
              src="/assets/wigo_dashboard.png"
              alt="Wigo Dashboard"
              layout="responsive"
              quality={100}
              height={55}
              width={70}
            />
          </motion.div>
        </ScrollAnimationWrapper>
      </div>
    </div>
  );
};

export default Feature;
