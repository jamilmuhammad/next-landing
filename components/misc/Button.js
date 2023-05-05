import React from "react";

export const BUTTON_TYPE_CLASS = {
  base: 'py-3 lg:py-4 px-12 lg:px-16 rounded-lg hover:shadow-primary-md transition-all outline-none text-white-500 font-semibold bg-primary-500 ',
  base_outline: 'font-medium tracking-wide py-2 px-5 sm:px-8 border border-primary-500 text-primary-500 bg-white-500 outline-none rounded-l-full rounded-r-full capitalize hover:bg-primary-500 hover:text-white-500 transition-all hover:shadow-primary ',
};

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
