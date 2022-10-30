import React from "react";
import image from "../../../src/images/opps-animation-image.gif";

const NotFound = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen">
        <h1 className="text-sm md:text-sm lg:text-4xl text-center pt-3 lg:pt-5 font_style">Opps!! The page you are looking that not found!</h1>
        <div>
          <img className="mx-auto pt-5 w-40 lg:w-96 rounded-md" src={image} alt="avatar" />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
