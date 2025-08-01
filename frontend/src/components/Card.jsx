import React from "react";

const Card = ({ image, title, category }) => {
  return (
    <div className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-80 bg-white"
    >
      <img src={image}
        alt="City skyline" className="w-full h-52 object-cover"
      />
      <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800">
        {title}
      </h3>
      <p className="text-sm px-4 pb-6 text-gray-600 w-5/6">
        {category}
      </p>
    </div>
  );
};
export default Card;