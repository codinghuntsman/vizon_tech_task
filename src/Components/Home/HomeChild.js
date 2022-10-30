import React from "react";
import "./HomeChild.css";
import image from "../../../src/images/webiner.png";

const HomeChild = ({ product }) => {
  const { name, description } = product;
  return (
    <div>
      <div className="card rounded-md lg:card-side zoom box_shadow_style">
        <figure>
          <img className=" w-[100px] md:w-[150px] lg:w-[155px]" src={image} alt="Album" />
        </figure>
        <div className="p-2">
          <h2 className="text-[18px] text-center md:text-left md:text-xl lg:text-[31.5px] text-white tracking-wider pb-1 lg:pb-3 font_style">{name}</h2>
          <p className="text-justify text-gray-200 break-all text-xs md:text-base lg:text-[16px] font-bold">{description}</p>
          <div className="card-actions justify-center md:justify-end lg:justify-end">
            <button className="btn-xs bg-[#2486a1] hover:bg-[#1D6D83] border-none font-bold font-sans text-gray-200 text-[10px] md:text-[12px] lg:text-[11px] rounded-lg transition duration-100 ease-in-out">
              {" "}
              <a href="https://vizon.tech/index.html" target="_blank" rel="noreferrer">
                INTERESTED
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeChild;
