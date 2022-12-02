import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

const Product = (props) => {
  const [hoverEffect, setHoverEffect] = useState("opacity-0");

  function handleHlverEffect() {
    setHoverEffect("opacity-1 bg-[rgba(0,0,0,0.2)]");
  }

  function handleHoverExit() {
    setHoverEffect("opacity-0");
  }
  const iconStyle =
    "h-[40px]  w-[40px]  rounded-full bg-white flex items-center justify-center m-3 cursor-pointer hover:bg-[#894af3] hover:text-white hover::scale-[1.1] ease-in duration-100 cursor-pointer";

  //return
  return (
    <div
      className="flex flex-1 items-center  justify-center min-w-[250px] min-h-[350px] overflow-hidden rounded-md shadow-lg m-2 relative"
      onMouseEnter={handleHlverEffect}
      onMouseLeave={handleHoverExit}
    >
      <img src={props.item.src} alt="product_image" />

      <div
        className={
          `flex items-center justify-center w-[100%] h-[100%] absolute ease-in duration-150 ` +
          hoverEffect
        }
      >
        {/*Icons */}

        <div>
          <FiShoppingCart className={iconStyle} />
        </div>
        <div>
          <MdOutlineFavoriteBorder className={iconStyle} />
        </div>
        <div>
          <AiOutlineSearch className={iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default Product;
