import React from "react";

export const BUTTON_TYPE_CLASS = {
  base: 'py-3 lg:py-4 px-12 lg:px-16 rounded-lg hover:shadow-orange-md transition-all outline-none text-white-500 font-semibold bg-orange-500 ',
  base_outline: 'font-medium tracking-wide py-2 px-5 sm:px-8 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange ',
  playstore: 'font-medium tracking-wide py-4 px-8 sm:px-14 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-lg capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange bg-playstore bg-cover bg-no-repeat ',
  appstore: 'font-medium tracking-wide py-4 px-8 sm:px-14 border border-orange-500 text-orange-500 bg-white-500 outline-none rounded-lg capitalize hover:bg-orange-500 hover:text-white-500 transition-all hover:shadow-orange bg-appstore bg-cover bg-no-repeat ',
};

/* const getButtonType = (buttonType = BUTTON_TYPE_CLASS.base) => (
  {
    [BUTTON_TYPE_CLASS.base]
  }
) */

const Button = ({ children, buttonType = BUTTON_TYPE_CLASS.base, addClass = '' }) => {
  return (
    <button
      className={
        ' ' +
        buttonType +
        addClass
      }
    >
      {children}
    </button>
  );
};

export default Button;
