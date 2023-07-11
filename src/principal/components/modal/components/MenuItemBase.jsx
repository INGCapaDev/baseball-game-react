import { useState } from "react";

const MenuItemBase = ({ text, options }) => {
  const [spanColor, setSpanColor] = useState("text-white");

  const handleOptionHover = () => {
    setSpanColor("text-orange-300 transition-colors duration-200");
  };

  const handleOptionLeave = () => {
    setSpanColor("text-white transition-colors duration-200");
  };

  return (
    <div>
      <div className="flex items-baseline justify-start space-x-2">
        <span className={`text-[6vh] font-bold leading-[1.125] ${spanColor}`}>
          +
        </span>
        <span className={`text-[6vh] font-bold leading-[1.125] ${spanColor}`}>
          {text}
        </span>
      </div>
      <div className="flex items-baseline justify-start space-x-2 ">
        <span className={`text-[6vh] font-bold leading-[1.125] ${spanColor}`}>
          &nbsp; &nbsp; en
        </span>
        {options.map((option, index) => (
          <button
            key={index}
            className="text-[6vh] font-bold leading-[1.125] text-white hover:text-orange-300 transition-colors duration-200"
            onMouseEnter={handleOptionHover}
            onMouseLeave={handleOptionLeave}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default MenuItemBase;
