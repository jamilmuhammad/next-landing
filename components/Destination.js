import React, { useState } from "react";

// import react slick
import Slider from "react-slick";
import Image from "next/future/image";
import ArrowBack from "../public/assets/Icon/eva_arrow-back-fill.svg";
import ArrowNext from "../public/assets/Icon/eva_arrow-next-fill.svg";
import { Link } from "react-scroll";

const Destination = ({
  listDestination = [
    {
      name: "Taman Mini Indonesia Indah",
      image: "/assets/tmii.jpg",
      city: "Cipayung",
      country: "Jakarta Timur",
      link: "https://wigoapp.page.link/pmdpCnSjN7JH2vNa6",
      alt: "Taman Mini Indonesia Indah on Wigo",
      description:
        "Experience Indonesia's diverse culture at Taman Mini Indonesia Indah through miniature archipelago, regional pavilions, arts, recreation, and educational facilities",
    },
    {
      name: "Bunaken National Park",
      image: "/assets/bunaken.jpeg",
      city: "Wori",
      country: "Minahasa",
      link: "https://wigoapp.page.link/aQt3feBoXZe9Rama8",
      alt: "Bunaken National Park on WIGO",
      description:
        "Explore the marine ecosystem of Taman Nasional Bunaken, Indonesia's first marine park established in 1991, listed as a UNESCO World Heritage Site in 2005.",
    },
    {
      name: "Ancol",
      image: "/assets/ancol.jpg",
      city: "Pademangan",
      country: "Jakarta Utara",
      link: "https://wigoapp.page.link/fdJ2P1qC29C891ey6",
      alt: "Ancol on WIGO",
      description:
        "Discover Ancol Dreamland, a popular family-friendly tourist destination in North Jakarta, known for its various exciting rides and attractions.",
    },
    {
      name: "Ragunan",
      image: "/assets/ragunan.jpg",
      city: "Ps. Minggu",
      country: "Jakarta Selatan",
      link: "https://wigoapp.page.link/DJYRt4Txtejsa1ZZ6",
      alt: "Ragunan on WIGO",
      description:
        "Ragunan is famous for its zoo, large rainforest park with primates, elephants, Sumatran tigers, and a popular shady trail for runners.",
    },
    {
      name: "Labuan Bajo",
      image: "/assets/labuanbajo.jpeg",
      city: "Komodo",
      country: "Manggarai Barat",
      link: "https://wigoapp.page.link/YQ72GbTEuhbHK2ZQ8",
      alt: "Labuan Bajo on WIGO",
      description:
        "Labuan Bajo's Pink Beach is a unique Indonesian attraction with rare pink sand, found in only a few locations, including the famous Pink Beach in Lombok.",
    },
  ],
}) => {
  const settings = {
    dots: true,
    customPaging: function (i) {
      return (
        <a className="">
          <span className="mx-2 rounded-l-full rounded-r-full h-4 w-4 block cursor-pointer transition-all "></span>
        </a>
      );
    },
    dotsClass: "slick-dots w-max absolute mt-20  ",
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [sliderRef, setSliderRef] = useState(null);

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        ref={setSliderRef}
        className="flex "
      >
        {listDestination.map((listDestinations, index) => (
          <div className="px-3 col-span-1 flex-1 h-96" key={index}>
            <a href={listDestinations.link}>
              <div className="border-2 border-gray-500 hover:border-primary-500 transition-all rounded-lg p-8 block overflow-hidden h-full text-left">
                <div className="flex flex-col xl:flex-row w-full xl:items-center">
                  <div className="flex order-2 xl:order-1">
                    <div className="flex flex-col text-left">
                      <Image
                        src={listDestinations.image}
                        quality={100}
                        height={250}
                        width={250}
                        className="object-cover h-24 w-25"
                        alt={listDestinations.alt}
                      />
                      <p className="text-lg text-black-600 capitalize">
                        {listDestinations.name}
                      </p>
                      <span className="waves-effect waves-light flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <p className="text-sm text-black-500 capitalize inline-block">
                          {listDestinations.city},{listDestinations.country}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
                <p>{listDestinations.description}</p>
              </div>
            </a>
          </div>
        ))}
      </Slider>
      <div className="flex w-full items-center justify-end">
        <div className="flex flex-none justify-between w-auto mt-14">
          <div
            className="mx-4 flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary-500 border hover:bg-primary-500 hover:text-white-500 transition-all text-primary-500 cursor-pointer"
            onClick={sliderRef?.slickPrev}
          >
            <ArrowBack className="h-6 w-6 " />
          </div>
          <div
            className="flex items-center justify-center h-14 w-14 rounded-full bg-white border-primary-500 border hover:bg-primary-500 hover:text-white-500 transition-all text-primary-500 cursor-pointer"
            onClick={sliderRef?.slickNext}
          >
            <ArrowNext className="h-6 w-6" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Destination;
