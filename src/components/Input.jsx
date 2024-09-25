import React from "react";

const Input = ({ title, value, onChange }) => {
  return (
    <div>
      <div>
        <p className="text-[20px]">{title}</p>
        <div className="shadow-md h-8">
          <input
            className="border  w-full h-full outline-none p-[10px]"
            type="text"
            value={value}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Input;
