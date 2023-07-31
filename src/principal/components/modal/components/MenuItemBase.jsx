import { useState } from "react";

const MenuItemBase = ({ text, options, onClick }) => {
  const [spanColor, setSpanColor] = useState("text-secondary-text");

  const handleOptionHover = () => {
    setSpanColor("text-tertiary transition-colors duration-200");
  };

  const handleOptionLeave = () => {
    setSpanColor("text-secondary-text transition-colors duration-200");
  };

  return (
    <div>
      <div className="flex items-baseline justify-start space-x-2">
        <span className={`text-[5vh] font-bold leading-[1.125] ${spanColor}`}>
          +
        </span>
        <span className={`text-[5vh] font-bold leading-[1.125] ${spanColor}`}>
          {text}
        </span>
      </div>
      <div className="flex items-baseline justify-start space-x-2 ">
        <span className={`text-[5vh] font-bold leading-[1.125] ${spanColor}`}>
          &nbsp; &nbsp; en
        </span>
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onClick(index)}
            className="text-[5vh] font-bold leading-[1.125] text-secondary-text transition-colors duration-200 hover:text-tertiary"
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
