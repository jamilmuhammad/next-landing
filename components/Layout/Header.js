import React, { useState, useEffect } from "react";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";

import Image from "next/future/image";

import { useGlobalContext } from "../../contexts";

const Header = () => {
  const [activeLink, setActiveLink] = useState(null);
  const [scrollActive, setScrollActive] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const {darkMode, setDarkMode} = useGlobalContext();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full z-30 transition-all " +
          (scrollActive ? "bg-white-500 dark:bg-black-500 shadow-md pt-0" : "bg-white-500 dark:bg-black-500 lg:bg-transparent lg:dark:bg-transparent pt-2")
        }
      >
        <nav className="relative lg:bg-transparent max-w-screen-xl top-0 left-0 right-0 px-6 sm:px-8 lg:px-16 mx-auto flex flex-wrap py-3 sm:py-4">
          <div className="order-0 flex justify-center items-center mr-2">
            <Image
              src={scrollActive ? (darkMode ? "/assets/logo_wigo_w1.png" : "/assets/logo_wigo1.png") : "/assets/logo_wigo_w1.png"}
              width={65}
              height={65}
              className="hidden lg:inline-block "
              alt="Wigo Indonesia"
              layout="raw"
            />
            <Image
              src={darkMode ? "/assets/logo_wigo1.png" : "/assets/logo_wigo_w1.png"}
              width={65}
              height={65}
              className="inline-block lg:hidden"
              alt="Wigo Indonesia"
              layout="raw"
            />
          </div>
          <div className="order-2 font-medium flex ml-auto items-center">
            <button
              id="show-button"
              className="flex cursor-pointer items-center md:hidden md:order-1"
              onClick={() => setNavOpen(!navOpen)}
            >
              {navOpen ? (
                <svg className="h-6 fill-black-500 dark:fill-white-500" viewBox="0 0 20 20">
                  <title>Menu Open</title>
                  <polygon
                    points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                    transform="rotate(45 10 10)"
                  />
                </svg>
              ) : (
                <svg className="h-6 fill-black-500 dark:fill-white-500" viewBox="0 0 20 20">
                  <title>Menu Close</title>
                  <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
                </svg>
              )}
            </button>
          </div>
          <div className={`order-3 lg:order-1 overflow-hidden w-full md:max-h-full md:w-auto " + ${navOpen ? " max-h-[1000px] " : " max-h-0 "}`}>
            <ul className=" lg:flex-row flex flex-col text-black-500 dark:text-white-500 lg:dark:text-gray-400  items-center">
              <LinkScroll
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("about");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "about"
                    ? " text-primary-600 animation-active "
                    : " text-black-500 dark:text-white-500 lg:dark:text-gray-400 hover:text-primary-600 a")
                }
              >
                About
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to="feature"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("feature");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "feature"
                    ? " text-primary-600 animation-active "
                    : " hover:text-primary-600 ") +
                  (scrollActive ? " text-black-600 dark:text-white-500 lg:dark:text-gray-400 " : " text-black-600 dark:text-white-500 lg:dark:text-gray-400 lg:text-gray-400 ")
                }
              >
                Feature
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to="profile"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("profile");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "profile"
                    ? " text-primary-600 animation-active "
                    : " hover:text-primary-600 ") +
                  (scrollActive ? " text-black-600 dark:text-white-500 lg:dark:text-gray-400 " : " text-black-600 dark:text-white-500 lg:dark:text-gray-400 lg:text-gray-400 ")
                }
              >
                Profile
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to="tourism"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("tourism");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "tourism"
                    ? " text-primary-600 animation-active "
                    : " hover:text-primary-600 ") +
                  (scrollActive ? " text-black-600 dark:text-white-500 lg:dark:text-gray-400 " : " text-black-600 dark:text-white-500 lg:dark:text-gray-400 lg:text-gray-400 ")
                }
              >
                Tourism
              </LinkScroll>
              <LinkScroll
                activeClass="active"
                to="nextfeature"
                spy={true}
                smooth={true}
                duration={1000}
                onSetActive={() => {
                  setActiveLink("nextfeature");
                }}
                className={
                  "px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative" +
                  (activeLink === "nextfeature"
                    ? " text-primary-600 animation-active "
                    : " hover:text-primary-600 ") +
                  (scrollActive ? " text-black-600 dark:text-white-500 lg:dark:text-gray-400 " : " text-black-600 dark:text-white-500 lg:dark:text-gray-400 lg:text-gray-400 ")
                }
              >
                Development
              </LinkScroll>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
