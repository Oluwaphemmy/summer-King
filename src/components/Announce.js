import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Announce = () => {
  const [announceStyle, setannounceStyle] = useState(
    "bg-[#8a4af3] font-bold text-white flex items-center  justify-center"
  );

  const handleclose = () => {
    setannounceStyle("hidden");
  };

  return (
    <div className={announceStyle}>
      <h2>Hurry up, its 40% off now</h2>
      <AiOutlineClose className="cursor-pointer" onClick={handleclose} />
    </div>
  );
};

export default Announce;
