import React from "react";
import image from "../../../src/images/win-animation-image.gif";

const Product = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-sm md:text-sm lg:text-4xl text-center pt-3 lg:pt-5 font_style">Yahhhhhh !! I'm always in win win situation</h1>
      <div>
        <img className="mx-auto w-[300px] md:w-[500px] lg:w-[800px] pt-3" src={image} alt="avatar" />
      </div>
    </div>
  );
};

export default Product;
